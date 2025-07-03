// components/SkillList.tsx
"use client";
import React from "react";
import { useSectionObserver } from "@/app/hooks/useSectionObserver"; // make sure path is correct
import LazyIcon from "../icons/LazyIcon";

type SkillProps = {
  data: any;
};

export default function SkillList({ data }: SkillProps) {
  const { isVisible } = useSectionObserver();

  //   const skills = [
  //   { name: "React", icon: <FaReact />, level: 90, color: "bg-blue-500" },
  //   { name: "TypeScript", icon: <SiTypescript />, level: 85, color: "bg-blue-600" },
  //   { name: "Next.js", icon: <SiNextdotjs />, level: 88, color: "bg-gray-800" },
  //   { name: "Node.js", icon: <FaNodeJs />, level: 82, color: "bg-green-500" },
  //   { name: "Python", icon: <FaPython />, level: 75, color: "bg-yellow-500" },
  //   { name: "MongoDB", icon: <SiMongodb />, level: 80, color: "bg-green-600" },
  //   { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 92, color: "bg-cyan-500" },
  //   { name: "Git", icon: <FaGitAlt />, level: 85, color: "bg-red-500" },
  // ];

  return (
    <div
      className={`transition-all duration-1000 ${
        isVisible.skills
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16" style={{color:"var(--text-color)"}}>
        My <span style={{color: "var(--primary-color)"}}>Skills</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 max-w-8xl mx-auto">
        {data.map((skill: any, index: number) => (
          <div
            key={skill.id}
            className="rounded-xl shadow-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 border hover:border-blue-200"
            style={{ animationDelay: `${index * 0.1}s`, backgroundColor:"var(--card-bg)", borderColor: "var(--border-color)" }}
          >
            <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
              <div
                className={`p-2 sm:p-3 rounded-full ${skill.color} text-white text-lg sm:text-2xl flex-shrink-0`}
                
              >
                <LazyIcon iconName={skill.icon} />
              </div>
              <h3 className="text-base sm:text-lg font-semibold " style={{color:"var(--text-color)"}}>
                {skill.name}
              </h3>
            </div>
            <div className="mb-2">
              <div className="flex justify-between text-xs sm:text-sm text-gray-600 mb-1">
                <span>Proficiency</span>
                <span>{skill.level}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5 sm:h-2">
                <div
                  className={`h-1.5 sm:h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
                  style={{
                    width: isVisible.skills ? `${skill.level}%` : "0%",
                  }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
