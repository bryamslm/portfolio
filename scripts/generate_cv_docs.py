# -*- coding: utf-8 -*-
"""
Genera los CV en PDF y TXT (ES + EN) desde scripts/cv.build.json, que a su vez
sale de src/content/cv.ts. Una sola fuente: el sitio, el PDF y el TXT no
pueden volver a divergir.

Uso:  npm run cv:build     (exporta el JSON y luego corre este script)

Decisiones que importan para un ATS y que no son obvias:
  - Letter, no A4: alinea con el @page de CvPrint.tsx y es el tamano de CR/US.
  - Educacion y Certificaciones van como dos encabezados separados; fusionadas,
    algunos parsers detectan solo el primero y descartan las certificaciones.
  - El titular es monolingue por version. Los parsers toman la linea completa
    como job title, y una linea bilingue ensucia ese campo.
  - /Title, /Subject, /Keywords y /Lang se llenan de verdad: son campos que
    varios ATS indexan y estaban en "(unspecified)".
  - Una sola columna, sin tablas ni imagenes, contacto como texto corrido y
    fuera de header/footer: es lo que separa un PDF parseable de uno que no.
"""
from pathlib import Path
import json
import re
import shutil
import textwrap

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.pdfgen import canvas as pdfcanvas
from reportlab.platypus import HRFlowable, Paragraph, SimpleDocTemplate, Spacer

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public" / "documents"
DATA = Path(__file__).resolve().parent / "cv.build.json"

# Etiquetas de seccion por idioma. El resto del contenido sale de cv.ts.
LABELS = {
    "es": {
        "profile": "Perfil profesional",
        "experience": "Experiencia profesional",
        "skills": "Habilidades tecnicas",
        "projects": "Proyectos destacados",
        "education": "Educacion",
        "certifications": "Certificaciones",
        "languages": "Idiomas",
        "doc_title": "Curriculum - {name}",
        "doc_subject": "Curriculum profesional de {name}, {headline}.",
    },
    "en": {
        "profile": "Professional summary",
        "experience": "Professional experience",
        "skills": "Technical skills",
        "projects": "Selected projects",
        "education": "Education",
        "certifications": "Certifications",
        "languages": "Languages",
        "doc_title": "Resume - {name}",
        "doc_subject": "Professional resume of {name}, {headline}.",
    },
}

# Los encabezados llevan tilde en el documento; se declaran aparte para no
# depender de la codificacion del archivo fuente al editarlo.
LABELS["es"]["skills"] = "Habilidades técnicas"
LABELS["es"]["education"] = "Educación"
LABELS["es"]["doc_title"] = "Currículum - {name}"
LABELS["es"]["doc_subject"] = "Currículum profesional de {name}, {headline}."


def build_styles():
    base = getSampleStyleSheet()
    return {
        "name": ParagraphStyle("Name", parent=base["Title"], fontName="Helvetica-Bold", fontSize=17, leading=20, textColor=colors.HexColor("#111827"), alignment=TA_LEFT, spaceAfter=2),
        "title": ParagraphStyle("Titular", parent=base["Normal"], fontName="Helvetica", fontSize=9.3, leading=11.5, textColor=colors.HexColor("#374151"), spaceAfter=6),
        "contact": ParagraphStyle("Contact", parent=base["Normal"], fontName="Helvetica", fontSize=7.6, leading=9.8, textColor=colors.HexColor("#4B5563")),
        "section": ParagraphStyle("Section", parent=base["Heading2"], fontName="Helvetica-Bold", fontSize=9.2, leading=10.6, textColor=colors.HexColor("#0F766E"), spaceBefore=7, spaceAfter=2.5),
        "body": ParagraphStyle("Body", parent=base["BodyText"], fontName="Helvetica", fontSize=7.95, leading=9.9, textColor=colors.HexColor("#1F2937"), spaceAfter=2),
        "role": ParagraphStyle("Role", parent=base["BodyText"], fontName="Helvetica-Bold", fontSize=8.35, leading=10, textColor=colors.HexColor("#111827"), spaceAfter=1),
        "company": ParagraphStyle("Company", parent=base["BodyText"], fontName="Helvetica-Oblique", fontSize=7.7, leading=9.2, textColor=colors.HexColor("#4B5563"), spaceAfter=1.5),
        "bullet": ParagraphStyle("Bullet", parent=base["BodyText"], fontName="Helvetica", fontSize=7.5, leading=9.15, leftIndent=8, firstLineIndent=-6, textColor=colors.HexColor("#1F2937"), spaceAfter=1.2),
        "small": ParagraphStyle("Small", parent=base["BodyText"], fontName="Helvetica", fontSize=7.5, leading=9.15, textColor=colors.HexColor("#1F2937"), spaceAfter=1.5),
    }


