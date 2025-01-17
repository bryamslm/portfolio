"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-6 bg-light-section dark:bg-dark-section text-light-text dark:text-dark-text">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Texto */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Bryam López. All rights reserved.</p>

        {/* Redes Sociales */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://linkedin.com/in/bryamslm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-light-secondary dark:hover:text-dark-secondary"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://github.com/bryamslm"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-light-secondary dark:hover:text-dark-secondary"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="mailto:bryam.steven.lopez@gmail.com"
            aria-label="Email"
            className="hover:text-light-secondary dark:hover:text-dark-secondary"
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
}
