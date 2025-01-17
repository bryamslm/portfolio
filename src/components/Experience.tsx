"use client";

import { motion } from "framer-motion";
import { FaTools, FaChartLine, FaGraduationCap } from "react-icons/fa";

const experiences = [
  {
    role: "Junior Software Developer",
    company: "Vivo Gaming",
    period: "Jul 2024 - Nov 2024",
    description: [
      "🛠 Developed a scalable observability framework for Node.js services, reducing error detection time by 67% (from 15 to 5 minutes).",
      "🔎 Integrated observability tools such as OpenTelemetry, Prometheus, Grafana, Elasticsearch, and Tempo.",
      "📊 Configured dashboards and real-time alerts in Grafana, improving incident resolution efficiency by 50%."
    ],
    techStack: ["Node.js", "OpenTelemetry", "Prometheus", "Grafana", "Docker"]
  },
  {
    role: "AR Educational App Developer",
    company: "Tecnológico de Costa Rica",
    period: "Aug 2022 – Dec 2023",
    description: [
      "🎮 Designed interactive AR educational applications using Unity and Vuforia SDK, increasing student engagement by 60%.",
      "🌱 Created AR experiences to simplify molecular ionization concepts and promote biodiversity awareness.",
      "⚙️ Enhanced mechanics learning with AR-based modules for teaching torque operations."
    ],
    techStack: ["Unity", "Vuforia SDK", "C#", "AR/VR Technologies"]
  },
  {
    role: "Web Application Developer",
    company: "Tecnológico de Costa Rica",
    period: "Aug 2023 – Dec 2023",
    description: [
      "🛒 Developed a fully functional e-commerce web application using React and Firebase.",
      "⚡ Optimized site performance, reducing load time by 20%."
    ],
    techStack: ["React", "Firebase", "JavaScript", "Node.js"]
  },
  {
    role: "Teaching Assistant",
    company: "Tecnológico de Costa Rica",
    period: "Aug 2022 – Jul 2023",
    description: [
      "📚 Guided over 20 students in programming and data structures.",
      "📝 Developed interactive materials to enhance algorithm comprehension by 20%."
    ],
    techStack: ["Python", "C++", "Java"]
  },
  {
    role: "VR Game Developer",
    company: "Tecnológico de Costa Rica",
    period: "Dec 2022 – Feb 2023",
    description: [
      "🎮 Developed Bomberman VR for Android, integrating gaze-based tracking.",
      "🗺️ Designed 5 progressively challenging levels."
    ],
    techStack: ["Unity", "C#", "Vuforia SDK"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="min-h-screen py-20 bg-light-background dark:bg-dark-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-light-text dark:text-dark-text"
        >
          Professional Experience
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="border rounded-lg p-6 shadow-lg bg-light-section dark:bg-dark-section hover:shadow-xl transition-shadow"
            >
              {/* Cargo y Empresa */}
              <div className="flex items-center space-x-2">
                <FaTools size={20} className="text-light-secondary dark:text-dark-secondary" />
                <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">
                  {exp.role}
                </h3>
              </div>
              <p className="text-md italic text-light-text dark:text-dark-text">
                {exp.company} | {exp.period}
              </p>

              {/* Lista de Logros */}
              <ul className="mt-4 list-disc pl-5 space-y-2 text-light-text dark:text-dark-text">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <FaChartLine className="mr-2 mt-1 text-light-secondary dark:text-dark-secondary" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-sm bg-light-secondary dark:bg-dark-secondary text-dark-background rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
