"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { voiceAiLayers, voiceAiNote } from "@/content/portfolio";

export default function VoiceAi() {
  return (
    <section
      id="voice"
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
            Voice AI / Voice Ops
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-light-text dark:text-dark-text text-balance">
            Telefonía real, no solo voz en el navegador
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-light-soft dark:text-dark-soft text-pretty">
            Diseño e integro sistemas Voice AI con Asterisk, SIP, trunks,
            campañas, transferencias, agentes y operación. No me limito a
            conectar un modelo de voz en una página: he trabajado con
            señalización SIP, trunks, enrutamiento, llamadas entrantes y
            salientes, transferencias y continuidad entre chat y voz.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {voiceAiLayers.map((layer, i) => (
            <motion.div
              key={layer.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-light-border dark:border-dark-border bg-light-section dark:bg-dark-section p-6"
            >
              <p className="font-serif text-lg font-semibold text-light-text dark:text-dark-text">
                {layer.title}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-light-soft dark:text-dark-soft">
                {layer.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-light-secondary dark:bg-dark-secondary" />
                    <span className="text-pretty">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-14 rounded-2xl border border-light-border dark:border-dark-border bg-light-section dark:bg-dark-section p-6 sm:p-8"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-light-muted dark:text-dark-muted">
            Caveat de evidencia
          </p>
          <p className="mt-3 text-sm leading-relaxed text-light-soft dark:text-dark-soft text-pretty">
            {voiceAiNote}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="https://ops.aisolutionscr.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-light-border dark:border-dark-border px-5 py-2.5 text-sm font-medium text-light-text dark:text-dark-text hover:border-light-secondary dark:hover:border-dark-secondary hover:text-light-secondary dark:hover:text-dark-secondary transition-colors"
            >
              <FaExternalLinkAlt size={12} /> Voice Ops (presentación pública)
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}