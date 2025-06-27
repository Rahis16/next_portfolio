import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6 sm:mb-8">
            <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              John Doe
            </h3>
            <p className="text-gray-400 max-w-md mx-auto text-sm sm:text-base">
              Full Stack Developer passionate about creating amazing digital
              experiences.
            </p>
          </div>

          <div className="flex justify-center gap-4 sm:gap-6 mb-6 sm:mb-8">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub className="text-xl sm:text-2xl" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin className="text-xl sm:text-2xl" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaTwitter className="text-xl sm:text-2xl" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaEnvelope className="text-xl sm:text-2xl" />
            </a>
          </div>

          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2024 John Doe. All rights reserved. Built with ❤️ and lots of ☕
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
