import React from "react";
import Image from "next/image";
import { FaRocket, FaPaperPlane } from "react-icons/fa";
import axios from "axios";

type HeroData = {
    name: string;
    photo: string;
    intro: string;
}

async function getHeroData(): Promise<HeroData> {
    // Example static data, replace with actual fetch logic as needed
    const res = await axios.get("http://localhost:8000/api/profile");

    if (res){
        return res.data;
    }
    else{
        return {
        name: "SmartCoderRahis",
        photo: "/profile.jpg",
        intro: "Full Stack Developer & UI/UX Enthusiast creating digital experiences that matter"
      };
    }
    
}


const Hero = async () => {
    const data = await getHeroData();
  return (
    <div>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 sm:px-6 lg:px-8"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        <div className="container mx-auto text-center relative z-10 max-w-6xl">
          <div className="animate-fade-in-up">
            <div className="w-50 h-50 sm:w-35 sm:h-35 md:w-50 md:h-50 mx-auto mb-6 sm:mb-8 relative">
              <div className="w-full h-full rounded-full bg-gradient-to-r from-blue-500 to-purple-600 p-1 animate-pulse-ring">
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                  <Image
                    src={data.photo}
                    alt="Profile"
                    width={300}
                    height={300}
                    className="rounded-full object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 block sm:inline">
                {data.name}
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-4xl mx-auto px-4 leading-relaxed">
              {data.intro}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-md sm:max-w-none mx-auto">
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base">
                <FaRocket className="inline mr-2" />
                View My Work
              </button>
              <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm sm:text-base">
                <FaPaperPlane className="inline mr-2" />
                Get In Touch
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-blue-600 rounded-full flex justify-center">
            <div className="w-1 h-2 sm:h-3 bg-blue-600 rounded-full mt-1 sm:mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
