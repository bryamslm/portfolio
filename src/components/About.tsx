"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaExternalLinkAlt } from "react-icons/fa";
import { cvEs } from "@/content/cv";
import { secondaryProjects } from "@/content/portfolio";
import { useReveal } from "../utils/reveal";

const skillsGroups = cvEs.skills;

const degree = {
  title: "Bachillerato Universitario en Ingeniería en Computación",
  institution: "Tecnológico de Costa Rica (TEC)",
  period: "2020 – 2024",
  link: "https://drive.google.com/file/d/1e2hkG0mGfKou1ZxyGHVl9OqMGzIEi7Lh/view?usp=sharing",
};

const certifications = [
  { title: "Algoritmos y Estructuras de Datos en JavaScript", provider: "freeCodeCamp" },
  { title: "Desarrollo de Aplicaciones Móviles", provider: "Google Actívate" },
  { title: "Curso Profesional de C++", provider: "Azul School" },
];

export default function About() {
  const [certsOpen, setCertsOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const r = useReveal();

  return (
    <section
      id="sobre-mi"
      className="py-20 sm:py-28 bg-light-section dark:bg-dark-section border-t border-light-border dark:border-dark-border"
    >
      <div className="max-w-layout mx-auto px-5 sm:px-8">
        <motion.div {...r} className="max-w-editorial">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-light-secondary dark:text-dark-secondary">
            Sobre mí
          </p>
          <h2 className="mt-4 font-semibold tracking-tight text-3xl sm:text-5xl text-light-text dark:text-dark-text text-balance">
            Capacidades, formación y proyectos complementarios
          </h2>
        </motion.div>

        {/* Capacidades por áreas (sin píldoras decorativas) */}
        <motion.dl
          {...r}
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillsGroups.map((group) => (
            <div
              key={group.category}
              className="border border-light-border dark:border-dark-border rounded-lg p-5 bg-light-background dark:bg-dark-background"
            >
              <dt className="font-semibold text-light-text dark:text-dark-text">
                {group.category}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-light-soft dark:text-dark-soft text-pretty">
                {group.items.join(" · ")}
              </dd>
            </div>
          ))}
        </motion.dl>

        {/* Formación + RA/VR */}
        <motion.div {...r} className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Educación */}
          <div className="lg:col-span-2 border border-light-border dark:border-dark-border rounded-lg p-6 bg-light-background dark:bg-dark-background">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-light-muted dark:text-dark-muted">
              Formación
            </p>
            <p className="mt-2 font-semibold text-light-text dark:text-dark-text">
              {degree.title}
            </p>
            <p className="mt-1 text-sm text-light-soft dark:text-dark-soft">
              {degree.institution} · {degree.period}{" "}
              <a
                href={degree.link}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 inline-flex items-center align-middle text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors"
              >
                <FaExternalLinkAlt size={10} />
              </a>
            </p>

            {/* Certificaciones en acordeón */}
            <button
              onClick={() => setCertsOpen(!certsOpen)}
              aria-expanded={certsOpen}
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors"
            >
              <FaChevronDown
                size={11}
                className={`transition-transform duration-200 ${certsOpen ? "rotate-180" : ""}`}
              />
              {certsOpen ? "Ocultar certificaciones" : "Ver certificaciones"}
            </button>
            {certsOpen && (
              <ul className="mt-3 space-y-1.5 text-sm text-light-soft dark:text-dark-soft">
                {certifications.map((c) => (
                  <li key={c.title}>
                    <span className="font-medium text-light-text dark:text-dark-text">
                      {c.title}
                    </span>{" "}
                    — {c.provider}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Idiomas */}
          <div className="border border-light-border dark:border-dark-border rounded-lg p-6 bg-light-background dark:bg-dark-background">
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-light-muted dark:text-dark-muted">
              Idiomas
            </p>
            <p className="mt-2 text-sm text-light-soft dark:text-dark-soft text-pretty">
              Español nativo. Inglés con lectura técnica y conversación básica.
            </p>
          </div>
        </motion.div>

        {/* Proyectos secundarios en acordeón */}
        <motion.div {...r} className="mt-10">
          <button
            onClick={() => setProjectsOpen(!projectsOpen)}
            aria-expanded={projectsOpen}
            className="inline-flex items-center gap-2 text-sm font-medium text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors"
          >
            <FaChevronDown
              size={11}
              className={`transition-transform duration-200 ${projectsOpen ? "rotate-180" : ""}`}
            />
            {projectsOpen
              ? "Ocultar proyectos complementarios"
              : "Ver proyectos complementarios (web y RA/VR)"}
          </button>
          {projectsOpen && (
            <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {secondaryProjects.map((p) => (
                <li
                  key={p.name}
                  className="border border-light-border dark:border-dark-border rounded-md p-4 bg-light-background dark:bg-dark-background"
                >
                  <p className="font-medium text-light-text dark:text-dark-text">
                    {p.name}
                  </p>
                  <p className="mt-1.5 text-sm text-light-soft dark:text-dark-soft text-pretty">
                    {p.description}
                  </p>
                  {p.url && (
                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-xs text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors"
                    >
                      <FaExternalLinkAlt size={9} /> Abrir
                    </a>
                  )}
                </li>
              ))}
            </ul>
          )}
        </motion.div>
      </div>
    </section>
  );
}