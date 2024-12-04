import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 ">
      <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center px-6">
        {/* Developer Info Section */}
        <div className="text-center sm:text-left mb-6 sm:mb-0">
          <p className="text-lg font-semibold">Fresher Web Developer</p>
          <p className="text-sm">
            Passionate about coding and learning new technologies.
          </p>
        </div>

        {/* Social Media Links Section */}
        <div className="flex space-x-6 justify-center sm:justify-end">
          <Link
            to="https://github.com/amar2mail9"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400"
          >
            <FaGithub />
          </Link>
          <Link
            to="www.linkedin.com/in/amarkumar96085"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400"
          >
            <FaLinkedin />
          </Link>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.instagram.com/amar96085"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-gray-400"
          >
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="text-center mt-6 text-sm text-gray-400">
        <p>
          &copy; {new Date().getFullYear()} Fresher Web Developer. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
