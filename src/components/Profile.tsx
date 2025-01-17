"use client";

import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaInstagram } from "react-icons/fa";
import { handleScroll } from "../utils/scrollToSection";

export default function Profile() {
  return (
    <section
      id="profile"
      className="min-h-screen flex flex-col justify-center items-center bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text px-6"
    >
      {/* Nombre y Rol */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-6xl font-bold text-center"
      >
        Hi, I'm <span className="text-light-secondary dark:text-dark-secondary">Bryam López</span>
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-xl md:text-2xl mt-4 text-center"
      >
        Full Stack Developer | Observability Enthusiast
      </motion.h2>

      {/* Descripción */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-6 max-w-2xl text-center text-light-text dark:text-dark-text"
      >
        I specialize in building scalable web applications and designing observability frameworks to ensure optimal performance and reliability.
      </motion.p>

      {/* Botones de Acción */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mt-8 flex space-x-4"
      >
        <button
          onClick={() => handleScroll("projects")}
          className="px-6 py-2 rounded-md bg-light-secondary dark:bg-dark-secondary text-dark-background hover:scale-105 transition-transform"
        >
          View Projects
        </button>

        <a
          href="/documents/CV_Bryam_Lopez_EN_2024.pdf"
          download="Bryam_Lopez_CV.pdf"
          className="px-6 py-2 rounded-md border border-light-secondary dark:border-dark-secondary text-light-text dark:text-dark-text hover:bg-light-secondary dark:hover:bg-dark-secondary hover:text-dark-background transition-colors"
        >
          Download CV
        </a>
      </motion.div>

      {/* Redes Sociales */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="mt-8 flex space-x-6"
      >
        <a
          href="https://linkedin.com/in/bryamslm"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-light-text dark:text-dark-text hover:text-light-secondary dark:hover:text-dark-secondary hover:scale-110 transition-transform"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://github.com/bryamslm"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-light-text dark:text-dark-text hover:text-light-secondary dark:hover:text-dark-secondary hover:scale-110 transition-transform"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="mailto:bryam.steven.lopez@gmail.com"
          aria-label="Email"
          className="text-light-text dark:text-dark-text hover:text-light-secondary dark:hover:text-dark-secondary hover:scale-110 transition-transform"
        >
          <FaEnvelope size={30} />
        </a>
        <a
          href="https://www.instagram.com/bryamslm"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-light-text dark:text-dark-text hover:text-light-secondary dark:hover:text-dark-secondary hover:scale-110 transition-transform"
        >
          <FaInstagram size={30} />
        </a>
      </motion.div>
    </section>
  );
}
