"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { handleScroll } from "../utils/scrollToSection";
import { FaSun, FaMoon } from "react-icons/fa";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("profile");

  useEffect(() => {
    setMounted(true);

    const handleScrollEvent = () => {
      setIsScrolled(window.scrollY > 50);

      // Detectar la sección activa
      const sections = ["profile", "education", "experience", "projects", "skills"];
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener("scroll", handleScrollEvent);
    return () => window.removeEventListener("scroll", handleScrollEvent);
  }, []);

  if (!mounted) return null;

  const navigationLinks = [
    { href: "profile", label: "Profile" },
    { href: "projects", label: "Projects" },
    { href: "experience", label: "Experience" },
    { href: "skills", label: "Skills" },
    { href: "education", label: "Education" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-light-background/70 dark:bg-dark-background/70 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <span
          onClick={() => handleScroll("profile", () => setIsMenuOpen(false))}
          className="text-xl font-bold text-light-text dark:text-dark-text cursor-pointer"
        >
          🚀 Bryam López
        </span>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navigationLinks.map((link) => (
            <span
              key={link.href}
              onClick={() => handleScroll(link.href, () => setIsMenuOpen(false))}
              className={`cursor-pointer ${
                activeSection === link.href
                  ? "text-light-secondary dark:text-dark-secondary font-semibold underline"
                  : "text-light-text dark:text-dark-text hover:text-light-secondary dark:hover:text-dark-secondary"
              }`}
            >
              {link.label}
            </span>
          ))}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          className="hidden md:block p-2 rounded-md bg-light-section dark:bg-dark-section text-light-text dark:text-dark-text hover:bg-light-secondary dark:hover:bg-dark-secondary transition-colors"
        >
          {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md bg-light-section dark:bg-dark-section text-light-text dark:text-dark-text hover:bg-light-secondary dark:hover:bg-dark-secondary"
        >
          {isMenuOpen ? "✖️" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-light-background dark:bg-dark-background shadow-md transition-all duration-300">
          <div className="flex flex-col items-center space-y-4 py-4">
            {navigationLinks.map((link) => (
              <span
                key={link.href}
                onClick={() => handleScroll(link.href, () => setIsMenuOpen(false))}
                className={`cursor-pointer ${
                  activeSection === link.href
                    ? "text-light-secondary dark:text-dark-secondary font-semibold underline"
                    : "text-light-text dark:text-dark-text hover:text-light-secondary dark:hover:text-dark-secondary"
                }`}
              >
                {link.label}
              </span>
            ))}
            {/* Theme Toggle in Mobile Menu */}
            <button
              onClick={() => {
                setTheme(theme === "light" ? "dark" : "light");
                setIsMenuOpen(false);
              }}
              className="p-2 rounded-md bg-light-section dark:bg-dark-section text-light-text dark:text-dark-text hover:bg-light-secondary dark:hover:bg-dark-secondary"
            >
              {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
