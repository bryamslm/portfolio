"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { handleScroll } from "../utils/utils";
import { useReveal } from "../utils/reveal";

export default function Hero() {
  const r = useReveal();

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex items-center bg-light-background dark:bg-dark-background px-5 sm:px-8 pt-24 pb-16"
    >
      <div className="w-full max-w-layout mx-auto">
        {/* Micro-etiqueta */}
        <motion.p
          initial={r.initial}
          whileInView={r.whileInView}
          viewport={r.viewport}
          transition={r.transition}
          className="font-mono text-xs uppercase tracking-[0.22em] text-light-secondary dark:text-dark-secondary"
        >
          Ingeniero de IA Aplicada y Sistemas
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

        {/* Disponibilidad */}
        <motion.p
          initial={r.initial}
          whileInView={r.whileInView}
          viewport={r.viewport}
          transition={{ ...r.transition, delay: 0.15 }}
          className="mt-4 max-w-editorial text-base text-light-muted dark:text-dark-muted text-pretty"
        >
          Disponible para incorporarme a un equipo estable en Costa Rica o
          Latinoamérica, de forma remota o híbrida.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={r.initial}
          whileInView={r.whileInView}
          viewport={r.viewport}
          transition={{ ...r.transition, delay: 0.2 }}
          className="mt-9 flex flex-col sm:flex-row gap-3"
        >
          <button
            onClick={() => handleScroll("plica")}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-light-secondary dark:bg-dark-secondary px-6 min-h-[44px] font-medium text-white transition-colors hover:bg-light-accent dark:hover:bg-dark-accent"
          >
            Ver Plica
            <FaArrowRight size={12} />
          </button>

          <a
            href="/documents/CV_Bryam_Lopez_ES.pdf"
            download="CV_Bryam_Lopez_ES.pdf"
            className="inline-flex items-center justify-center rounded-lg border border-light-border dark:border-dark-border px-6 min-h-[44px] font-medium text-light-text dark:text-dark-text transition-colors hover:border-light-secondary dark:hover:border-dark-secondary hover:text-light-secondary dark:hover:text-dark-secondary"
          >
            Descargar CV ATS
          </a>

          <a
            href="mailto:bryam.steven.lopez@gmail.com"
            className="inline-flex items-center justify-center gap-2 px-5 min-h-[44px] font-medium text-light-soft dark:text-dark-soft transition-colors hover:text-light-secondary dark:hover:text-dark-secondary"
          >
            Contactar
            <FaArrowRight size={11} />
          </a>
        </motion.div>

        {/* LinkedIn / GitHub discretos */}
        <motion.div
          initial={r.initial}
          whileInView={r.whileInView}
          viewport={r.viewport}
          transition={{ ...r.transition, delay: 0.28 }}
          className="mt-10 flex items-center gap-5 text-light-muted dark:text-dark-muted"
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