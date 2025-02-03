import React from "react";
import { motion } from "framer-motion";

export default function HeroSection2() {
  return (
    <section className="w-full bg-gray-800 py-8 text-white">
      <section className="w-10/12 mx-auto">
        <div className="flex items-center flex-col md:flex-row gap-8">
          {/* Image Section */}
          <motion.div
            className="w-full md:w-4/12 flex justify-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <img
              src="http://polytechub.in/wp-content/uploads/2025/02/WhatsApp-Image-2025-01-22-at-4.21.14-PM.jpeg" // Replace with your image URL
              alt="Amar"
              className="w-3/4 sm:w-1/2 md:w-full rounded-lg border-2 border-gray-300"
            />
          </motion.div>

          {/* Text Section */}
          <motion.div
            className="w-full md:w-7/12 text-center md:text-left"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-lg mb-4">
              I am a passionate Full-Stack Web Developer with a solid foundation
              in both front-end and back-end technologies. My expertise lies in
              building responsive and scalable web applications using HTML, CSS,
              JavaScript, React, Node.js, and Express.
            </p>
            <p className="text-lg mb-4">
              I believe in writing clean, maintainable code and following best
              practices to build secure and efficient applications. I have
              experience working with various APIs and integrating third-party
              services into applications to improve functionality and user
              experience.
            </p>
            <p className="text-lg mb-4">
              My goal is to create applications that not only function well but
              are also easy to use and enjoyable for users. I enjoy learning new
              technologies and am constantly striving to improve my skills.
              Whether you are looking for a developer to build a new product or
              enhance an existing project, I am excited to bring your ideas to
              life.
            </p>
          </motion.div>
        </div>
      </section>
    </section>
  );
}
