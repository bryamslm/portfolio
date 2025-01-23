"use client";

import { motion } from "framer-motion";
import { FaCode, FaTools, FaMobileAlt, FaGamepad, FaJava } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { SiFramework7, SiJavascript, SiTypescript, SiPython, SiCplusplus, SiExpress, SiReact, SiNextdotjs, SiNodedotjs, SiFlutter, SiIonic, SiUnity, SiGrafana, SiPrometheus, SiOpentelemetry, SiElasticsearch } from "react-icons/si";
import { div } from "framer-motion/client";

const skills = [
  {
    category: "Programming Languages",
    icon: <FaCode size={24} />,
    items: [
      { name: "JavaScript", icon: <SiJavascript size={16} /> },
      { name: "TypeScript", icon: <SiTypescript size={16} /> },
      { name: "Python", icon: <SiPython size={16} /> },
      { name: "Java", icon: <FaJava size={16} /> },
      { name: "", icon: <SiCplusplus size={22} /> },
      { name: "", icon: <TbBrandCSharp size={22} /> }
    ]
  },
  {
    category: "Frameworks & Libraries",
    icon: <SiFramework7 size={24} />,
    items: [
      { name: "Next.js", icon: <SiNextdotjs size={16} /> },
      { name: "React", icon: <SiReact size={16} /> },
      { name: "Node.js", icon: <SiNodedotjs size={16} /> },
      { name: "Express.js", icon: <SiExpress size={16} /> }
    ]
  },
  {
    category: "Mobile Development",
    icon: <FaMobileAlt size={24} />,
    items: [
      { name: "Ionic", icon: <SiIonic size={16} /> },
      { name: "Flutter", icon: <SiFlutter size={16} /> }
    ]
  },
  {
    category: "Game Development",
    icon: <FaGamepad size={24} />,
    items: [
      { name: "Unity", icon: <SiUnity size={16} /> },
      { name: "Vuforia SDK", image: "vuforia-dark.png", imageDark: "vuforia-blank.png"  }
    ]
  },
  {
    category: "Observability Tools",
    icon: <FaTools size={24} />,
    items: [
      { name: "OpenTelemetry", icon: <SiOpentelemetry size={16} /> },
      { name: "Prometheus", icon: <SiPrometheus size={16} /> },
      { name: "Grafana", icon: <SiGrafana size={16} /> },
      { name: "Elasticsearch", icon: <SiElasticsearch size={16} /> },
      { name: "Tempo", image: "tempo-dark.png", imageDark: "tempo-blank.png" },
      { name: "Mimir", image: "mimir-dark.png", imageDark: "mimir-blank.png" },
      { name: "Loki", image: "loki-black.png", imageDark: "loki-blank.png" },
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 bg-light-background dark:bg-dark-background">
      <div className="max-w-7xl mx-auto px-6">
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
                <span className="text-black dark:text-white">
                  {skill.icon}
                </span>
                <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">
                  {skill.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2 text-light-text dark:text-dark-text">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="flex items-center space-x-2 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-lg text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                  >
                    {item.image ? (
                      // Renderizar la imagen si existe
                      <div>
                        <img
                        src={item.image} // Imagen por defecto (tema claro)
                        className="w-4 h-4 dark:hidden" // Mostrar solo en tema claro
                        alt={item.name}
                      />
                    
                      <img
                        src={item.imageDark} // Imagen para tema oscuro
                        className="w-4 h-4 hidden dark:block" // Mostrar solo en tema oscuro
                        alt={item.name}
                      />
                      </div>
                    ) : (
                      // Renderizar el ícono si no hay imagen
                      <span className="text-base">{item.icon}</span>
                    )}
                    <span>{item.name}</span>
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
