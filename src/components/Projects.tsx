"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaLock, FaEye } from "react-icons/fa";
import { cvEs, CvProjectItem } from "@/content/cv";
import { secondaryProjects } from "@/content/portfolio";

const projects: CvProjectItem[] = cvEs.projects;

export default function Projects() {
  return (
    <section
      id="proyectos"
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
            Proyectos secundarios
          </p>
          <h2 className="mt-4 font-serif text-3xl sm:text-5xl font-semibold tracking-tight text-light-text dark:text-dark-text text-balance">
            Evidencia adicional
          </h2>
          <p className="mt-5 text-base sm:text-lg leading-relaxed text-light-soft dark:text-dark-soft text-pretty">
            Sistemas y sitios que demuestran amplitud de entrega, sin competir
            con Plica, los asistentes, Voice AI o Retell Flowkit como casos
            principales.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: (index % 3) * 0.08, duration: 0.5 }}
              className="group flex flex-col rounded-2xl border border-light-border dark:border-dark-border bg-light-section dark:bg-dark-section p-6"
            >
              <h3 className="font-serif text-lg font-semibold text-light-text dark:text-dark-text">
                {project.title}
              </h3>

              <p className="mt-2.5 text-sm leading-relaxed text-light-soft dark:text-dark-soft text-pretty">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded-md border border-light-secondary/20 dark:border-dark-secondary/20 bg-light-secondary/8 dark:bg-dark-secondary/10 px-2.5 py-1 text-xs text-light-secondary dark:text-dark-secondary"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 pt-1">
                {project.privateWork && (
                  <span className="inline-flex items-center gap-2 text-sm text-light-muted dark:text-dark-muted">
                    <FaLock size={12} /> Proyecto profesional · código privado
                  </span>
                )}
                {project.note && !project.privateWork && (
                  <span className="inline-flex items-center gap-2 text-sm text-light-muted dark:text-dark-muted">
                    <FaEye size={12} /> {project.note}
                  </span>
                )}
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-light-soft dark:text-dark-soft transition-colors hover:text-light-secondary dark:hover:text-dark-secondary"
                  >
                    <FaGithub size={16} /> Repo
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-light-soft dark:text-dark-soft transition-colors hover:text-light-secondary dark:hover:text-dark-secondary"
                  >
                    <FaExternalLinkAlt size={12} /> Ver demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* Sitios secundarios */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55 }}
          className="mt-16"
        >
          <h3 className="font-serif text-xl sm:text-2xl font-semibold text-light-text dark:text-dark-text">
            Sitios y experiencias
          </h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {secondaryProjects.map((project, i) => {
              const inner = (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="rounded-xl border border-light-border dark:border-dark-border bg-light-section dark:bg-dark-section p-5 h-full"
                >
                  <p className="font-serif text-sm font-semibold text-light-text dark:text-dark-text">
                    {project.name}
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-light-soft dark:text-dark-soft text-pretty">
                    {project.description}
                  </p>
                </motion.div>
              );
              return project.url ? (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  {inner}
                </a>
              ) : (
                <div key={project.name}>{inner}</div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}