"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { handleScroll } from "../utils/utils";
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

      // Detect active section
      const sections = ["profile", "projects", "experience", "skills", "education"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 100) {
          setActiveSection(section);
          break; // Stop after finding the first matching section (highest in the viewport)
        }
      }
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
          ? "bg-light-background/80 dark:bg-dark-background/80 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <span
          onClick={() => handleScroll("profile", () => setIsMenuOpen(false))}
          className="text-xl font-bold text-light-text dark:text-dark-text cursor-pointer"
        >
          Portfolio
        </span>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navigationLinks.map((link) => (
            <span
              key={link.href}
              onClick={() => handleScroll(link.href, () => {})}
              className={`cursor-pointer transition-colors ${
                activeSection === link.href
                  ? "text-light-secondary dark:text-dark-secondary font-medium"
                  : "text-light-text/80 dark:text-dark-text/80 hover:text-light-secondary dark:hover:text-dark-secondary"
              }`}
            >
              {link.label}
            </span>
          ))}
          
          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="p-2 rounded-full bg-light-section dark:bg-dark-section text-light-text dark:text-dark-text hover:bg-light-secondary/20 dark:hover:bg-dark-secondary/20 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "light" ? <FaMoon size={18} /> : <FaSun size={18} />}
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-md text-light-text dark:text-dark-text"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? "✖️" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-light-background/95 dark:bg-dark-background/95 backdrop-blur-md shadow-md">
          <div className="flex flex-col py-3">
            {navigationLinks.map((link) => (
              <span
                key={link.href}
                onClick={() => {
                  handleScroll(link.href, () => {});
                  setIsMenuOpen(false);
                }}
                className={`cursor-pointer py-3 px-4 ${
                  activeSection === link.href
                    ? "text-light-secondary dark:text-dark-secondary font-medium"
                    : "text-light-text dark:text-dark-text"
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
              className="w-full flex items-center justify-center py-4 text-light-text dark:text-dark-text hover:bg-light-secondary/10 dark:hover:bg-dark-secondary/10 transition-colors"
            >
              <span className="flex items-center space-x-2">
                {theme === "light" ? <FaMoon className="w-5 h-5" /> : <FaSun className="w-5 h-5" />}
                <span>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
              </span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}