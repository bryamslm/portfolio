"use client";

import { motion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { useReveal } from "../utils/reveal";

const primaryContacts = [
  {
    label: "Correo",
    value: "bryam.steven.lopez@gmail.com",
    href: "mailto:bryam.steven.lopez@gmail.com",
    icon: <FaEnvelope size={15} />,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/bryamslm",
    href: "https://linkedin.com/in/bryamslm",
    icon: <FaLinkedin size={15} />,
  },
  {
    label: "CV",
    value: "Descargar PDF ATS (es)",
    href: "/documents/CV_Bryam_Lopez_ES.pdf",
    download: "CV_Bryam_Lopez_ES.pdf",
    icon: null,
  },
];

const secondaryContacts = [
  {
    label: "GitHub",
    href: "https://github.com/bryamslm",
    icon: <FaGithub size={15} />,
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/50662633553",
    icon: <FaWhatsapp size={15} />,
  },
];

export default function Footer() {
  const r = useReveal();

  return (
    <footer
      id="contacto"
      className="py-20 sm:py-28 bg-light-background dark:bg-dark-background border-t border-light-border dark:border-dark-border"
    >
      <div className="max-w-layout mx-auto px-5 sm:px-8">
        <motion.div {...r} className="max-w-editorial">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-light-secondary dark:text-dark-secondary">
            Contacto
          </p>
          <h2 className="mt-4 font-semibold tracking-tight text-3xl sm:text-5xl text-light-text dark:text-dark-text text-balance">
            Hablemos
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-light-soft dark:text-dark-soft text-pretty">
            Disponible para incorporarme a un equipo estable en Costa Rica o
            Latinoamérica. Si tu equipo construye productos de IA aplicada,
            integraciones, Voice AI o sistemas, escribo en menos de 24 horas.
          </p>
        </motion.div>

        {/* Acciones de contacto */}
        <motion.ul
          {...r}
          className="mt-10 grid gap-px bg-light-border dark:bg-dark-border border border-light-border dark:border-dark-border rounded-xl overflow-hidden sm:grid-cols-3"
        >
          {primaryContacts.map((c) => (
            <li key={c.label}>
              <a
                href={c.href}
                download={(c as { download?: string }).download || undefined}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex h-full flex-col gap-2 bg-light-section dark:bg-dark-section p-5 hover:bg-light-elevated dark:hover:bg-dark-elevated transition-colors"
              >
                <span className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-light-muted dark:text-dark-muted">
                  {c.icon}
                  {c.label}
                </span>
                <span className="text-base font-medium text-light-text dark:text-dark-text">
                  {c.value}
                </span>
              </a>
            </li>
          ))}
        </motion.ul>

        {/* Secundarios discretos */}
        <motion.div {...r} className="mt-6 flex items-center gap-5 text-light-muted dark:text-dark-muted">
          {secondaryContacts.map((c) => (
            <a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm transition-colors hover:text-light-secondary dark:hover:text-dark-secondary"
            >
              {c.icon}
              {c.label}
            </a>
          ))}
        </motion.div>

        {/* Línea de cierre */}
        <div className="mt-16 pt-6 border-t border-light-border dark:border-dark-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-light-muted dark:text-dark-muted">
          <span>
            © {new Date().getFullYear()} Bryam Steven López Miranda · Costa Rica
          </span>
          <span className="flex items-center gap-3">
            <a
              href="/cv/print?lang=es"
              className="hover:text-light-secondary dark:hover:text-dark-secondary transition-colors"
            >
              CV imprimible (ES)
            </a>
            <span aria-hidden>·</span>
            <a
              href="/cv/print?lang=en"
              className="hover:text-light-secondary dark:hover:text-dark-secondary transition-colors"
            >
              CV (EN)
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}