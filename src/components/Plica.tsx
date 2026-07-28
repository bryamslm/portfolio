"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaChevronDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import PlicaDiagram from "./PlicaDiagram";
import { useReveal } from "../utils/reveal";
import {
  plicaSurfaces,
  plicaMetrics,
  plicaCapabilities,
} from "@/content/portfolio";

type Tab = "surfaces" | "capabilities";

export default function Plica() {
  const [tab, setTab] = useState<Tab>("surfaces");
  const [detailsOpen, setDetailsOpen] = useState(false);
  const r = useReveal();

  return (
    <section
      id="plica"
      className="py-20 sm:py-28 bg-light-background dark:bg-dark-background border-t border-light-border dark:border-dark-border"
    >
      <div className="max-w-layout mx-auto px-5 sm:px-8">
        {/* Encabezado */}
        <motion.div {...r} className="max-w-editorial">
          <p className="font-mono text-xs uppercase tracking-[0.22em] text-light-secondary dark:text-dark-secondary">
            Caso insignia
          </p>
          <h2 className="mt-4 font-semibold tracking-tight text-3xl sm:text-5xl text-light-text dark:text-dark-text text-balance">
            Plica Licitaciones CR
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-light-soft dark:text-dark-soft text-pretty">
            Inteligencia para contratación pública en Costa Rica. Convierte
            diez años de datos de SICOP, conocimiento legal y herramientas
            especializadas en decisiones trazables para proveedores y
            consultoras. Producto listo, accesible desde la web, el chat y
            la integración para herramientas.
          </p>
        </motion.div>

        {/* Métricas */}
        <motion.dl
          {...r}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-light-border dark:bg-dark-border border border-light-border dark:border-dark-border rounded-xl overflow-hidden"
        >
          {plicaMetrics.map((m) => (
            <div
              key={m.label}
              className="bg-light-section dark:bg-dark-section p-5 sm:p-6"
            >
              <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-light-muted dark:text-dark-muted">
                {m.label}
              </dt>
              <dd className="mt-2 text-2xl sm:text-3xl font-semibold text-light-text dark:text-dark-text">
                {m.value}
              </dd>
            </div>
          ))}
        </motion.dl>

        {/* Diagrama interactivo */}
        <motion.div {...r} className="mt-12">
          <div className="rounded-xl border border-light-border dark:border-dark-border bg-light-section dark:bg-dark-section p-4 sm:p-6">
            <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-light-muted dark:text-dark-muted mb-4">
              Motor · tres superficies · capacidades
            </p>
            <PlicaDiagram />
          </div>
        </motion.div>

        {/* Tabs: superficies / capacidades */}
        <motion.div {...r} className="mt-12">
          <div
            role="tablist"
            aria-label="Vistas de Plica"
            className="inline-flex border border-light-border dark:border-dark-border rounded-lg p-1"
          >
            <button
              role="tab"
              aria-selected={tab === "surfaces"}
              onClick={() => setTab("surfaces")}
              className={`px-4 py-2 text-sm rounded-md transition-colors ${
                tab === "surfaces"
                  ? "bg-light-accent/10 dark:bg-dark-accent/15 text-light-accent dark:text-dark-accent font-medium"
                  : "text-light-soft dark:text-dark-soft hover:text-light-text dark:hover:text-dark-text"
              }`}
            >
              Tres superficies
            </button>
            <button
              role="tab"
              aria-selected={tab === "capabilities"}
              onClick={() => setTab("capabilities")}
              className={`px-4 py-2 text-sm rounded-md transition-colors ${
                tab === "capabilities"
                  ? "bg-light-accent/10 dark:bg-dark-accent/15 text-light-accent dark:text-dark-accent font-medium"
                  : "text-light-soft dark:text-dark-soft hover:text-light-text dark:hover:text-dark-text"
              }`}
            >
              Capacidades del motor
            </button>
          </div>

          <div className="mt-6">
            {tab === "surfaces" && (
              <div className="grid gap-px bg-light-border dark:bg-dark-border border border-light-border dark:border-dark-border rounded-xl overflow-hidden sm:grid-cols-3">
                {plicaSurfaces.map((s) => (
                  <div
                    key={s.id}
                    className="bg-light-section dark:bg-dark-section p-5 sm:p-6"
                  >
                    <p className="font-semibold text-light-text dark:text-dark-text">
                      {s.name}
                    </p>
                    <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.14em] text-light-secondary dark:text-dark-secondary">
                      {s.tagline}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-light-soft dark:text-dark-soft text-pretty">
                      {s.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {tab === "capabilities" && (
              <ul className="grid gap-px bg-light-border dark:bg-dark-border border border-light-border dark:border-dark-border rounded-xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
                {plicaCapabilities.map((cap) => (
                  <li
                    key={cap.id}
                    className="bg-light-section dark:bg-dark-section p-5"
                  >
                    <p className="font-semibold text-light-text dark:text-dark-text">
                      {cap.title}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-light-soft dark:text-dark-soft text-pretty">
                      {cap.description}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </motion.div>

        {/* Progressive disclosure: detalles técnicos */}
        <motion.div {...r} className="mt-10">
          <button
            onClick={() => setDetailsOpen(!detailsOpen)}
            aria-expanded={detailsOpen}
            className="inline-flex items-center gap-2 text-sm font-medium text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors"
          >
            <FaChevronDown
              size={11}
              className={`transition-transform duration-200 ${detailsOpen ? "rotate-180" : ""}`}
            />
            {detailsOpen ? "Ocultar detalles técnicos" : "Ver detalles técnicos"}
          </button>

          {detailsOpen && (
            <div className="mt-5 max-w-editorial space-y-4 text-sm leading-relaxed text-light-soft dark:text-dark-soft">
              <p className="text-pretty">
                <span className="font-medium text-light-text dark:text-dark-text">
                  Datos verificables.
                </span>{" "}
                  Cada cifra se obtiene de SICOP con fecha de corte y se puede
                  rastrear paso a paso hasta su origen. Sin números sueltos ni
                  estimaciones sin respaldo.
              </p>
              <p className="text-pretty">
                <span className="font-medium text-light-text dark:text-dark-text">
                  Respuesta legal con citas.
                </span>{" "}
                  Normas organizadas por jerarquía y vigencia, con referencias
                  explícitas. Si la plataforma no tiene cobertura sobre una
                  pregunta, lo dice de frente en lugar de inventar una
                  respuesta.
              </p>
              <p className="text-pretty">
                <span className="font-medium text-light-text dark:text-dark-text">
                  Especialistas y herramientas.
                </span>{" "}
                  Un catálogo de especialistas del dominio con herramientas de
                  lectura, simulación y seguimiento, todas auditables y
                  accesibles desde cualquier superficie.
              </p>
              <p className="text-pretty">
                <span className="font-medium text-light-text dark:text-dark-text">
                  Un producto, tres accesos.
                </span>{" "}
                  El mismo motor está disponible desde la web, el chat y la
                  integración para herramientas. Lo que funciona en un lado
                  funciona en los demás.
              </p>
              <p className="text-pretty text-light-muted dark:text-dark-muted">
                <span className="font-medium text-light-text dark:text-dark-text">
                  Predicciones honestas.
                </span>{" "}
                  La proyección solo se muestra cuando pasa un control de
                  calidad. Antes de eso no se publica. La decisión final sobre
                  una oportunidad la toma una persona, no el sistema.
              </p>
            </div>
          )}
        </motion.div>

        {/* Enlaces de acción */}
        <motion.div {...r} className="mt-10 flex flex-wrap items-center gap-4">
          <a
            href="https://plica.aisolutionscr.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-light-border dark:border-dark-border px-5 min-h-[44px] text-sm font-medium text-light-text dark:text-dark-text hover:border-light-secondary dark:hover:border-dark-secondary hover:text-light-secondary dark:hover:text-dark-secondary transition-colors"
          >
            <FaExternalLinkAlt size={11} /> Hub público de Plica
          </a>
          <a
            href="https://app.aisolutionscr.tech/es"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium text-light-secondary dark:text-dark-secondary hover:text-light-accent dark:hover:text-dark-accent transition-colors"
          >
            Consola operativa
            <FaArrowRight size={11} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}