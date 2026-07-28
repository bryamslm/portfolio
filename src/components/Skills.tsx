"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaRobot,
  FaMicrophone,
  FaDatabase,
  FaServer,
  FaCogs,
  FaShieldAlt,
  FaBroadcastTower,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiSupabase,
  SiDocker,
  SiNginx,
  SiVercel,
  SiGrafana,
  SiPrometheus,
} from "react-icons/si";
import { cvEs } from "@/content/cv";

type IconMap = Record<string, React.ReactNode>;

const languageIcons: IconMap = {
  TypeScript: <SiTypescript size={14} />,
  JavaScript: <SiJavascript size={14} />,
  Python: <SiPython size={14} />,
};

const frameworkIcons: IconMap = {
  "Next.js": <SiNextdotjs size={14} />,
  React: <SiReact size={14} />,
  "Node.js": <SiNodedotjs size={14} />,
};

const dataIcons: IconMap = {
  PostgreSQL: <SiPostgresql size={14} />,
  Supabase: <SiSupabase size={14} />,
  pgvector: <FaDatabase size={14} />,
};

const devopsIcons: IconMap = {
  Docker: <SiDocker size={14} />,
  nginx: <SiNginx size={14} />,
  Vercel: <SiVercel size={14} />,
  Grafana: <SiGrafana size={14} />,
  Prometheus: <SiPrometheus size={14} />,
};

const categoryIcons: Record<string, React.ReactNode> = {
  "IA aplicada": <FaRobot size={20} />,
  "Ingeniería de software": <FaCode size={20} />,
  Datos: <FaDatabase size={20} />,
  "Voice AI y telefonía": <FaBroadcastTower size={20} />,
  "Automatización e infraestructura": <FaServer size={20} />,
  "Desarrollo AI-native": <FaCogs size={20} />,
};

function pickIcon(category: string, name: string): React.ReactNode | undefined {
  switch (category) {
    case "IA aplicada":
      return name === "MCP" ? (
        <FaShieldAlt size={14} />
      ) : name === "Retell" ? (
        <FaMicrophone size={14} />
      ) : undefined;
    case "Ingeniería de software":
      return languageIcons[name] ?? frameworkIcons[name];
    case "Datos":
      return dataIcons[name];
    case "Automatización e infraestructura":
      return devopsIcons[name];
    default:
      return undefined;
  }
}

export default function Skills() {
  const groups = cvEs.skills;

  return (
    <section
      id="capacidades"
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
            Capacidades
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-light-text dark:text-dark-text text-balance">
            Stack técnico y áreas de profundidad
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (index % 3) * 0.08, duration: 0.5 }}
              className="rounded-2xl border border-light-border dark:border-dark-border bg-light-section dark:bg-dark-section p-6"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-light-secondary dark:text-dark-secondary">
                  {categoryIcons[group.category] ?? <FaCode size={20} />}
                </span>
                <h3 className="font-serif text-lg font-semibold text-light-text dark:text-dark-text">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.items.map((name) => {
                  const icon = pickIcon(group.category, name);
                  return (
                    <span
                      key={name}
                      className="inline-flex items-center gap-2 rounded-lg border border-light-border dark:border-dark-border bg-light-background/60 dark:bg-dark-background/40 px-3 py-1.5 text-sm text-light-soft dark:text-dark-soft transition-colors hover:border-light-secondary/40 dark:hover:border-dark-secondary/40 hover:text-light-text dark:hover:text-dark-text"
                    >
                      {icon && (
                        <span className="text-light-muted dark:text-dark-muted">
                          {icon}
                        </span>
                      )}
                      <span>{name}</span>
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}