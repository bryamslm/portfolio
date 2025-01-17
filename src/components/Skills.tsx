"use client";

import { motion } from "framer-motion";
import { FaCode, FaTools, FaMobileAlt, FaGamepad, FaServer } from "react-icons/fa";
import { SiNextdotjs, SiFramework7 } from "react-icons/si";

const skills = [
  {
    category: "Programming Languages",
    icon: <FaCode size={24} />,
    items: ["JavaScript", "TypeScript", "Python", "Java", "C++", "C#"]
  },
  {
    category: "Frameworks & Libraries",
    icon: <SiFramework7 size={24} />,
    items: ["Next.js", "React", "Node.js", "Express.js", ".NET Framework"]
  },
  {
    category: "Mobile Development",
    icon: <FaMobileAlt size={24} />,
    items: ["Ionic", "Flutter"]
  },
  {
    category: "Game Development",
    icon: <FaGamepad size={24} />,
    items: ["Unity", "Vuforia SDK"]
  },
  {
    category: "Observability Tools",
    icon: <FaTools size={24} />,
    items: ["OpenTelemetry", "Prometheus", "Grafana", "Elasticsearch", "Tempo", "Mimir", "Loki"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 bg-light-background dark:bg-dark-background">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-light-text dark:text-dark-text"
        >
          Skills
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="p-6 border rounded-lg shadow-md bg-light-section dark:bg-dark-section hover:shadow-xl transition-transform hover:scale-105"
            >
              <div className="flex items-center space-x-3 mb-4">
                {skill.icon}
                <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">
                  {skill.category}
                </h3>
              </div>
              <ul className="list-disc pl-5 text-light-text dark:text-dark-text space-y-1">
                {skill.items.map((item, i) => (
                  <li key={i} className="hover:translate-x-1 transition-transform">
                    {item}
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
