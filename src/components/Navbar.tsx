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

const cvLink: NavLink = {
  href: "/documents/CV_Bryam_Lopez_ES.pdf",
  label: "CV",
  external: true,
  download: "CV_Bryam_Lopez_ES.pdf",
};

export default function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-200 ${
        isScrolled
          ? "bg-light-background/85 dark:bg-dark-background/85 backdrop-blur-md border-b border-light-border dark:border-dark-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-layout mx-auto px-5 sm:px-8 flex justify-between items-center h-16">
        <button
          onClick={() => handleScroll("hero", () => setIsMenuOpen(false))}
          className="font-semibold tracking-tight text-light-text dark:text-dark-text text-sm sm:text-base"
        >
          BSLM
          <span className="text-light-secondary dark:text-dark-secondary">.</span>
        </button>

        {/* Navegación escritorio */}
        <div className="hidden md:flex items-center gap-7">
          {navigationLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleScroll(link.href)}
              className={`text-sm transition-colors ${
                activeSection === link.href
                  ? "text-light-secondary dark:text-dark-secondary font-medium"
                  : "text-light-soft dark:text-dark-soft hover:text-light-text dark:hover:text-dark-text"
              }`}
            >
              {link.label}
            </button>
          ))}

          <span aria-hidden className="h-4 w-px bg-light-border dark:bg-dark-border" />

          <a
            href={cvLink.href}
            download={cvLink.download}
            className="text-sm font-medium text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors"
          >
            {cvLink.label}
          </a>

          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="p-2 rounded-md text-light-soft dark:text-dark-soft hover:bg-light-elevated dark:hover:bg-dark-elevated hover:text-light-secondary dark:hover:text-dark-secondary transition-colors"
            aria-label="Cambiar tema"
          >
            {mounted ? (
              isDark ? (
                <FaSun size={15} />
              ) : (
                <FaMoon size={15} />
              )
            ) : (
              <span className="block h-[15px] w-[15px]" />
            )}
          </button>
        </div>

        {/* Botón móvil */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md text-light-text dark:text-dark-text"
          aria-label="Abrir menú"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Menú móvil */}
      {isMenuOpen && (
        <div className="md:hidden bg-light-background dark:bg-dark-background border-t border-light-border dark:border-dark-border">
          <div className="flex flex-col px-5 py-3">
            {navigationLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  handleScroll(link.href);
                  setIsMenuOpen(false);
                }}
                className={`text-left py-3 text-base ${
                  activeSection === link.href
                    ? "text-light-secondary dark:text-dark-secondary font-medium"
                    : "text-light-soft dark:text-dark-soft"
                }`}
              >
                {link.label}
              </button>
            ))}

            <a
              href={cvLink.href}
              download={cvLink.download}
              onClick={() => setIsMenuOpen(false)}
              className="py-3 text-base font-medium text-light-secondary dark:text-dark-secondary"
            >
              {cvLink.label}
            </a>

            <button
              onClick={() => {
                setTheme(isDark ? "light" : "dark");
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-2 py-3 text-base text-light-soft dark:text-dark-soft hover:text-light-secondary dark:hover:text-dark-secondary transition-colors"
            >
              {mounted && (isDark ? <FaSun size={15} /> : <FaMoon size={15} />)}
              <span>{isDark ? "Modo claro" : "Modo oscuro"}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}