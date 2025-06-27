// components/ContactForm.tsx (Client Component)
"use client";

import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import { useSectionObserver } from "@/app/hooks/useSectionObserver";

const ContactForm = () => {
  const { isVisible } = useSectionObserver();

  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", contactForm);
    setContactForm({ name: "", email: "", message: "" });
  };

  return (
    <div
      className={`transition-all duration-1000 ${
        isVisible.contact ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-12 sm:mb-16">
        Get In <span className="text-yellow-300">Touch</span>
      </h2>
      <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 max-w-6xl mx-auto">
        {/* Contact Info */}
        <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">
              Let's Connect
            </h3>
            <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
              I'm always interested in hearing about new opportunities and exciting projects. Whether
              you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
          </div>

          <div className="space-y-3 sm:space-y-4">
            <div className="flex items-center gap-3 sm:gap-4 text-blue-100 text-sm sm:text-base">
              <FaEnvelope className="text-lg sm:text-xl text-yellow-300 flex-shrink-0" />
              <span className="break-all">john.doe@example.com</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 text-blue-100 text-sm sm:text-base">
              <FaPhone className="text-lg sm:text-xl text-yellow-300 flex-shrink-0" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 sm:gap-4 text-blue-100 text-sm sm:text-base">
              <FaMapMarkerAlt className="text-lg sm:text-xl text-yellow-300 flex-shrink-0" />
              <span>San Francisco, CA</span>
            </div>
          </div>

          <div className="flex gap-3 sm:gap-4 pt-4 sm:pt-6">
            <a
              href="#"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              <FaGithub className="text-lg sm:text-xl" />
            </a>
            <a
              href="#"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              <FaLinkedin className="text-lg sm:text-xl" />
            </a>
            <a
              href="#"
              className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center text-white hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              <FaTwitter className="text-lg sm:text-xl" />
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 order-1 lg:order-2">
          <form onSubmit={handleContactSubmit} className="space-y-4 sm:space-y-6">
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                required
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                required
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows={4}
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-blue-100 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:border-transparent transition-all duration-300 resize-none text-sm sm:text-base"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full px-6 sm:px-8 py-3 sm:py-4 bg-yellow-300 text-blue-800 font-semibold rounded-lg hover:bg-yellow-400 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
            >
              <FaPaperPlane className="inline mr-2" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
