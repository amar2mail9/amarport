import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./style.css"; // Assuming you still want your CSS for styling

export default function HeroSection() {
  return (
    <div className="flex flex-col w-full md:h-[95vh] md:flex-row justify-center items-center gap-8 py-12 px-4 md:px-12">
      {/* Contents section */}
      <motion.div
        className="text-gray-600 w-full md:w-1/2"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }} 
      >
        <h3 className="text-3xl md:text-4xl font-semibold">HELLO</h3>

        <motion.h3
          className="typing-text text-4xl animate-pulse mt-4 md:text-5xl"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          I'm{" "}
          <span className="text-orange-600 font-bold">
            Amar <br />a{" "}
          </span>
          Web Developer
        </motion.h3>

        <motion.p
          className="mt-6 text-lg md:text-lg"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Welcome to my web development portfolio! I'm Amar, a skilled and
          versatile Full Stack Developer with a passion for building dynamic,
          interactive, and scalable web applications. My expertise spans in
          front-end and some back-end development, allowing me to create
          seamless,
          <b>Full-Stack Web Developer</b> solutions that are user-friendly and
          highly functional.
          <br /> <br />I have strong proficiency in <b> HTML</b>, <b>CSS</b>,
          <b>JavaScript</b>, and <b>React Js</b> for front-end development, as
          well as fresher with back-end technologies such as{" "}
          <b>Node.js, Express, and databases MongoDB</b> . I am also well-versed
          in version control with Git and have a focus on writing clean,
          efficient code that delivers performance and scalability. I'm
          dedicated to crafting high-quality, responsive websites and
          applications that deliver exceptional user experiences.
        </motion.p>

        <div className="flex flex-col md:flex-row items-center justify-center md:gap-6 mt-6">
          <Link to="/contact">
            <button className="px-6 py-2 rounded-lg bg-gray-800 text-white hover:bg-orange-500 duration-200 mb-4 md:mb-0">
              Hire me
            </button>
          </Link>

          <Link to="/projects">
            <button className="px-6 py-2 rounded-lg bg-orange-500 text-white hover:bg-sky-500 duration-200">
              My Projects
            </button>
          </Link>
        </div>
      </motion.div>

      {/* Image section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-full md:w-1/3 flex justify-center"
      >
        <img
          src="https://polytechub.in/wp-content/uploads/2024/11/Amar.png" // Replace with your actual image URL
          alt="Web Developer"
          className="w-3/4 sm:w-1/2 md:w-2/3 h-auto rounded-full shadow-md"
        />
      </motion.div>
    </div>
  );
}
