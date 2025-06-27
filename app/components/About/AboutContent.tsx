import React from "react";
import Image from "next/image";
import { FaHeart, FaLightbulb } from "react-icons/fa";

type AboutProps = {
  data: any;
};

const AboutContent = ({ data }: AboutProps) => {
  return (
    <div className="transition-all duration-1000">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-12 sm:mb-16">
        About <span className="text-blue-600">Me</span>
      </h2>
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-8xl mx-auto">
        <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
          <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
            <FaLightbulb className="text-2xl sm:text-3xl text-yellow-500 flex-shrink-0" />
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-800">
              {data.title}
            </h3>
          </div>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {data.about_p1}
          </p>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            {data.about_p2}
          </p>
          <div className="flex flex-col xs:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6 justify-center items-center">
            <div className="shadow w-fit p-6 rounded-2xl">
              <div className="text-center xs:text-left">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                  {data.project_count}+
                </div>
                <div className="text-sm sm:text-base text-gray-600 border-b border-b-gray-200 pb-2">
                  Projects
                </div>
              </div>
              <div className="text-center xs:text-left p-2">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                  {data.years_exp}+
                </div>
                <div className="text-sm sm:text-base text-gray-600 border-b border-b-gray-200 pb-2">Years</div>
              </div>
              <div className="text-center xs:text-left p-1">
                <div className="text-2xl sm:text-3xl font-bold text-blue-600">
                  {data.clients_count}+
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  Happy Clients
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="relative order-1 lg:order-2">
          <div className="w-full h-64 sm:h-80 lg:h-96 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={data.photo}
              alt="About me"
              width={500}
              height={400}
              className="w-full h-full object-cover opacity-90"
            />
          </div>
          <div className="absolute -bottom-3 -right-3 sm:-bottom-6 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-yellow-400 rounded-full flex items-center justify-center animate-pulse">
            <FaHeart className="text-lg sm:text-xl lg:text-2xl text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
