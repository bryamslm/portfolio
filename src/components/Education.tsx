"use client";

import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";

const education = [
  {
    degree: "Bachelor's Degree in Computer Engineering",
    institution: "Tecnológico de Costa Rica",
    period: "2020 - 2024",
    description: [
      "🎓 Specialized in software development and observability frameworks.",
      "📚 Developed AR/VR educational projects using Unity and Vuforia SDK.",
      "💻 Final project: Designed and implemented an observability framework for Node.js services."
    ],
    // 🔗 Enlace al título de Bachillerato
    certificateLink: "https://drive.google.com/file/d/1e2hkG0mGfKou1ZxyGHVl9OqMGzIEi7Lh/view?usp=sharing"
  },
  {
    degree: "Certifications",
    institution: "",
    period: "",
    description: [
      {
        title: "Mobile App Development",
        provider: "Google Actívate",
        link: "https://drive.google.com/file/d/193pBjwhEPTvY_HpJ4o6O2-20DBliAE_E/view"
      },
      {
        title: "JavaScript Algorithms and Data Structures",
        provider: "FreeCodeCamp",
        link: "https://www.freecodecamp.org/certification/fcca570a962-24c8-4ef2-b78d-1b6f9d132ae5/javascript-algorithms-and-data-structures"
      },
      {
        title: "Game Development with Unity",
        provider: "Udemy",
        link: "https://www.udemy.com/certificate/UC-6e377a1f-b825-4ebc-8bd5-82dbeb3e6614/"
      },
      {
        title: "Professional C++ Course",
        provider: "Azul School",
        link: "https://drive.google.com/file/d/1LMRwRtSYp1cauPF1GVTrNigCcwjr8HUo/view?usp=sharing"
      },
      {
        title: "Soft Skills and Leadership for Transformation",
        provider: "The John Maxwell Leadership Foundation",
        link: "https://drive.google.com/file/d/1yFPKtq11OTYJvyCHXs7vPnL0Tcl_nCL-/view?usp=sharing"
      }
    ]
  }
];

export default function Education() {
  return (
    <section id="education" className="min-h-screen py-20 bg-light-background dark:bg-dark-background">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-light-text dark:text-dark-text"
        >
          Education
        </motion.h2>

        <div className="mt-12 space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="border-l-4 pl-6 border-light-secondary dark:border-dark-secondary"
            >
              {/* Título de grado */}
              <h3 className="text-2xl font-semibold text-light-text dark:text-dark-text flex items-center">
                {edu.degree} {edu.institution && `- ${edu.institution}`}
                {/* Icono de enlace al título */}
                {edu.certificateLink && (
                  <a
                    href={edu.certificateLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-2 text-light-secondary dark:text-dark-secondary hover:text-light-text dark:hover:text-dark-text"
                  >
                    <FaExternalLinkAlt size={18} />
                  </a>
                )}
              </h3>

              {edu.period && (
                <p className="text-sm italic text-light-text dark:text-dark-text">{edu.period}</p>
              )}

              {/* Descripción y certificados */}
              <ul className="mt-4 list-disc pl-5 space-y-2 text-light-text dark:text-dark-text">
                {Array.isArray(edu.description) && edu.description.every(item => typeof item === "string")
                  ? edu.description.map((item, i) => <li key={i}>{item}</li>)
                  : edu.description.map((cert, i) => (
                      <li key={i} className="flex items-center">
                        <a
                          href={(cert as { link: string }).link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline flex items-center"
                        >
                          {(cert as { title: string }).title} - {(cert as { provider: string }).provider}
                          <FaExternalLinkAlt className="ml-1 text-xs text-light-secondary dark:text-dark-secondary" />
                        </a>
                      </li>
                    ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
