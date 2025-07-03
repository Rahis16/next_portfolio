// components/ProjectList.tsx
"use client";

import React from "react";
import Image from "next/image";
import { FaRocket, FaGithub, FaExternalLinkAlt, FaCode } from "react-icons/fa";
import { useSectionObserver } from "@/app/hooks/useSectionObserver";

type ProjectsProps = {
  data: any;
};

const ProjectList = ({ data }: ProjectsProps) => {
  const { isVisible } = useSectionObserver();

  const projects = data.map((project: any) => ({
    id: project.id,
    title: project.title,
    description: project.desc,
    tech: project.tech_used.split(",").map((t: string) => t.trim()),
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
      style={{ color: "var(--text-color)" }}
    >
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16"
        style={{ color: "var(--text-color)" }}
      >
        My <span style={{ color: "var(--primary-color)" }}>Projects</span>
      </h2>

      {/* Featured Projects */}
      <div className="mb-12 sm:mb-16">
        <h3
          className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 flex items-center gap-3"
          style={{ color: "var(--text-color)" }}
        >
          <FaRocket
            className="flex-shrink-0"
            style={{ color: "var(--primary-color)" }}
          />
          Featured Projects
        </h3>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects
            .filter((p: any) => p.featured)
            .map((project: any) => (
              <div
                key={project.id}
                className="rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                style={{
                  backgroundColor: "var(--card-bg)",
                  color: "var(--text-color)",
                }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-40 sm:h-48 lg:h-56 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(0,0,0,0.5), transparent)",
                    }}
                  ></div>
                </div>
                <div className="p-4 sm:p-6">
                  <h4
                    className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3"
                    style={{ color: "var(--text-color)" }}
                  >
                    {project.title}
                  </h4>
                  <p
                    className="text-sm sm:text-base mb-3 sm:mb-4 leading-relaxed"
                    style={{ color: "var(--text-muted)" }}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.tech.map((tech: any) => (
                      <span
                        key={tech}
                        className="px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm"
                        style={{
                          backgroundColor: "var(--badge-bg)",
                          color: "var(--primary-color)",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 sm:gap-4 text-sm sm:text-base">
                    <a
                      href={project.github}
                      className="flex items-center gap-1 sm:gap-2 transition-colors"
                      style={{ color: "var(--text-muted)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--primary-color)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text-muted)")
                      }
                    >
                      <FaGithub className="flex-shrink-0" />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className="flex items-center gap-1 sm:gap-2 transition-colors"
                      style={{ color: "var(--text-muted)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "var(--primary-color)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color = "var(--text-muted)")
                      }
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
        <h3
          className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 flex items-center gap-3"
          style={{ color: "var(--text-color)" }}
        >
          <FaCode
            className="flex-shrink-0"
            style={{ color: "var(--primary-color)" }}
          />
          Other Projects
        </h3>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {projects
            .filter((p: any) => !p.featured)
            .slice(0, 2)
            .map((project: any) => (
              <div
                key={project.id}
                className="rounded-xl shadow-md hover:shadow-lg transition-all duration-300 p-4 sm:p-6"
                style={{
                  backgroundColor: "var(--card-bg)",
                  color: "var(--text-color)",
                  borderLeft: "4px solid var(--primary-color)",
                }}
              >
                <h4
                  className="text-base sm:text-lg font-semibold mb-2"
                  style={{ color: "var(--text-color)" }}
                >
                  {project.title}
                </h4>
                <p
                  className="text-sm sm:text-base mb-3 leading-relaxed"
                  style={{ color: "var(--text-muted)" }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3">
                  {project.tech.map((tech: any) => (
                    <span
                      key={tech}
                      className="px-2 py-1 rounded text-xs"
                      style={{
                        backgroundColor: "var(--badge-bg-alt)",
                        color: "var(--text-muted)",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 sm:gap-4 text-sm">
                  <a
                    href={project.github}
                    style={{ color: "var(--primary-color)" }}
                    className="hover:underline"
                  >
                    View Code
                  </a>
                  <a
                    href={project.live}
                    style={{ color: "var(--primary-color)" }}
                    className="hover:underline"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
        </div>
      </div>
      <div className="mt-5 py-6 px-8 rounded-2xl" style={{backgroundColor:"var(--secondary-bg)"}}>
        <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
        <FaRocket className="inline mr-2" />
        View All Projects
      </button>
      </div>
    </div>
  );
};

export default ProjectList;
