"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGraduationCap, FaCertificate } from "react-icons/fa";

type Cert = { title: string; provider: string; link: string };

const degree = {
  title: "Bachillerato Universitario en Ingeniería en Computación",
  institution: "Tecnológico de Costa Rica (TEC)",
  period: "2020 – 2024",
  certificateLink:
    "https://drive.google.com/file/d/1e2hkG0mGfKou1ZxyGHVl9OqMGzIEi7Lh/view?usp=sharing",
  highlights: [
    "Proyecto de graduación: framework de observabilidad para servicios Node.js (OpenTelemetry, Prometheus, Grafana, Elasticsearch).",
    "Formación en ingeniería de software, algoritmos, estructuras de datos, bases de datos y redes.",
    "Proyectos educativos de RA/VR con Unity y Vuforia, y experiencia de apoyo docente.",
  ],
};

const certifications: Cert[] = [
  {
    title: "Algoritmos y Estructuras de Datos en JavaScript",
    provider: "freeCodeCamp",
    link: "https://www.freecodecamp.org/certification/fcca570a962-24c8-4ef2-b78d-1b6f9d132ae5/javascript-algorithms-and-data-structures",
  },
  {
    title: "Desarrollo de Aplicaciones Móviles",
    provider: "Google Actívate",
    link: "https://drive.google.com/file/d/193pBjwhEPTvY_HpJ4o6O2-20DBliAE_E/view",
  },
  {
    title: "Curso Profesional de C++",
    provider: "Azul School",
    link: "https://drive.google.com/file/d/1LMRwRtSY1cauPF1GVTrNigCcwjr8HUo/view?usp=sharing",
  },
];

export default function Education() {
  return (
    <section
      id="educacion"
      className="py-20 sm:py-28 bg-light-background dark:bg-dark-background"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <p className="text-xs sm:text-sm font-medium uppercase tracking-[0.28em] text-light-secondary dark:text-dark-secondary">
            Educación
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-4xl font-semibold tracking-tight text-light-text dark:text-dark-text text-balance">
            Formación y certificaciones
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-light-border dark:border-dark-border bg-light-section dark:bg-dark-section p-6"
          >
            <div className="flex items-center gap-2.5">
              <FaGraduationCap
                size={18}
                className="text-light-secondary dark:text-dark-secondary shrink-0"
              />
              <h3 className="font-serif text-lg font-semibold text-light-text dark:text-dark-text">
                {degree.title}
              </h3>
            </div>
            <p className="mt-1.5 text-sm text-light-soft dark:text-dark-soft">
              <span className="font-medium text-light-text dark:text-dark-text">
                {degree.institution}
              </span>
              <span className="text-light-muted dark:text-dark-muted">
                {" "}
                · {degree.period}
              </span>
              <a
                href={degree.certificateLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Ver título"
                className="ml-2 inline-flex align-middle text-light-secondary dark:text-dark-secondary hover:opacity-80"
              >
                <FaExternalLinkAlt size={12} />
              </a>
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-light-soft dark:text-dark-soft list-disc pl-5 marker:text-light-secondary dark:marker:text-dark-secondary">
              {degree.highlights.map((item, i) => (
                <li key={i} className="text-pretty">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ delay: 0.08, duration: 0.5 }}
            className="rounded-2xl border border-light-border dark:border-dark-border bg-light-section dark:bg-dark-section p-6"
          >
            <div className="flex items-center gap-2.5">
              <FaCertificate
                size={16}
                className="text-light-secondary dark:text-dark-secondary shrink-0"
              />
              <h3 className="font-serif text-lg font-semibold text-light-text dark:text-dark-text">
                Certificaciones
              </h3>
            </div>
            <ul className="mt-4 space-y-3">
              {certifications.map((cert, i) => (
                <li key={i}>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-2 text-sm text-light-soft dark:text-dark-soft transition-colors hover:text-light-secondary dark:hover:text-dark-secondary"
                  >
                    <FaExternalLinkAlt
                      size={11}
                      className="mt-1 shrink-0 text-light-muted dark:text-dark-muted group-hover:text-light-secondary dark:group-hover:text-dark-secondary"
                    />
                    <span className="text-pretty">
                      <span className="font-medium text-light-text dark:text-dark-text group-hover:text-light-secondary dark:group-hover:text-dark-secondary">
                        {cert.title}
                      </span>{" "}
                      — {cert.provider}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Idiomas */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="mt-10 rounded-2xl border border-light-border dark:border-dark-border bg-light-section dark:bg-dark-section p-6"
        >
          <p className="text-xs uppercase tracking-[0.18em] text-light-muted dark:text-dark-muted">
            Idiomas
          </p>
          <p className="mt-2 text-sm text-light-soft dark:text-dark-soft">
            Español nativo · Inglés con lectura técnica y conversación básica.
          </p>
        </motion.div>
      </div>
    </section>
  );
}