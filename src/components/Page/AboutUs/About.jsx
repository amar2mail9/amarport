import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-12">
      <motion.div
        className="flex flex-col bg-gray-200 w-10/12 mx-auto my-6 border-1 border-gray-400 items-center justify-center p-8 dark:bg-gray-800 rounded-lg shadow-md"
        whileInView={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }} // Ensures animation happens once when scrolled into view
      >
        <motion.h2
          className="text-3xl font-semibold text-gray-900 dark:text-white mb-4"
          whileInView={{ y: 0 }}
          initial={{ y: -50 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed"
          whileInView={{ x: 0 }}
          initial={{ x: -50 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          Hi! I’m a passionate and self-motivated Full-Stack Developer eager to
          begin my professional journey. I have recently completed my studies
          and have gained hands-on experience with a variety of front-end and
          back-end technologies. My skills range from building responsive user
          interfaces to creating robust back-end systems, making me well-equipped
          to work on both the client and server sides of an application.
        </motion.p>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed"
          whileInView={{ x: 0 }}
          initial={{ x: 50 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          I am proficient in HTML, CSS, and JavaScript for front-end
          development, and I am comfortable working with frameworks like React
          to build dynamic and interactive web applications. On the back-end, I
          have experience with Node.js, Express, and databases like MongoDB and
          MySQL, which allow me to build scalable and efficient server-side
          applications.
        </motion.p>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed"
          whileInView={{ y: 0 }}
          initial={{ y: 50 }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          I thrive in problem-solving environments and am always looking to
          learn new tools and technologies to improve my development process. My
          goal is to contribute to impactful projects that provide value to
          users while honing my skills in the development lifecycle.
        </motion.p>

        <motion.p
          className="text-lg text-gray-700 dark:text-gray-300 mb-4 leading-relaxed"
          whileInView={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          I’m enthusiastic about collaborating with a team of like-minded
          developers and gaining hands-on experience in real-world projects. My
          passion for coding and continuous learning drives me to stay
          up-to-date with industry trends and best practices.
        </motion.p>
      </motion.div>
    </section>
  );
};

export default About;
