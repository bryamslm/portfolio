"use client";

import { motion } from "framer-motion";
import { retellFlowkit } from "@/content/portfolio";

export default function RetellFlowkit() {
  return (
    <section
      id="retell-flowkit"
      className="py-20 sm:py-28 bg-light-background dark:bg-dark-background"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.28em] text-light-secondary dark:text-dark-secondary">
            Motor consumido mediante skills
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-light-text dark:text-dark-text text-balance">
            Retell Flowkit
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-light-soft dark:text-dark-soft text-pretty">
            {retellFlowkit.description}
          </p>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-light-muted dark:text-dark-muted text-pretty">
            {retellFlowkit.posture}
          </p>
        </motion.div>

        {/* Evidencia verificable */}
        <motion.dl
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.05 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6"
        >
          {retellFlowkit.evidence.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-light-border dark:border-dark-border bg-light-section dark:bg-dark-section p-5"
            >
              <dt className="text-xs uppercase tracking-[0.18em] text-light-muted dark:text-dark-muted">
                {item.label}
              </dt>
              <dd className="mt-2 font-serif text-xl sm:text-2xl font-semibold text-light-text dark:text-dark-text">
                {item.value}
              </dd>
            </div>
          ))}
        </motion.dl>

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-light-border dark:border-dark-border bg-light-section dark:bg-dark-section p-6"
          >
            <p className="font-serif text-lg font-semibold text-light-text dark:text-dark-text">
              Modos del motor
            </p>
            <p className="mt-2 text-sm text-light-soft dark:text-dark-soft">
              Cinco modos principales invocables por agentes:
            </p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {retellFlowkit.modes.map((mode) => (
                <li key={mode}>
                  <code className="rounded-md border border-light-secondary/25 dark:border-dark-secondary/25 bg-light-secondary/10 dark:bg-dark-secondary/10 px-2.5 py-1 text-xs text-light-secondary dark:text-dark-secondary">
                    {mode}
                  </code>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-2xl border border-light-border dark:border-dark-border bg-light-section dark:bg-dark-section p-6"
          >
            <p className="font-serif text-lg font-semibold text-light-text dark:text-dark-text">
              Capacidades-skill agent-callable
            </p>
            <ul className="mt-4 space-y-2 text-sm text-light-soft dark:text-dark-soft">
              {retellFlowkit.capabilities.map((cap, i) => (
                <li key={i} className="flex gap-2.5">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-light-secondary dark:bg-dark-secondary" />
                  <span className="text-pretty">{cap}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-sm text-light-muted dark:text-dark-muted text-pretty"
        >
          Uso Claude Code, Codex, OpenCode y otros agentes para aumentar
          velocidad y alcance. Mi competencia está en diseñar sistemas de
          control — contratos, skills, MCP, validadores, pruebas y guardas —
          para que el trabajo sea reproducible. Retell Flowkit es uno de esos
          sistemas.
        </motion.p>
      </div>
    </section>
  );
}