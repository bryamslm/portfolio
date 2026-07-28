"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaChevronDown,
  FaWhatsapp,
  FaFileAlt,
} from "react-icons/fa";
import { handleScroll } from "../utils/utils";

const socialLinks = [
  {
    name: "LinkedIn",
    icon: <FaLinkedin size={18} />,
    url: "https://linkedin.com/in/bryamslm",
  },
  {
    name: "GitHub",
    icon: <FaGithub size={18} />,
    url: "https://github.com/bryamslm",
  },
  {
    name: "Email",
    icon: <FaEnvelope size={18} />,
    url: "mailto:bryam.steven.lopez@gmail.com",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp size={18} />,
    url: "https://wa.me/50662633553",
  },
];

const capabilityTags = [
  "Agentes con herramientas",
  "RAG + MCP",
  "Multi-tenant",
  "Voice AI (Asterisk + Retell)",
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] flex flex-col justify-center bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text px-6 sm:px-8 pt-28 pb-20 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-light-secondary/40 dark:via-dark-secondary/40 to-transparent"
      />

      <div className="w-full max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-xs sm:text-sm font-medium uppercase tracking-[0.28em] text-light-secondary dark:text-dark-secondary"
        >
          Ingeniero de IA Aplicada y Sistemas · Applied AI Engineer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="mt-4 font-serif font-semibold tracking-tight text-[clamp(2.4rem,1.2rem+5vw,4.8rem)] leading-[1.02] text-balance"
        >
          Bryam Steven López Miranda
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-5 font-serif text-[clamp(1.15rem,0.85rem+1.2vw,1.7rem)] leading-snug text-light-soft dark:text-dark-soft max-w-4xl text-balance"
        >
          Construyo sistemas completos de IA aplicada que conectan agentes,
          datos, automatización y voz.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-6 max-w-3xl text-base sm:text-lg leading-relaxed text-light-soft dark:text-dark-soft text-pretty"
        >
          Ingeniero en Computación en San Carlos, Costa Rica. Diseño, construyo
          y opero productos con TypeScript, Next.js, PostgreSQL, Supabase,
          Python, n8n, Asterisk, SIP y Retell. Mi caso principal es{" "}
          <button
            type="button"
            onClick={() => handleScroll("plica")}
            className="underline decoration-light-secondary/40 dark:decoration-dark-secondary/40 underline-offset-4 hover:decoration-light-secondary dark:hover:decoration-dark-secondary hover:text-light-text dark:hover:text-dark-text transition-colors"
          >
            Plica
          </button>
          : un motor de inteligencia para contratación pública con paridad
          funcional entre ERP/web, chat y MCP.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.38, duration: 0.5 }}
          className="mt-5 max-w-3xl text-sm sm:text-base leading-relaxed text-light-soft dark:text-dark-soft text-pretty"
        >
          Disponible para incorporarme a un equipo estable en Costa Rica o
          Latinoamérica. Remoto o híbrido. Español laboral, inglés con lectura
          técnica y conversación básica.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.46, duration: 0.5 }}
          className="mt-7 flex flex-wrap gap-2.5"
        >
          {capabilityTags.map((cap) => (
            <span
              key={cap}
              className="rounded-full border border-light-secondary/25 dark:border-dark-secondary/25 bg-light-secondary/10 dark:bg-dark-secondary/10 px-3.5 py-1.5 text-sm text-light-secondary dark:text-dark-secondary"
            >
              {cap}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.56, duration: 0.5 }}
          className="mt-9 flex flex-col sm:flex-row gap-3"
        >
          <button
            onClick={() => handleScroll("plica")}
            className="inline-flex items-center justify-center rounded-xl bg-light-secondary dark:bg-dark-secondary px-6 py-3 font-medium text-light-background dark:text-dark-background shadow-card transition-transform duration-150 hover:scale-[1.02] active:scale-[0.99]"
          >
            Ver Plica
          </button>

          <a
            href="/cv/print?lang=es"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-light-border dark:border-dark-border px-6 py-3 font-medium text-light-text dark:text-dark-text transition-colors duration-150 hover:border-light-secondary dark:hover:border-dark-secondary hover:text-light-secondary dark:hover:text-dark-secondary"
          >
            <FaFileAlt size={14} />
            Descargar CV ATS
          </a>

          <a
            href="mailto:bryam.steven.lopez@gmail.com"
            className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-medium text-light-soft dark:text-dark-soft transition-colors duration-150 hover:text-light-secondary dark:hover:text-dark-secondary"
          >
            Contactar por email
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-9 flex items-center gap-5"
        >
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.name}
              className="text-light-muted dark:text-dark-muted transition-colors duration-150 hover:text-light-secondary dark:hover:text-dark-secondary"
            >
              {link.icon}
            </a>
          ))}
        </motion.div>
      </div>

      <motion.button
        aria-label="Bajar a la siguiente sección"
        onClick={() => handleScroll("plica")}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 text-light-muted dark:text-dark-muted hover:text-light-secondary dark:hover:text-dark-secondary"
        initial={{ opacity: 0 }}
        animate={reduce ? { opacity: 0.7 } : { opacity: [0.4, 0.85, 0.4], y: [0, 5, 0] }}
        transition={reduce ? { duration: 0.4 } : { duration: 2, repeat: Infinity }}
      >
        <FaChevronDown className="h-5 w-5" />
      </motion.button>
    </section>
  );
}