import React from "react";
import { motion } from "framer-motion";
import {
  FaCss3,
  FaHtml5,
  FaJsSquare,
  FaReact,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import { DiNodejs, DiMysql, DiMongodb } from "react-icons/di";
import { SiTailwindcss, SiExpress, SiPostgresql } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";

// Skills Data with icons and original colors
const skills = [
  {
    icon: <FaHtml5 color="#e44d26" />, // HTML original color
    name: "HTML",
  },
  {
    icon: <FaCss3 color="#2965f1" />, // CSS original color
    name: "CSS",
  },
  {
    icon: <FaJsSquare color="#f7df1e" />, // JavaScript original color
    name: "JAVASCRIPT",
  },
  {
    icon: <FaReact color="#61dafb" />, // React JS original color
    name: "REACT JS",
  },
  {
    icon: <FaPython color="#306998" />, // Python original color
    name: "PYTHON",
  },
  {
    icon: <DiNodejs color="#68a063" />, // Node.js original color
    name: "NODE JS",
  },
  {
    icon: <SiExpress color="#000000" />, // Express.js original color
    name: "EXPRESS JS",
  },
  {
    icon: <SiTailwindcss color="#06b6d4" />, // Tailwind CSS original color
    name: "TAILWIND CSS",
  },
  {
    icon: <BsGithub color="#333" />, // GitHub color
    name: "GITHUB",
  },
  {
    icon: <DiMongodb color="#47A248" />, // MongoDB original color
    name: "MONGODB",
  },
  {
    icon: <FaBootstrap color="#563d7c" />, // Bootstrap original color
    name: "BOOTSTRAP",
  },
  {
    icon: <FaGitAlt color="#f1502f" />, // Git logo original color
    name: "GIT",
  },
];

const Skills = () => {
  return (
    <section className="py-12 w-10/12 mx-auto ">
      <div className="container mx-auto">
        <motion.h2
          className="text-4xl bg-gray-700 py-5 rounded-xl hover:bg-orange-500 duration-300 font-semibold text-center text-gray-100   mb-8 "
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          My Skills
        </motion.h2>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          viewport={{ once: true }}
        >
          {skills.map((skill, indx) => (
            <motion.div
              key={indx}
              className="w-full max-w-[220px] mx-auto hover:shadow-lg hover:shadow-gray-500 hover:scale-105 duration-500 rounded-lg p-6 shadow text-gray-200 bg-gray-800 hover:bg-gray-200 hover:text-gray-900 flex flex-col items-center gap-3"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { type: "spring", stiffness: 100 },
              }}
              viewport={{ once: true }}
            >
              <button className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl animate-pulse">
                {skill.icon}
              </button>
              <span className="text-lg text-center  ">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
