"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { handleScroll } from "../utils/utils";
import { FaSun, FaMoon } from "react-icons/fa";

type NavLink = {
  href: string;
  label: string;
  external?: boolean;
  download?: string;
};

const navigationLinks: NavLink[] = [
  { href: "plica", label: "Plica" },
  { href: "sistemas", label: "Trabajo" },
  { href: "experiencia", label: "Experiencia" },
  { href: "sobre-mi", label: "Sobre mí" },
  { href: "contacto", label: "Contacto" },
];

const SECTION_IDS = navigationLinks
  .filter((l) => !l.external)
  .map((l) => l.href);

// Los dos CV base, siempre a un toque: el sitio es en español, pero la mitad
// de los reclutadores que llegan desde LinkedIn filtran en inglés.
const cvLinks: NavLink[] = [
  {
    href: "/documents/CV_Bryam_Lopez_ES.pdf",
    label: "CV",
    external: true,
    download: "CV_Bryam_Lopez_ES.pdf",
  },
  {
    href: "/documents/CV_Bryam_Lopez_EN.pdf",
    label: "EN",
    external: true,
    download: "CV_Bryam_Lopez_EN.pdf",
  },
];

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("plica");

  useEffect(() => {
    setMounted(true);

    const handleScrollEvent = () => {
      setIsScrolled(window.scrollY > 50);
      for (const section of SECTION_IDS) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 140) {
          setActiveSection(section);
        }
      }
    };

    handleScrollEvent();
    window.addEventListener("scroll", handleScrollEvent, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  const isDark = resolvedTheme === "dark";

  return (
    /*
      Sobre el hero el nav es transparente para que el video llegue al borde
      superior, y lleva `.on-video` para que sus tokens sean claros en los dos
      temas. Al scrollear recupera la cápsula difuminada y vuelve al tema.
      Los ítems usan utilidades de token (no hex por tema): así una sola clase
      en el <nav> cambia todo el subárbol.
    */
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-200 ${
        isScrolled
          ? "bg-light-background/85 dark:bg-dark-background/85 backdrop-blur-md border-b border-light-border dark:border-dark-border"
          : "on-video bg-transparent"
      }`}
    >
      <div className="max-w-layout mx-auto px-3 sm:px-6 lg:px-8">
        {/* Fila única de navegación: siempre visible */}
        <div className="flex items-center justify-between gap-2 h-12">
          {/* Izquierda: navegación principal (sin Contacto, va al footer) */}
          <ul className="flex items-center gap-0.5 sm:gap-2 min-w-0">
            {navigationLinks.slice(0, 4).map((link) => (
              <li key={link.href} className="shrink-0">
                <button
                  onClick={() => handleScroll(link.href)}
                  className={`text-xs sm:text-sm whitespace-nowrap px-2 sm:px-3 py-2 rounded-md transition-colors ${
                    activeSection === link.href
                      ? "text-token-accent font-medium"
                      : "text-token-soft hover:text-token"
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Derecha: Contacto + CV + theme toggle */}
          <div className="flex items-center gap-0.5 sm:gap-2 shrink-0">
            <button
              onClick={() => handleScroll("contacto")}
              className="hidden sm:inline-flex text-sm whitespace-nowrap px-3 py-2 rounded-md text-token-soft hover:text-token transition-colors"
            >
              Contacto
            </button>

            {cvLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                download={link.download}
                hrefLang={link.label === "EN" ? "en" : undefined}
                aria-label={
                  link.label === "EN"
                    ? "Resume in English (PDF)"
                    : "Descargar CV en español (PDF)"
                }
                className="text-xs sm:text-sm font-medium px-1.5 sm:px-3 py-2 rounded-md text-token-accent hover:bg-token-elevated transition-colors"
              >
                {link.label}
              </a>
            ))}

            <button
              onClick={() => setTheme(isDark ? "light" : "dark")}
              className="p-2 rounded-md text-token-soft hover:bg-token-elevated hover:text-token-accent transition-colors"
              aria-label="Cambiar tema"
            >
              {mounted ? (
                isDark ? (
                  <FaSun size={14} />
                ) : (
                  <FaMoon size={14} />
                )
              ) : (
                <span className="block h-[14px] w-[14px]" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}