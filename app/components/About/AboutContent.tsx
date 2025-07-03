import React from "react";
import Image from "next/image";
import { FaHeart, FaLightbulb } from "react-icons/fa";

type AboutProps = {
  data: any;
};

const AboutContent = ({ data }: AboutProps) => {
  return (
    <div className="transition-all duration-1000" style={{ color: "var(--text-color)" }}>
      <h2
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16"
        style={{ color: "var(--text-color)" }}
      >
        About <span style={{ color: "var(--primary-color)" }}>Me</span>
      </h2>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-8xl mx-auto">
        <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <FaLightbulb
              className="text-2xl sm:text-3xl flex-shrink-0"
              style={{ color: "var(--primary-color)" }}
            />
            <h3
              className="text-xl sm:text-2xl font-semibold"
              style={{ color: "var(--text-color)" }}
            >
              {data.title}
            </h3>
          </div>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {data.about_p1}
          </p>
          <p className="text-base sm:text-lg leading-relaxed" style={{ color: "var(--text-muted)" }}>
            {data.about_p2}
          </p>
          <div className="flex flex-col xs:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6 justify-center items-center">
            <div
              className="shadow w-fit p-6 rounded-2xl"
              style={{
                backgroundColor: "var(--card-bg)",
                border: "1px solid var(--border-color)",
                color: "var(--text-color)",
              }}
            >
              <div className="text-center xs:text-left">
                <div
                  className="text-2xl sm:text-3xl font-bold"
                  style={{ color: "var(--primary-color)" }}
                >
                  {data.project_count}+
                </div>
                <div
                  className="text-sm sm:text-base border-b pb-2"
                  style={{ color: "var(--text-muted)", borderColor: "var(--border-color)" }}
                >
                  Projects
                </div>
              </div>
              <div className="text-center xs:text-left p-2">
                <div
                  className="text-2xl sm:text-3xl font-bold"
                  style={{ color: "var(--primary-color)" }}
                >
                  {data.years_exp}+
                </div>
                <div
                  className="text-sm sm:text-base border-b pb-2"
                  style={{ color: "var(--text-muted)", borderColor: "var(--border-color)" }}
                >
                  Years
                </div>
              </div>
              <div className="text-center xs:text-left p-1">
                <div
                  className="text-2xl sm:text-3xl font-bold"
                  style={{ color: "var(--primary-color)" }}
                >
                  {data.clients_count}+
                </div>
                <div className="text-sm sm:text-base" style={{ color: "var(--text-muted)" }}>
                  Happy Clients
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div
            className="w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-2xl"
            style={{
              background: "linear-gradient(to bottom right, var(--primary-color), #8b5cf6)", // from blue to purple
            }}
          >
            <Image
              src={data.photo}
              alt="About me"
              width={500}
              height={400}
              className="w-full h-full object-cover opacity-90"
            />
          </div>
          <div
            className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 rounded-full flex items-center justify-center animate-pulse"
            style={{
              width: "4rem",
              height: "4rem",
              backgroundColor: "var(--primary-color)", // changed yellow to primary color, or you can create another variable for yellow
            }}
          >
            <FaHeart className="text-white" style={{ fontSize: "1.5rem" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
