"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaChevronDown } from "react-icons/fa";
import { handleScroll } from "../utils/utils";

export default function Profile() {

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={24} />,
      url: "https://linkedin.com/in/bryamslm",
      color: "hover:text-blue-600"
    },
    {
      name: "GitHub",
      icon: <FaGithub size={24} />,
      url: "https://github.com/bryamslm",
      color: "hover:text-gray-800 dark:hover:text-white"
    },
    {
      name: "Email",
      icon: <FaEnvelope size={24} />,
      url: "mailto:bryam.steven.lopez@gmail.com",
      color: "hover:text-red-500"
    }
  ];

  return (
    <section
      id="profile"
      className="min-h-screen flex flex-col justify-center items-center bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text px-4 sm:px-6 lg:px-8 pt-16"
    >
      {/* Simple Background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-light-secondary/5 dark:bg-dark-secondary/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-light-secondary/5 dark:bg-dark-secondary/5 rounded-full filter blur-3xl" />
      </div>

      <div className="w-full max-w-7xl">
        {/* Header Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-light-secondary dark:text-dark-secondary font-medium mb-2 text-sm"
          >
            WELCOME TO MY PORTFOLIO
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-2"
          >
            Hi, I&apos;m{" "}
            <span className="text-light-secondary dark:text-dark-secondary relative inline-block">
              Bryam López
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-1 bg-light-secondary dark:bg-dark-secondary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ delay: 0.8, duration: 0.6 }}
              />
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl md:text-2xl font-medium text-light-text/80 dark:text-dark-text/80 mb-6"
          >
            Computer Engineer
          </motion.h2>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-6 mb-8"
        >
          <p className="text-base text-center leading-relaxed max-w-2xl mx-auto">
            I design and build scalable web applications and custom IT solutions, creating tailored systems that solve complex business challenges.
          </p>
        </motion.div>
        
        {/* Skills Tags */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mt-4 mb-8"
        >
          <span className="px-3 py-1 bg-light-secondary/10 dark:bg-dark-secondary/10 rounded-full text-sm">
            Scalable Web Applications
          </span>
          <span className="px-3 py-1 bg-light-secondary/10 dark:bg-dark-secondary/10 rounded-full text-sm">
            Enterprise IT Solutions
          </span>
          <span className="px-3 py-1 bg-light-secondary/10 dark:bg-dark-secondary/10 rounded-full text-sm">
            Full Stack Development
          </span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 mt-6"
        >
          <motion.button
            onClick={() => handleScroll("projects")}
            className="px-6 py-3 rounded-lg bg-light-secondary dark:bg-dark-secondary text-white font-medium"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            View Projects
          </motion.button>

          <motion.a
            href="/documents/CV_Bryam_Lopez.pdf"
            download="Bryam_Lopez_CV.pdf"
            className="px-6 py-3 rounded-lg border border-light-secondary dark:border-dark-secondary text-light-text dark:text-dark-text font-medium hover:bg-light-secondary/5 dark:hover:bg-dark-secondary/5 flex items-center justify-center"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-8 md:mt-10"
        >
          <div className="flex justify-center space-x-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className={`text-light-text dark:text-dark-text ${link.color} transition-all duration-300`}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  transition: { delay: 0.8 + (index * 0.1) }
                }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-3  transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.4, 0.8, 0.4], 
          y: [0, 5, 0] 
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity
        }}
        onClick={() => handleScroll("projects")}
      >
        <FaChevronDown className="h-5 w-5 text-light-secondary dark:text-dark-secondary" />
      </motion.div>
    </section>
  );
}