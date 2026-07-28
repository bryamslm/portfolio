"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { handleScroll } from "../utils/utils";
import { FaSun, FaMoon } from "react-icons/fa";

const navigationLinks = [
  { href: "plica", label: "Plica" },
  { href: "asistentes", label: "Asistentes" },
  { href: "voice", label: "Voice AI" },
  { href: "retell-flowkit", label: "Retell Flowkit" },
  { href: "experiencia", label: "Experiencia" },
  { href: "capacidades", label: "Capacidades" },
  { href: "proyectos", label: "Proyectos" },
  { href: "contacto", label: "Contacto" },
  { href: "/cv/print?lang=es", label: "CV", external: true },
];

const SECTION_IDS = navigationLinks
  .filter((l) => !(l as { external?: boolean }).external)
  .map((l) => l.href);

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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-light-background/85 dark:bg-dark-background/85 backdrop-blur-md border-b border-light-border dark:border-dark-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 flex justify-between items-center h-16">
        <button
          onClick={() => handleScroll("hero", () => setIsMenuOpen(false))}
          className="font-serif text-sm sm:text-base font-semibold text-light-text dark:text-dark-text tracking-tight"
        >
          Bryam Steven López Miranda
          <span className="text-light-secondary dark:text-dark-secondary">.</span>
        </button>

        <div className="hidden lg:flex items-center gap-6">
          {navigationLinks.map((link) =>
            (link as { external?: boolean }).external ? (
              <a
                key={link.href}
                href={link.href}
                className="text-sm transition-colors text-light-soft dark:text-dark-soft hover:text-light-secondary dark:hover:text-dark-secondary"
              >
                {link.label}
              </a>
            ) : (
              <button
                key={link.href}
                onClick={() => handleScroll(link.href)}
                className={`text-sm transition-colors ${
                  activeSection === link.href
                    ? "text-light-secondary dark:text-dark-secondary font-medium"
                    : "text-light-soft dark:text-dark-soft hover:text-light-secondary dark:hover:text-dark-secondary"
                }`}
              >
                {link.label}
              </button>
            )
          )}

          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="p-2 rounded-full text-light-soft dark:text-dark-soft hover:bg-light-secondary/10 dark:hover:bg-dark-secondary/10 hover:text-light-secondary dark:hover:text-dark-secondary transition-colors"
            aria-label="Cambiar tema"
          >
            {mounted ? (
              isDark ? (
                <FaSun size={16} />
              ) : (
                <FaMoon size={16} />
              )
            ) : (
              <span className="block h-4 w-4" />
            )}
          </button>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 rounded-md text-light-text dark:text-dark-text"
          aria-label="Abrir menú"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {isMenuOpen && (
        <div className="lg:hidden bg-light-background/95 dark:bg-dark-background/95 backdrop-blur-md border-b border-light-border dark:border-dark-border">
          <div className="flex flex-col py-2">
            {navigationLinks.map((link) =>
              (link as { external?: boolean }).external ? (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-left py-3 px-5 text-sm text-light-soft dark:text-dark-soft"
                >
                  {link.label}
                </a>
              ) : (
                <button
                  key={link.href}
                  onClick={() => {
                    handleScroll(link.href);
                    setIsMenuOpen(false);
                  }}
                  className={`text-left py-3 px-5 text-sm ${
                    activeSection === link.href
                      ? "text-light-secondary dark:text-dark-secondary font-medium"
                      : "text-light-soft dark:text-dark-soft"
                  }`}
                >
                  {link.label}
                </button>
              )
            )}

            <button
              onClick={() => {
                setTheme(isDark ? "light" : "dark");
                setIsMenuOpen(false);
              }}
              className="flex items-center gap-2 py-3.5 px-5 text-sm text-light-soft dark:text-dark-soft hover:text-light-secondary dark:hover:text-dark-secondary transition-colors"
            >
              {mounted && (isDark ? <FaSun size={16} /> : <FaMoon size={16} />)}
              <span>{isDark ? "Modo claro" : "Modo oscuro"}</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}