import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About/About";
import Projects from "./components/projects/Projects";
import Skills from "./components/skills/Skills";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer";
import Style from "./components/Style";


const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Navbar />

      <Hero />

      <About/>
      

      <Projects/>

      <Skills/>

      <Contact/>

      <Footer />

      <Style/>

    </div>
  );
};

export default HomePage;