def esc(text):
    """Escapa lo minimo para el mini-HTML de Paragraph."""
    return text.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")


def phone_pretty(raw):
    """+50662633553 -> +506 6263 3553. Los parsers de telefono aciertan mas con
    el numero agrupado; en cv.ts se guarda sin espacios por el enlace wa.me."""
    digits = re.sub(r"\D", "", raw)
    if digits.startswith("506") and len(digits) == 11:
        return "+506 " + digits[3:7] + " " + digits[7:]
    return raw


def is_phone(value):
    return re.fullmatch(r"\+?[\d\s]+", value) is not None


def contact_line(cv):
    return "  |  ".join(
        c["label"] + ": " + (phone_pretty(c["value"]) if is_phone(c["value"]) else c["value"])
        for c in cv["contact"]
    )


def strip_url(url):
    return re.sub(r"^https?://", "", url).rstrip("/")


def project_line(proj):
    # cvLine es la version corta pensada para el impreso; description es la de la web.
    parts = [proj["title"].split(" - ")[0] + ": " + (proj.get("cvLine") or proj["description"])]
    parts.append("Stack: " + ", ".join(proj["techStack"]) + ".")
    if proj.get("liveDemo"):
        parts.append(strip_url(proj["liveDemo"]))
    if proj.get("repoLink"):
        parts.append(strip_url(proj["repoLink"]))
    return " ".join(parts)


def education_line(cv):
    out = []
    for e in cv["education"]:
        line = e["title"] + " — " + e["institution"] + ", " + e["period"] + "."
        for h in e.get("highlights") or []:
            line += " " + h
        out.append(line)
    return " ".join(out)


def certifications_line(cv):
    return "; ".join(c["title"] + " (" + c["provider"] + ")" for c in cv["certifications"]) + "."


def make_canvas_class(meta):
    """ReportLab solo expone /Subject, /Creator, /Keywords y /Lang desde el
    canvas, no desde SimpleDocTemplate."""

    class MetaCanvas(pdfcanvas.Canvas):
        def save(self):
            self.setTitle(meta["title"])
            self.setAuthor(meta["author"])
            self.setSubject(meta["subject"])
            self.setCreator(meta["creator"])
            self.setKeywords(meta["keywords"])
            self.setCatalogEntry("Lang", meta["lang"])
            super().save()

    return MetaCanvas


