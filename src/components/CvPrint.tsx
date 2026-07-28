"use client";

import Link from "next/link";
import { Cv } from "@/content/cv";

type Props = { cv: Cv; lang: "es" | "en" };

export default function CvPrint({ cv, lang }: Props) {
  const t = {
    summary: lang === "en" ? "Summary" : "Perfil profesional",
    experience: lang === "en" ? "Professional Experience" : "Experiencia profesional",
    skills: lang === "en" ? "Technical Skills" : "Habilidades técnicas",
    projects: lang === "en" ? "Selected Projects" : "Proyectos",
    education: lang === "en" ? "Education" : "Educación",
    certifications: lang === "en" ? "Certifications" : "Certificaciones",
    languages: lang === "en" ? "Languages" : "Idiomas",
    print: lang === "en" ? "Print / Save as PDF" : "Imprimir / Guardar como PDF",
    back: lang === "en" ? "Back to portfolio" : "Volver al portafolio",
  };

  return (
    <>
      <style>{`
        @page { size: Letter; margin: 0.38in 0.5in; }
        @media print {
          .no-print { display: none !important; }
          body { background: #ffffff !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
          article { box-shadow: none !important; padding: 0 !important; }
          a { color: inherit !important; text-decoration: none !important; }
          nextjs-portal { display: none !important; }
          section { page-break-inside: auto; }
          .cv-item { break-inside: avoid; page-break-inside: avoid; }
          header { page-break-after: avoid; }
        }
      `}</style>

      <div className="no-print fixed top-4 right-4 z-50 flex gap-2 print:hidden">
        <Link
          href="/"
          className="rounded-lg border border-zinc-300 bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow hover:bg-zinc-50"
        >
          {t.back}
        </Link>
        <button
          onClick={() => window.print()}
          className="rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-zinc-700"
        >
          {t.print}
        </button>
      </div>

      <article
        className="mx-auto max-w-[760px] bg-white px-8 py-2 text-zinc-900 shadow-sm"
        style={{ fontFamily: "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" }}
      >
        {/* HEADER */}
        <header className="border-b border-zinc-400 pb-3">
          <h1 className="text-2xl font-bold tracking-tight">{cv.name}</h1>
          <p className="mt-0.5 text-sm text-zinc-700">{cv.title}</p>
          <p className="mt-0.5 text-xs text-zinc-600">{cv.location}</p>
          <p className="mt-2 text-[10px] leading-snug text-zinc-700">
            {cv.contact.map((c, i) => (
              <span key={c.label}>
                <span className="font-semibold">{c.label}:</span>{" "}
                {c.href ? (
                  <a href={c.href} className="hover:underline">{c.value}</a>
                ) : (
                  c.value
                )}
                {i < cv.contact.length - 1 ? "  |  " : ""}
              </span>
            ))}
          </p>
        </header>

        {/* SUMMARY */}
        <section className="mt-2">
          <h2 className="text-[10.5px] font-bold uppercase tracking-wider text-zinc-900">{t.summary}</h2>
          <p className="mt-1 text-[11px] leading-snug text-zinc-800">{cv.summary}</p>
        </section>

        {/* EXPERIENCE */}
        <section className="mt-2">
          <h2 className="text-[10.5px] font-bold uppercase tracking-wider text-zinc-900">{t.experience}</h2>
          <div className="mt-1 space-y-2">
            {cv.experience.map((exp, i) => (
              <div key={i} className="cv-item">
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h3 className="text-[11.5px] font-bold text-zinc-900">
                    {exp.role}
                    {exp.current && (
                      <span className="ml-1.5 text-[9.5px] font-normal text-zinc-500">
                        ({lang === "en" ? "Current" : "Actual"})
                      </span>
                    )}
                  </h3>
                  <span className="text-[10px] text-zinc-600">{exp.period}</span>
                </div>
                <p className="text-[10.5px] italic text-zinc-700">{exp.company}</p>
                <ul className="mt-0.5 list-disc space-y-0 pl-4 text-[10.5px] leading-tight text-zinc-800">
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* SKILLS (compact, single block) */}
        <section className="mt-2">
          <h2 className="text-[10.5px] font-bold uppercase tracking-wider text-zinc-900">{t.skills}</h2>
          <div className="mt-0.5 space-y-0 text-[10.5px] text-zinc-800">
            {cv.skills.map((s) => (
              <p key={s.category}>
                <span className="font-semibold">{s.category}:</span> {s.items.join(", ")}
              </p>
            ))}
          </div>
        </section>

        {/* PROJECTS (compact, no per-project stack) */}
        <section className="mt-2">
          <h2 className="text-[10.5px] font-bold uppercase tracking-wider text-zinc-900">{t.projects}</h2>
          <ul className="mt-0.5 space-y-0.5 text-[10.5px] leading-snug text-zinc-800">
            {cv.projects.map((p, i) => (
              <li key={i} className="cv-item">
                <span className="font-semibold">{p.title}.</span> {p.description}{" "}
                <span className="text-zinc-600">Stack: {p.techStack.join(", ")}.</span>
                {p.repoLink && (
                  <> | <a href={p.repoLink} className="underline">{p.repoLink.replace("https://", "")}</a></>
                )}
                {p.liveDemo && (
                  <> | <a href={p.liveDemo} className="underline">{p.liveDemo.replace("https://", "")}</a></>
                )}
              </li>
            ))}
          </ul>
        </section>

        {/* EDUCATION */}
        <section className="mt-2">
          <h2 className="text-[10.5px] font-bold uppercase tracking-wider text-zinc-900">{t.education}</h2>
          {cv.education.map((e, i) => (
            <div key={i} className="cv-item mt-0.5">
              <p className="text-[10.5px] text-zinc-900">
                <span className="font-bold">{e.title}</span>, {e.institution} | {e.period}
                {e.certificateLink && (
                  <> | <a href={e.certificateLink} className="underline text-zinc-700">{lang === "en" ? "Certificate" : "Título"}</a></>
                )}
              </p>
              {e.highlights && (
                <ul className="mt-0 list-disc space-y-0 pl-4 text-[10px] text-zinc-700">
                  {e.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>

        {/* CERTIFICATIONS + LANGUAGES - linear reading order for ATS */}
        <section className="mt-2">
          <h2 className="text-[10.5px] font-bold uppercase tracking-wider text-zinc-900">{t.certifications}</h2>
          <p className="mt-0.5 text-[10px] text-zinc-800">
            {cv.certifications.map((c) => `${c.title} - ${c.provider}`).join(" | ")}
          </p>
        </section>

        <section className="mt-2">
          <h2 className="text-[10.5px] font-bold uppercase tracking-wider text-zinc-900">{t.languages}</h2>
          <p className="mt-0.5 text-[10px] text-zinc-800">{cv.languages.join(" | ")}</p>
        </section>
      </article>
    </>
  );
}
