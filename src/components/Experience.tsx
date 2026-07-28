"use client";

import { motion } from "framer-motion";
import { cvEs } from "@/content/cv";
import { useReveal } from "../utils/reveal";

const experiences = cvEs.experience;

export default function Experience() {
  const r = useReveal();

  return (
    <section
      id="experiencia"
      className="py-20 sm:py-28 bg-light-background dark:bg-dark-background border-t border-light-border dark:border-dark-border"
    >
      <div className="max-w-layout mx-auto px-5 sm:px-8">
        <motion.div {...r} className="max-w-editorial">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-light-secondary dark:text-dark-secondary">
            Experiencia
          </p>
          <h2 className="mt-4 font-semibold tracking-tight text-3xl sm:text-5xl text-light-text dark:text-dark-text text-balance">
            Recorrido profesional
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.ol
          {...r}
          className="mt-12 relative border-l border-light-border dark:border-dark-border ml-3 sm:ml-4 space-y-10"
        >
          {/* Disponibilidad actual */}
          <li className="relative pl-8 sm:pl-10">
            <span
              aria-hidden
              className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-light-secondary dark:bg-dark-secondary ring-4 ring-light-background dark:ring-dark-background"
            />
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-light-secondary dark:text-dark-secondary">
              Actualidad
            </p>
            <p className="mt-1 text-base font-medium text-light-text dark:text-dark-text">
              Disponible para un equipo estable
            </p>
            <p className="mt-1 text-sm text-light-soft dark:text-dark-soft text-pretty">
              Busco incorporarme a un equipo de IA aplicada, integraciones,
              Voice AI o ingeniería de producto en Costa Rica o Latinoamérica,
              remoto o híbrido.
            </p>
          </li>

          {/* Experiencias */}
          {experiences.map((exp) => (
            <li key={`${exp.company}-${exp.period}`} className="relative pl-8 sm:pl-10">
              <span
                aria-hidden
                className="absolute -left-[6px] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-light-muted dark:border-dark-muted bg-light-background dark:bg-dark-background"
              />
              <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                <p className="text-base font-semibold text-light-text dark:text-dark-text">
                  {exp.role}
                </p>
                <p className="font-mono text-[11px] text-light-muted dark:text-dark-muted">
                  {exp.period}
                </p>
              </div>
              <p className="mt-0.5 text-sm text-light-secondary dark:text-dark-secondary">
                {exp.company}
                {exp.current && (
                  <span className="ml-2 inline-flex items-center gap-1 text-[11px] text-light-secondary dark:text-dark-secondary">
                    <span className="h-1 w-1 rounded-full bg-light-secondary dark:bg-dark-secondary" />
                    Última posición
                  </span>
                )}
              </p>
              <ul className="mt-3 space-y-1.5 text-sm text-light-soft dark:text-dark-soft">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="text-pretty leading-relaxed">
                    — {b}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}