def create_pdf(cv, lang, target):
    lab = LABELS[lang]
    styles = build_styles()
    meta = {
        "title": lab["doc_title"].format(name=cv["name"]),
        "author": cv["name"],
        "subject": lab["doc_subject"].format(name=cv["name"], headline=cv["headline"]),
        "creator": "portfolio/scripts/generate_cv_docs.py",
        "keywords": list(cv["keywords"]),
        "lang": "es-CR" if lang == "es" else "en",
    }

    doc = SimpleDocTemplate(
        str(target),
        pagesize=letter,
        leftMargin=15 * mm,
        rightMargin=15 * mm,
        topMargin=12 * mm,
        bottomMargin=11 * mm,
        title=meta["title"],
        author=meta["author"],
        subject=meta["subject"],
        keywords=meta["keywords"],
        creator=meta["creator"],
    )

    story = [
        Paragraph(esc(cv["name"].upper()), styles["name"]),
        Paragraph(esc(cv["headline"]), styles["title"]),
        Paragraph(esc(cv["location"]), styles["contact"]),
        Paragraph(esc(contact_line(cv)), styles["contact"]),
        Spacer(1, 3),
        HRFlowable(width="100%", thickness=0.6, color=colors.HexColor("#D1D5DB")),
        Paragraph(esc(lab["profile"]), styles["section"]),
        Paragraph(esc(cv["summary"]), styles["body"]),
        Paragraph(esc(lab["experience"]), styles["section"]),
    ]

    for exp in cv["experience"]:
        story.append(Paragraph(esc(exp["role"]), styles["role"]))
        story.append(Paragraph(esc(exp["company"] + " | " + exp["period"]), styles["company"]))
        story += [Paragraph("• " + esc(b), styles["bullet"]) for b in exp["bullets"]]
        story.append(Spacer(1, 2))

    story.append(Paragraph(esc(lab["skills"]), styles["section"]))
    story += [
        Paragraph("• " + esc(g["category"] + ": " + ", ".join(g["items"]) + "."), styles["bullet"])
        for g in cv["skills"]
    ]

    story.append(Paragraph(esc(lab["projects"]), styles["section"]))
    story += [Paragraph("• " + esc(project_line(p)), styles["bullet"]) for p in cv["projects"]]

    story.append(Paragraph(esc(lab["education"]), styles["section"]))
    story.append(Paragraph(esc(education_line(cv)), styles["small"]))
    story.append(Paragraph(esc(lab["certifications"]), styles["section"]))
    story.append(Paragraph(esc(certifications_line(cv)), styles["small"]))
    story.append(Paragraph(esc(lab["languages"]), styles["section"]))
    story.append(Paragraph(esc(" · ".join(cv["languages"])), styles["small"]))

    doc.build(story, canvasmaker=make_canvas_class(meta))


def wrap(text, indent=""):
    return textwrap.fill(text, width=96, subsequent_indent=indent)


def create_txt(cv, lang, target):
    """Version en texto plano: varios portales solo aceptan pegar texto."""
    lab = LABELS[lang]
    L = [cv["name"].upper(), cv["headline"], "", cv["location"]]
    for c in cv["contact"]:
        L.append(c["label"] + ": " + (phone_pretty(c["value"]) if is_phone(c["value"]) else c["value"]))
    L += ["", lab["profile"].upper(), wrap(cv["summary"]), "", lab["experience"].upper()]
    for exp in cv["experience"]:
        L.append("")
        L.append(exp["role"])
        L.append(exp["company"] + " | " + exp["period"])
        for b in exp["bullets"]:
            L.append(wrap("- " + b, indent="  "))
    L += ["", lab["skills"].upper()]
    for g in cv["skills"]:
        L.append(wrap("- " + g["category"] + ": " + ", ".join(g["items"]) + ".", indent="  "))
    L += ["", lab["projects"].upper()]
    for p in cv["projects"]:
        L.append(wrap("- " + project_line(p), indent="  "))
    L += ["", lab["education"].upper(), wrap(education_line(cv))]
    L += ["", lab["certifications"].upper(), wrap(certifications_line(cv))]
    L += ["", lab["languages"].upper(), " · ".join(cv["languages"]), ""]
    target.write_text("\n".join(L), encoding="utf-8")


def main():
    data = json.loads(DATA.read_text(encoding="utf-8"))
    PUBLIC.mkdir(parents=True, exist_ok=True)

    for lang, suffix in (("es", "ES"), ("en", "EN")):
        cv = data[lang]
        create_pdf(cv, lang, PUBLIC / ("CV_Bryam_Lopez_" + suffix + ".pdf"))
        create_txt(cv, lang, PUBLIC / ("CV_Bryam_Lopez_" + suffix + ".txt"))
        print("generado: CV_Bryam_Lopez_" + suffix + ".pdf / .txt")

    # CV_Bryam_Lopez.pdf se conserva como alias del espanol porque esa URL ya
    # viaja en postulaciones enviadas; romperla dejaria enlaces muertos en
    # formularios que ya estan en manos de reclutadores.
    shutil.copyfile(PUBLIC / "CV_Bryam_Lopez_ES.pdf", PUBLIC / "CV_Bryam_Lopez.pdf")
    print("alias: CV_Bryam_Lopez.pdf = version ES")


if __name__ == "__main__":
    main()
