"use client";

import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";
import { handleScroll } from "../utils/utils";

const socials = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={18} />,
    url: "https://linkedin.com/in/bryamslm",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={18} />,
    url: "https://github.com/bryamslm",
  },
  {
    name: "Email",
    icon: <FaEnvelope size={18} />,
    url: "mailto:bryam.steven.lopez@gmail.com",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp size={18} />,
    url: "https://wa.me/50662633553",
  },
];

const navLinks = [
  { href: "plica", label: "Plica" },
  { href: "asistentes", label: "Asistentes" },
  { href: "voice", label: "Voice AI" },
  { href: "retell-flowkit", label: "Retell Flowkit" },
  { href: "contacto", label: "Contacto" },
  { href: "/cv/print?lang=es", label: "CV (ES)", external: true },
];

export default function Footer() {
  return (
    <footer
      id="contacto"
      className="border-t border-light-border dark:border-dark-border bg-light-section dark:bg-dark-section text-light-text dark:text-dark-text"
    >
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          <div>
            <p className="font-serif text-xl font-semibold text-light-text dark:text-dark-text">
              Bryam Steven López Miranda
              <span className="text-light-secondary dark:text-dark-secondary">
                .
              </span>
            </p>
            <p className="mt-2 text-sm text-light-soft dark:text-dark-soft">
              Ingeniero de IA Aplicada y Sistemas · Applied AI Engineer
            </p>
            <p className="mt-1 text-sm text-light-muted dark:text-dark-muted">
              San Carlos, Alajuela, Costa Rica · Disponible remoto en LatAm
            </p>
            <p className="mt-1 text-sm text-light-muted dark:text-dark-muted">
              <a
                href="mailto:bryam.steven.lopez@gmail.com"
                className="hover:text-light-secondary dark:hover:text-dark-secondary transition-colors"
              >
                bryam.steven.lopez@gmail.com
              </a>{" "}
              ·{" "}
              <a
                href="https://wa.me/50662633553"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-light-secondary dark:hover:text-dark-secondary transition-colors"
              >
                +506 6263 3553
              </a>
            </p>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-light-muted dark:text-dark-muted">
              Navegación
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
              {navLinks.map((link) =>
                (link as { external?: boolean }).external ? (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-light-soft dark:text-dark-soft hover:text-light-secondary dark:hover:text-dark-secondary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ) : (
                  <li key={link.href}>
                    <button
                      type="button"
                      onClick={() => handleScroll(link.href)}
                      className="text-left text-light-soft dark:text-dark-soft hover:text-light-secondary dark:hover:text-dark-secondary transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ),
              )}
            </ul>

            <div className="mt-6 flex items-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="text-light-muted dark:text-dark-muted transition-colors hover:text-light-secondary dark:hover:text-dark-secondary"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-light-border dark:border-dark-border pt-6 text-xs text-light-muted dark:text-dark-muted">
          <span>
            © {new Date().getFullYear()} Bryam Steven López Miranda · Hecho con
            Next.js · Costa Rica
          </span>
          <span>
            <a
              href="/cv/print?lang=es"
              className="hover:text-light-secondary dark:hover:text-dark-secondary transition-colors"
            >
              CV en español
            </a>
            <span className="mx-2">·</span>
            <a
              href="/cv/print?lang=en"
              className="hover:text-light-secondary dark:hover:text-dark-secondary transition-colors"
            >
              CV in English
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}