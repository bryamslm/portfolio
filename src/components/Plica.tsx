"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import PlicaDiagram from "./PlicaDiagram";
import {
  plicaSurfaces,
  plicaMetrics,
  plicaCapabilities,
  plicaFlow,
} from "@/content/portfolio";

export default function Plica() {
  return (
    <section
      id="plica"
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
            Caso principal
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-light-text dark:text-dark-text text-balance">
            Plica / Licita
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-light-soft dark:text-dark-soft text-pretty">
            Motor de inteligencia para contratación pública en Costa Rica.
            Convierte diez años de SICOP, conocimiento legal y herramientas
            especializadas en decisiones trazables para proveedores y
            consultoras. Operable con paridad funcional desde tres
            superficies: ERP/web, Plica Chat y MCP.
          </p>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-light-muted dark:text-dark-muted text-pretty">
            Una sola autoridad. Mismas guardas, misma procedencia, mismos
            especialistas — cambie la superficie, no el resultado.
          </p>
        </motion.div>

        {/* Métricas */}
        <motion.dl
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6"
        >
          {plicaMetrics.map((m) => (
            <div
              key={m.label}
              className="rounded-2xl border border-light-border dark:border-dark-border bg-light-section dark:bg-dark-section p-5"
            >
              <dt className="text-xs uppercase tracking-[0.18em] text-light-muted dark:text-dark-muted">
                {m.label}
              </dt>
              <dd className="mt-2 font-serif text-2xl sm:text-3xl font-semibold text-light-text dark:text-dark-text">
                {m.value}
              </dd>
            </div>
          ))}
        </motion.dl>

        {/* Diagrama */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-16 rounded-2xl border border-light-border dark:border-dark-border bg-light-section dark:bg-dark-section p-5 sm:p-8"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-light-muted dark:text-dark-muted">
            Motor + tres superficies + capacidades
          </p>
          <div className="mt-4">
            <PlicaDiagram />
          </div>
          <p className="mt-4 text-xs text-light-muted dark:text-dark-muted text-pretty">
            El hub público (<span className="font-medium">plica-web</span>)
            opera como capa comercial y pSEO con vistas read-only. No toca
            directamente el motor: la frontera público/pago está codificada en
            tres capas (vista SQL, tipo TS y build check).
          </p>
        </motion.div>

        {/* Tres superficies (cards) */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {plicaSurfaces.map((s, i) => (
            <motion.article
              key={s.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-light-border dark:border-dark-border bg-light-section dark:bg-dark-section p-6"
            >
              <p className="font-serif text-xl font-semibold text-light-text dark:text-dark-text">
                {s.name}
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] text-light-secondary dark:text-dark-secondary">
                {s.tagline}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-light-soft dark:text-dark-soft text-pretty">
                {s.description}
              </p>
            </motion.article>
          ))}
        </div>

        {/* Capacidades */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-light-text dark:text-dark-text text-balance">
            Capacidades listas en el motor
          </h3>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-light-soft dark:text-dark-soft text-pretty">
            Cada capacidad es invocable por cualquier superficie con la misma
            metodología y guardas. La doctrina motor-vs-skin se mide en el
            build: lo que está en el diagrama existe en el spec, y lo que está
            en el spec existe en el diagrama.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {plicaCapabilities.map((cap, i) => (
              <motion.div
                key={cap.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
                className="rounded-2xl border border-light-border dark:border-dark-border bg-light-section dark:bg-dark-section p-5"
              >
                <p className="font-serif text-base font-semibold text-light-text dark:text-dark-text">
                  {cap.title}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-light-soft dark:text-dark-soft text-pretty">
                  {cap.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Recorrido de usuario */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-light-text dark:text-dark-text text-balance">
            Un recorrido por Plica
          </h3>
          <ol className="mt-8 grid gap-6 md:grid-cols-2">
            {plicaFlow.map((step, i) => (
              <motion.li
                key={step.step}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.06 }}
                className="rounded-2xl border border-light-border dark:border-dark-border bg-light-section dark:bg-dark-section p-5"
              >
                <div className="flex items-baseline gap-3">
                  <span className="font-serif text-2xl font-semibold text-light-secondary dark:text-dark-secondary">
                    {String(step.step).padStart(2, "0")}
                  </span>
                  <p className="font-serif text-lg font-semibold text-light-text dark:text-dark-text">
                    {step.title}
                  </p>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-light-soft dark:text-dark-soft text-pretty">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </motion.div>

        {/* Decisiones y antifumo */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-2xl border border-light-border dark:border-dark-border bg-light-section dark:bg-dark-section p-6 sm:p-8"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-light-muted dark:text-dark-muted">
            Decisiones de seguridad y antifumo
          </p>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2 text-sm text-light-soft dark:text-dark-soft">
            <li className="flex gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-light-secondary dark:bg-dark-secondary" />
              <span>
                Cifras y citas siempre con procedencia trazable a SICOP, con
                fecha de corte.
              </span>
            </li>
            <li className="flex gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-light-secondary dark:bg-dark-secondary" />
              <span>
                GO / NO-GO explícito, auditado, con score stale cuando cambian
                los hechos. La decisión la toma una persona.
              </span>
            </li>
            <li className="flex gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-light-secondary dark:bg-dark-secondary" />
              <span>
                El predictor se sirve solo si pasa la compuerta de
                calibración; antes de eso, &ldquo;próximamente&rdquo;.
              </span>
            </li>
            <li className="flex gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-light-secondary dark:bg-dark-secondary" />
              <span>
                El hub público expone agregados con top-N limitado; el motor
                opera el detalle en la consola autenticada.
              </span>
            </li>
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://plica.aisolutionscr.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-light-border dark:border-dark-border px-5 py-2.5 text-sm font-medium text-light-text dark:text-dark-text hover:border-light-secondary dark:hover:border-dark-secondary hover:text-light-secondary dark:hover:text-dark-secondary transition-colors"
            >
              <FaExternalLinkAlt size={12} /> Hub público de Plica
            </a>
            <a
              href="https://app.aisolutionscr.tech/es"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-light-border dark:border-dark-border px-5 py-2.5 text-sm font-medium text-light-text dark:text-dark-text hover:border-light-secondary dark:hover:border-dark-secondary hover:text-light-secondary dark:hover:text-dark-secondary transition-colors"
            >
              <FaExternalLinkAlt size={12} /> Consola operativa
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}