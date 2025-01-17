"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaYoutube } from "react-icons/fa";

const projects = [
  {
    title: "AR Educational Application",
    description: "Interactive AR educational apps designed to teach molecular ionization, biodiversity, and mechanical concepts.",
    techStack: ["Unity", "Vuforia SDK", "C#"],
    repoLink: "https://github.com/bryamslm/ar-educational-app",
    videos: [
      { title: "Solitaire Chess", link: "https://youtu.be/b9-SXXBkaCI" },
      { title: "Horseshoe and Solitaire Chess", link: "https://youtu.be/baV5nmyhgCw" },
      { title: "Ionization and Dissociation", link: "https://youtu.be/-TNEy7JM824" },
      { title: "Hydraulic Arm", link: "https://youtu.be/RIFfUAT6lzk" }
    ]
  },
  {
    title: "E-Commerce Web Application",
    description: "Online store built with React and Firebase, optimizing purchases and reducing load time by 20%.",
    techStack: ["React", "Firebase", "JavaScript", "Node.js"],
    repoLink: "https://github.com/bryamslm/EngineeringProject",
    liveDemo: ""  // Por definir
  },
  {
    title: "Bomberman VR Game",
    description: "VR Bomberman game for Android with gaze-based tracking and 5 unique levels.",
    techStack: ["Unity", "C#", "Vuforia SDK"],
    repoLink: "https://github.com/bryamslm/Bomberman-Android-VR",
    liveDemo: ""  // Por definir
  },
  {
    title: "Observability Framework Demo",
    description: "A simulation of an observability framework for monitoring Node.js services using OpenTelemetry and Grafana.",
    techStack: ["Node.js", "OpenTelemetry", "Prometheus", "Grafana", "Docker"],
    repoLink: "",  // Por definir
    liveDemo: ""   // Proyecto en desarrollo
  }
];

export default function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 bg-light-background dark:bg-dark-background">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-light-text dark:text-dark-text"
        >
          Projects
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              className="border rounded-lg p-6 bg-light-section dark:bg-dark-section shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform"
            >
              {/* Título */}
              <h3 className="text-2xl font-semibold text-light-text dark:text-dark-text">
                {project.title}
              </h3>

              {/* Descripción */}
              <p className="mt-2 text-light-text dark:text-dark-text">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-light-secondary dark:bg-dark-secondary text-dark-background rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Enlaces */}
              <div className="mt-4 flex space-x-4">
                {project.repoLink && (
                  <a
                    href={project.repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-light-text dark:text-dark-text hover:text-light-secondary dark:hover:text-dark-secondary"
                  >
                    <FaGithub size={24} />
                    <span>Repo</span>
                  </a>
                )}
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-light-text dark:text-dark-text hover:text-light-secondary dark:hover:text-dark-secondary"
                  >
                    <FaExternalLinkAlt size={24} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>

              {/* Videos */}
              {project.videos && (
                <div className="mt-4 space-y-2">
                  {project.videos.map((video, i) => (
                    <a
                      key={i}
                      href={video.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-light-text dark:text-dark-text hover:text-light-secondary dark:hover:text-dark-secondary"
                    >
                      <FaYoutube size={20} className="text-red-500" />
                      <span>{video.title}</span>
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}