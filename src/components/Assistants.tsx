"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { tenantTwo, assistants } from "@/content/portfolio";

export default function Assistants() {
  return (
    <section
      id="asistentes"
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
            SaaS multi-tenant
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-light-text dark:text-dark-text text-balance">
            Asistentes virtuales sobre una base común
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-light-soft dark:text-dark-soft text-pretty">
            Diseñé una plataforma SaaS multi-tenant de IA conversacional para
            WhatsApp, Messenger, Instagram, web y voz. Cada organización tiene
            identidad, conocimiento, tools, memoria, guardas, feature flags,
            canales y operación independientes sobre las mismas fundaciones.
          </p>
        </motion.div>

        {/* Caso emblemático: Tenant 2 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="mt-14 rounded-2xl border border-light-secondary/30 dark:border-dark-secondary/30 bg-light-section dark:bg-dark-section p-6 sm:p-8"
        >
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <p className="font-serif text-xl sm:text-2xl font-semibold text-light-text dark:text-dark-text">
              Tenant 2 — AI Solutions Mauricio
            </p>
            <span className="text-xs uppercase tracking-[0.16em] text-light-secondary dark:text-dark-secondary">
              Caso multi-BU emblemático
            </span>
          </div>
          <p className="mt-4 text-sm sm:text-base leading-relaxed text-light-soft dark:text-dark-soft text-pretty">
            {tenantTwo.description}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {tenantTwo.brands.map((brand, i) => (
              <motion.div
                key={brand.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl border border-light-border dark:border-dark-border bg-light-background/60 dark:bg-dark-background/40 p-4"
              >
                <p className="font-serif text-sm font-semibold text-light-text dark:text-dark-text">
                  {brand.name}
                </p>
                <p className="mt-1.5 text-xs leading-relaxed text-light-soft dark:text-dark-soft text-pretty">
                  {brand.description}
                </p>
              </motion.div>
            ))}
          </div>

          <ul className="mt-6 grid gap-2.5 sm:grid-cols-2 text-sm text-light-soft dark:text-dark-soft">
            <li className="flex gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-light-secondary dark:bg-dark-secondary" />
              <span>
                BU-Router por turno con selección determinista y LLM, estado
                sticky por conversación.
              </span>
            </li>
            <li className="flex gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-light-secondary dark:bg-dark-secondary" />
              <span>
                RAG scoped por BU; playbooks completos para BUs pequeñas cuando
                resulta más seguro.
              </span>
            </li>
            <li className="flex gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-light-secondary dark:bg-dark-secondary" />
              <span>
                Tools, multimedia, cotizaciones con PDF preliminar y panel
                multi-BU autenticado.
              </span>
            </li>
            <li className="flex gap-2.5">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-light-secondary dark:bg-dark-secondary" />
              <span>
                Handoff a humano, outbox, notificaciones y guardas de precio
                deterministas.
              </span>
            </li>
          </ul>
        </motion.div>

        {/* Galería de asistentes */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="mt-16"
        >
          <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-light-text dark:text-dark-text text-balance">
            Familia de asistentes especializados
          </h3>
          <p className="mt-3 max-w-2xl text-sm sm:text-base text-light-soft dark:text-dark-soft text-pretty">
            Cada asistente nace de la misma base multi-tenant. Cambian
            identidad, herramientas, guardas y operación según el vertical.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {assistants.map((assistant, i) => {
              const statusLabel: Record<NonNullable<Assistant["status"]>, string> = {
                live: "En operación",
                "live-with-caveats": "Operando con caveats",
                demonstrative: "Demostrativo",
              };
              const accent: Record<NonNullable<Assistant["status"]>, string> = {
                live: "text-emerald-700 dark:text-emerald-400",
                "live-with-caveats": "text-amber-700 dark:text-amber-400",
                demonstrative: "text-light-muted dark:text-dark-muted",
              };

              const inner = (
                <motion.article
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className="flex h-full flex-col rounded-2xl border border-light-border dark:border-dark-border bg-light-section dark:bg-dark-section p-5"
                >
                  <div className="flex items-baseline justify-between gap-3">
                    <p className="font-serif text-lg font-semibold text-light-text dark:text-dark-text">
                      {assistant.name}
                    </p>
                    {assistant.status && (
                      <span
                        className={`shrink-0 text-[10px] uppercase tracking-[0.16em] ${accent[assistant.status]}`}
                      >
                        {statusLabel[assistant.status]}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-light-secondary dark:text-dark-secondary">
                    {assistant.brand}
                  </p>
                  <p className="mt-1 text-xs text-light-muted dark:text-dark-muted">
                    {assistant.vertical}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-light-soft dark:text-dark-soft text-pretty">
                    {assistant.description}
                  </p>
                  <ul className="mt-4 space-y-1.5 text-xs text-light-soft dark:text-dark-soft">
                    {assistant.highlights.map((h, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-light-secondary dark:bg-dark-secondary" />
                        <span className="text-pretty">{h}</span>
                      </li>
                    ))}
                  </ul>
                  {assistant.link && (
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-4 text-xs text-light-secondary dark:text-dark-secondary">
                      <FaExternalLinkAlt size={10} /> Ver superficie pública
                    </span>
                  )}
                </motion.article>
              );

              return assistant.link ? (
                <a
                  key={assistant.name}
                  href={assistant.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {inner}
                </a>
              ) : (
                <div key={assistant.name}>{inner}</div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

type Assistant = (typeof assistants)[number];