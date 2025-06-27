// components/ProjectList.tsx
"use client";

import React from "react";
import Image from "next/image";
import { FaRocket, FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { useSectionObserver } from "@/app/hooks/useSectionObserver";

type ProjectsProps = {
  data: any;
}



const ProjectList = ({data}: ProjectsProps) => {
  const { isVisible } = useSectionObserver();

  const projects = data.map((project: any) => ({
  id: project.id,
  title: project.title,
  description: project.desc,
  tech: project.tech_used.split(',').map((t: string) => t.trim()),
  image: project.image,
  github: project.git_link,
  live: project.live_link,
  featured: project.featured,
}));


  return (
    <div
      className={`transition-all duration-1000 ${
        isVisible.projects
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12 sm:mb-16">
        My <span className="text-blue-600">Projects</span>
      </h2>

      {/* Featured Projects */}
      <div className="mb-12 sm:mb-16">
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 sm:mb-8 flex items-center gap-3">
          <FaRocket className="text-blue-600 flex-shrink-0" />
          Featured Projects
        </h3>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects
          .filter((p:any) => p.featured)
            .map((project:any) => (
              <div
                key={project.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-40 sm:h-48 lg:h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 sm:p-6">
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 sm:mb-3">
                    {project.title}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.tech.map((tech:any) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 sm:gap-4 text-sm sm:text-base">
                    <a
                      href={project.github}
                      className="flex items-center gap-1 sm:gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <FaGithub className="flex-shrink-0" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-1 sm:gap-2 text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <FaExternalLinkAlt className="flex-shrink-0" />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Other Projects */}
      <div>
        <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-6 sm:mb-8 flex items-center gap-3">
          <FaCode className="text-blue-600 flex-shrink-0" />
          Other Projects
        </h3>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {projects
            .filter((p:any) => !p.featured)
            .slice(0, 2)
            .map((project:any) => (
              <div
                key={project.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 sm:p-6 border-l-4 border-blue-600"
              >
                <h4 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                  {project.title}
                </h4>
                <p className="text-sm sm:text-base text-gray-600 mb-3 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
                  {project.tech.map((tech:any) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 sm:gap-4 text-sm">
                  <a
                    href={project.github}
                    className="text-blue-600 hover:underline"
                  >
                    View Code
                  </a>
                  <a
                    href={project.live}
                    className="text-blue-600 hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
