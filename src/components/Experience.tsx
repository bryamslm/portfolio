"use client";

import { motion } from "framer-motion";
import { FaBriefcase, FaCaretRight } from "react-icons/fa";
import { cvEs, CvExperienceItem } from "@/content/cv";

const experiences: CvExperienceItem[] = cvEs.experience;

export default function Experience() {
  return (
    <section
      id="experiencia"
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
            Experiencia
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-light-text dark:text-dark-text text-balance">
            Recorrido profesional
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (index % 3) * 0.08, duration: 0.5 }}
              className={`flex flex-col rounded-2xl border border-light-border dark:border-dark-border bg-light-section dark:bg-dark-section p-6 ${
                exp.current
                  ? "ring-1 ring-light-secondary/25 dark:ring-dark-secondary/25"
                  : ""
              }`}
            >
              <div className="flex items-center gap-2.5">
                <FaBriefcase
                  size={16}
                  className="text-light-secondary dark:text-dark-secondary shrink-0"
                />
                <h3 className="font-serif text-lg font-semibold text-light-text dark:text-dark-text">
                  {exp.role}
                </h3>
              </div>

              <p className="mt-1.5 text-sm text-light-soft dark:text-dark-soft">
                <span className="font-medium text-light-text dark:text-dark-text">
                  {exp.company}
                </span>
                <span className="text-light-muted dark:text-dark-muted">
                  {" "}
                  · {exp.period}
                </span>
                {exp.current && (
                  <span className="ml-2 inline-flex items-center gap-1.5 align-middle text-xs text-light-secondary dark:text-dark-secondary">
                    <span className="h-1.5 w-1.5 rounded-full bg-light-secondary dark:bg-dark-secondary" />
                    Actual
                  </span>
                )}
              </p>

              <ul className="mt-4 space-y-2.5 text-sm leading-relaxed text-light-soft dark:text-dark-soft">
                {exp.bullets.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <FaCaretRight className="mt-1 shrink-0 text-light-secondary dark:text-dark-secondary" />
                    <span className="text-pretty">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}