"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaChevronDown } from "react-icons/fa";
import { useReveal } from "../utils/reveal";
import { cvEs } from "@/content/cv";
import {
  tenantTwo,
  assistants,
  voiceAiLayers,
  voiceAiSummary,
  privateWorkNote,
  retellFlowkit,
} from "@/content/portfolio";

// Ya Sale se lee del CV: descripción, stack y enlace tienen una sola fuente.
const yaSale = cvEs.projects.find((p) => p.title.startsWith("Ya Sale"));

export default function Systems() {
  const [assistantsOpen, setAssistantsOpen] = useState(false);
  const r = useReveal();

  return (
    <section
      id="sistemas"
      className="py-20 sm:py-28 bg-light-section dark:bg-dark-section border-t border-light-border dark:border-dark-border"
    >
      <div className="max-w-layout mx-auto px-5 sm:px-8">
        <motion.div {...r} className="max-w-editorial">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-light-secondary dark:text-dark-secondary">
            Sistemas seleccionados
          </p>
          <h2 className="mt-4 font-semibold tracking-tight text-3xl sm:text-5xl text-light-text dark:text-dark-text text-balance">
            SaaS multi-tenant, Voice AI y producto propio
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-light-soft dark:text-dark-soft text-pretty">
            Cuatro sistemas más allá de Plica. Los públicos llevan enlace; los
            privados no tienen demo abierta, pero los recorro en una entrevista
            técnica.
          </p>
        </motion.div>

        {/* Composición: principal a lo ancho, dos medias, cierre a lo ancho */}
        <div className="mt-12 grid gap-px bg-light-border dark:bg-dark-border border border-light-border dark:border-dark-border rounded-xl overflow-hidden lg:grid-cols-2">
          {/* ENTRADA PRINCIPAL: Asistentes multi-tenant (ancho doble en escritorio) */}
          <article className="lg:col-span-2 bg-light-background dark:bg-dark-background p-6 sm:p-8">
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="text-2xl font-semibold text-light-text dark:text-dark-text">
                SaaS multi-tenant de asistentes virtuales
              </h3>
              <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-light-secondary dark:text-dark-secondary">
                WhatsApp · Messenger · web · voz
              </span>
            </div>

            {/* Problema / sistema / evidencia */}
            <dl className="mt-6 grid gap-5 sm:grid-cols-3 text-sm">
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-light-muted dark:text-dark-muted">
                  Problema
                </dt>
                <dd className="mt-2 text-light-soft dark:text-dark-soft text-pretty">
                  Cada vertical necesita identidad, memoria, herramientas y
                  límites propios sin reescribir la base.
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-light-muted dark:text-dark-muted">
                  Sistema
                </dt>
                <dd className="mt-2 text-light-soft dark:text-dark-soft text-pretty">
                  Plataforma multi-tenant con aislamiento por organización,
                  outbox, idempotencia, feature flags y auditoría.
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[11px] uppercase tracking-[0.14em] text-light-muted dark:text-dark-muted">
                  Evidencia
                </dt>
                <dd className="mt-2 text-light-soft dark:text-dark-soft text-pretty">
                  {tenantTwo.evidence}
                </dd>
              </div>
            </dl>

            {/* Caso multi-marca */}
            <div className="mt-6 rounded-lg border border-light-border dark:border-dark-border bg-light-section dark:bg-dark-section p-5">
              <p className="text-sm font-medium text-pretty text-light-text dark:text-dark-text">
                {tenantTwo.summary}
              </p>
              <p className="mt-2 text-sm text-pretty text-light-soft dark:text-dark-soft">
                {tenantTwo.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {tenantTwo.brands.map((b) => (
                  <li
                    key={b.name}
                    className="rounded-md border border-light-border dark:border-dark-border bg-light-background dark:bg-dark-background px-3 py-1.5 text-xs text-light-soft dark:text-dark-soft"
                  >
                    {b.name}
                  </li>
                ))}
              </ul>
            </div>

            {/* Progressive disclosure: galería de asistentes */}
            <button
              onClick={() => setAssistantsOpen(!assistantsOpen)}
              aria-expanded={assistantsOpen}
              className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors"
            >
              <FaChevronDown
                size={11}
                className={`transition-transform duration-200 ${assistantsOpen ? "rotate-180" : ""}`}
              />
              {assistantsOpen
                ? "Ocultar asistentes"
                : `Ver familia de asistentes (${assistants.length})`}
            </button>

            {assistantsOpen && (
              <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {assistants.map((a) => {
                  const statusLabel: Record<string, string> = {
                    live: "Operando",
                    "live-with-caveats": "Con limitaciones",
                    demonstrative: "Demostrativo",
                  };
                  return (
                    <li
                      key={a.name}
                      className="rounded-lg border border-light-border dark:border-dark-border bg-light-section dark:bg-dark-section p-4"
                    >
                      <div className="flex items-baseline justify-between gap-2">
                        <p className="font-semibold text-light-text dark:text-dark-text">
                          {a.name}
                        </p>
                        {a.status && (
                          <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-light-muted dark:text-dark-muted">
                            {statusLabel[a.status]}
                          </span>
                        )}
                      </div>
                      <p className="mt-0.5 text-xs text-light-secondary dark:text-dark-secondary">
                        {a.brand}
                      </p>
                      <p className="mt-2 text-sm text-light-soft dark:text-dark-soft text-pretty">
                        {a.description}
                      </p>
                    </li>
                  );
                })}
              </ul>
            )}
          </article>

          {/* ENTRADA MEDIA 1: Voice AI (privado: sin enlace) */}
          <article className="bg-light-background dark:bg-dark-background p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">
              Voice AI / Voice Ops
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-light-soft dark:text-dark-soft text-pretty">
              {voiceAiSummary}
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              {voiceAiLayers.map((layer) => (
                <li key={layer.title}>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-light-muted dark:text-dark-muted">
                    {layer.title}
                  </p>
                  <p className="mt-1 text-light-soft dark:text-dark-soft">
                    {layer.items.join(" · ")}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-xs text-light-muted dark:text-dark-muted text-pretty">
              {privateWorkNote}
            </p>
          </article>

          {/* ENTRADA MEDIA 2: Ya Sale (público: se puede abrir) */}
          {yaSale && (
            <article className="flex flex-col bg-light-background dark:bg-dark-background p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">
                  Ya Sale
                </h3>
                <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-light-secondary dark:text-dark-secondary">
                  Producto propio · público
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-light-soft dark:text-dark-soft text-pretty">
                {yaSale.description}
              </p>
              <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.14em] text-light-muted dark:text-dark-muted">
                Stack
              </p>
              <p className="mt-1 text-sm text-light-soft dark:text-dark-soft">
                {yaSale.techStack.join(" · ")}
              </p>
              {yaSale.liveDemo && (
                <div className="mt-6">
                  <a
                    href={yaSale.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-light-border dark:border-dark-border px-5 min-h-[44px] text-sm font-medium text-light-text dark:text-dark-text hover:border-light-secondary dark:hover:border-dark-secondary hover:text-light-secondary dark:hover:text-dark-secondary transition-colors"
                  >
                    <FaExternalLinkAlt size={11} /> Abrir Ya Sale
                  </a>
                </div>
              )}
            </article>
          )}

          {/* CIERRE A LO ANCHO: Retell Flowkit (privado: sin enlace) */}
          <article className="lg:col-span-2 bg-light-background dark:bg-dark-background p-6 sm:p-8">
            <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">
              Retell Flowkit
            </h3>
            <p className="mt-3 max-w-editorial text-sm leading-relaxed text-light-soft dark:text-dark-soft text-pretty">
              {retellFlowkit.description} {retellFlowkit.posture}
            </p>

            <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-3">
              {retellFlowkit.evidence.map((e) => (
                <div
                  key={e.label}
                  className="border border-light-border dark:border-dark-border rounded-md p-3"
                >
                  <dt className="font-mono text-[10px] uppercase tracking-[0.12em] text-light-muted dark:text-dark-muted">
                    {e.label}
                  </dt>
                  <dd className="mt-1 font-semibold text-light-text dark:text-dark-text">
                    {e.value}
                  </dd>
                </div>
              ))}
            </dl>

            <p className="mt-4 text-xs text-light-muted dark:text-dark-muted text-pretty">
              {privateWorkNote}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
