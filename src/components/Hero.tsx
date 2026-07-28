"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaArrowRight, FaArrowDown } from "react-icons/fa6";
import { handleScroll } from "../utils/utils";
import { useReveal } from "../utils/reveal";

const STACK = ["TypeScript", "Next.js", "PostgreSQL", "Retell", "Asterisk"];

export default function Hero() {
  const r = useReveal();

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center bg-light-background dark:bg-dark-background px-5 sm:px-8 pt-24 pb-16"
    >
      <div className="w-full max-w-layout mx-auto">
        {/* Eyebrow corto: no se rompe en 2 líneas en móvil */}
        <motion.p
          initial={r.initial}
          whileInView={r.whileInView}
          viewport={r.viewport}
          transition={r.transition}
          className="font-mono text-xs uppercase tracking-[0.22em] text-light-secondary dark:text-dark-secondary"
        >
          IA aplicada · Sistemas
        </motion.p>

        {/* Nombre como texto display */}
        <motion.h1
          initial={r.initial}
          whileInView={r.whileInView}
          viewport={r.viewport}
          transition={{ ...r.transition, delay: 0.05 }}
          className="mt-5 font-semibold tracking-tight text-display-tight text-light-text dark:text-dark-text text-balance"
        >
          Bryam Steven López Miranda
        </motion.h1>

        {/* Propuesta de valor */}
        <motion.p
          initial={r.initial}
          whileInView={r.whileInView}
          viewport={r.viewport}
          transition={{ ...r.transition, delay: 0.1 }}
          className="mt-6 max-w-editorial text-xl sm:text-2xl leading-snug text-light-soft dark:text-dark-soft text-pretty"
        >
          Construyo sistemas completos de IA aplicada: producto, agentes,
          datos, automatización y voz.
        </motion.p>

        {/* Disponibilidad prominente con indicador "disponible" */}
        <motion.div
          initial={r.initial}
          whileInView={r.whileInView}
          viewport={r.viewport}
          transition={{ ...r.transition, delay: 0.15 }}
          className="mt-5 max-w-editorial flex items-start gap-2.5 text-base text-light-text dark:text-dark-text"
        >
          <span
            aria-hidden
            className="mt-2 inline-block h-2 w-2 shrink-0 rounded-full bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_0_3px_rgba(16,185,129,0.18)]"
          />
          <p className="text-pretty">
            Disponible para un equipo estable en Costa Rica o Latinoamérica,
            remoto o híbrido.
          </p>
        </motion.div>

        {/* Mini-evidencia en una línea: cifras verificables */}
        <motion.p
          initial={r.initial}
          whileInView={r.whileInView}
          viewport={r.viewport}
          transition={{ ...r.transition, delay: 0.18 }}
          className="mt-4 max-w-editorial font-mono text-[13px] tracking-[0.04em] text-light-secondary dark:text-dark-secondary text-pretty"
        >
          10 años SICOP · 23 M registros · Voice AI en producción
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={r.initial}
          whileInView={r.whileInView}
          viewport={r.viewport}
          transition={{ ...r.transition, delay: 0.22 }}
          className="mt-9 flex flex-col sm:flex-row gap-3"
        >
          <a
            href="/documents/CV_Bryam_Lopez_ES.pdf"
            download="CV_Bryam_Lopez_ES.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-light-secondary dark:bg-dark-secondary px-6 min-h-[44px] font-medium text-white transition-colors hover:bg-light-accent dark:hover:bg-dark-accent"
          >
            Descargar CV
            <FaArrowDown size={12} />
          </a>

          <button
            onClick={() => handleScroll("plica")}
            className="inline-flex items-center justify-center gap-2.5 rounded-lg border border-light-border dark:border-dark-border px-6 min-h-[44px] font-medium text-light-text dark:text-dark-text transition-colors hover:border-light-secondary dark:hover:border-dark-secondary hover:text-light-secondary dark:hover:text-dark-secondary"
          >
            Ver Plica (demo)
            <span
              aria-hidden
              className="inline-flex items-center gap-1 rounded-full border border-emerald-500/40 dark:border-emerald-400/40 px-1.5 py-0.5 text-[10px] font-medium text-emerald-600 dark:text-emerald-400"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
              live
            </span>
          </button>

          <a
            href="mailto:bryam.steven.lopez@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-5 min-h-[44px] font-medium text-light-soft dark:text-dark-soft transition-colors hover:text-light-secondary dark:hover:text-dark-secondary"
          >
            Contactar
            <FaArrowRight size={11} />
          </a>
        </motion.div>

        {/* Stack como chips sutiles */}
        <motion.ul
          initial={r.initial}
          whileInView={r.whileInView}
          viewport={r.viewport}
          transition={{ ...r.transition, delay: 0.28 }}
          className="mt-10 flex flex-wrap items-center gap-2"
          aria-label="Stack principal"
        >
          {STACK.map((tech) => (
            <li
              key={tech}
              className="rounded-md border border-light-border dark:border-dark-border bg-light-section/60 dark:bg-dark-section/60 px-2.5 py-1 font-mono text-[11px] text-light-secondary dark:text-dark-secondary"
            >
              {tech}
            </li>
          ))}
        </motion.ul>

        {/* LinkedIn / GitHub discretos */}
        <motion.div
          initial={r.initial}
          whileInView={r.whileInView}
          viewport={r.viewport}
          transition={{ ...r.transition, delay: 0.32 }}
          className="mt-8 flex items-center gap-5 text-light-muted dark:text-dark-muted"
        >
          <a
            href="https://linkedin.com/in/bryamslm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm transition-colors hover:text-light-secondary dark:hover:text-dark-secondary"
          >
            <FaLinkedin size={15} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/bryamslm"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm transition-colors hover:text-light-secondary dark:hover:text-dark-secondary"
          >
            <FaGithub size={15} />
            <span>GitHub</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}