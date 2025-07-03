"use client";

import React, { useState, useRef, useEffect, JSX } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaCode,
  FaProjectDiagram,
  FaUser,
  FaEnvelope,
  FaBars,
  FaTimes,
  FaHome,
  FaMoon,
  FaSun,
} from "react-icons/fa";

import { IoSunny } from "react-icons/io5";


type NavItem = {
  name: string;
  href: string;
  icon: JSX.Element;
};

const navItems: NavItem[] = [
  { name: "About Me", href: "#about", icon: <FaUser /> },
  { name: "Projects", href: "#projects", icon: <FaProjectDiagram /> },
  { name: "Skills", href: "#skills", icon: <FaCode /> },
  { name: "Contact", href: "#contact", icon: <FaEnvelope /> },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState<string>("#about");
  const [dragPos, setDragPos] = useState({ x: 20, y: 100 });
  const [popupVisible, setPopupVisible] = useState(true);
  const [showActivePopup, setShowActivePopup] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);
  const dragRef = useRef<HTMLDivElement>(null);

  // Initial theme from localStorage
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") setIsDarkMode(true);
  }, []);

  // Apply theme via data-theme
  useEffect(() => {
    const theme = isDarkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [isDarkMode]);

  const getActiveIcon = () => {
    const activeItem = navItems.find((item) => item.href === active);
    return activeItem ? activeItem.icon : <FaUser />;
  };

  useEffect(() => {
    let startX = 0;
    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX;
      const diffX = startX - endX;
      if (!isOpen && diffX > 50) setIsOpen(true);
      if (isOpen && diffX < -50) setIsOpen(false);
    };
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchend", handleTouchEnd);
    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isOpen]);

  useEffect(() => {
    const el = popupRef.current;
    let offsetX = 0,
      offsetY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      offsetX = e.touches[0].clientX - dragPos.x;
      offsetY = e.touches[0].clientY - dragPos.y;
      const handleTouchMove = (e: TouchEvent) => {
        setDragPos({
          x: e.touches[0].clientX - offsetX,
          y: e.touches[0].clientY - offsetY,
        });
      };
      const handleTouchEnd = () => {
        window.removeEventListener("touchmove", handleTouchMove);
        window.removeEventListener("touchend", handleTouchEnd);
      };
      window.addEventListener("touchmove", handleTouchMove);
      window.addEventListener("touchend", handleTouchEnd);
    };
    el?.addEventListener("touchstart", handleTouchStart);
    return () => el?.removeEventListener("touchstart", handleTouchStart);
  }, [dragPos]);

  const handleNavClick = (href: string) => {
    setActive(href);
    setIsOpen(false);
    setShowActivePopup(true);
    setTimeout(() => setShowActivePopup(false), 1500);
    const section = document.querySelector(href);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Home Icon */}
      <Link
        href="#home"
        className="fixed top-4 left-4 z-[100] p-2 text-2xl shadow-lg rounded-full cursor-pointer transition-all" style={{backgroundColor:"var(--card-bg)", color:"var(--primary-color)"}}
      >
        <FaHome />
      </Link>

      {/* Theme Toggle Button */}
      <button
        onClick={() => setIsDarkMode(!isDarkMode)}
        className="fixed top-18 left-4 z-[100] p-2 text-2xl shadow-lg rounded-full transition-all" style={{backgroundColor:"var(--card-bg)", color:"var(--primary-color)"}}
      >
        {isDarkMode ? <IoSunny /> : <FaMoon />}
      </button>

      

      {/* Hamburger */}
      <div
        ref={dragRef}
        className="fixed z-[100] p-2 text-2xl text-blue-600 bg-white dark:bg-neutral shadow-lg rounded-full cursor-pointer transition-all"
        style={{
          top: "1rem",
          right: isOpen ? "235px" : "1rem",
          transition: "right 0.3s ease-in-out",
          backgroundColor:"var(--card-bg)", color:"var(--primary-color)"
        }}
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaBars />
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 right-0 h-full w-[220px]  shadow-xl transform transition-transform duration-300 z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{backgroundColor:"var(--card-bg)"}}
      >
        <div className="p-4 text-2xl font-bold" style={{color:"var(--primary-color)"}}>
          <Image src="/logo4.gif" width={210} height={150} alt={"logo"} />
        </div>
        <ul className="flex flex-col gap-4 border-t border-t-gray-200 px-4 pt-5">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-500 transform ${
                  active === item.href
                    ? "bg-blue-100 text-blue-600 border-r-4 border-blue-600 animate-slidein"
                    : "text-gray-700 dark:text-gray-300 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800"
                }`}
              >
                <div
                  className={`text-xl p-2 rounded-full bg-blue-100 border transition-all duration-300 ${
                    active === item.href
                      ? "border-blue-600"
                      : "border-transparent"
                  }`}
                >
                  {item.icon}
                </div>
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Active Icon Popup */}
      {showActivePopup && (
        <div
          className="fixed z-[60] flex items-center justify-center animate-pulse-scale"
          style={{
            right: "50%",
            top: "50%",
            transform: "translateY(-50%) translateX(50%)",
            transition: "all 0.3s ease-in-out",
          }}
        >
          <div className="absolute w-20 h-20 rounded-full border-4 border-transparent border-t-blue-300 border-r-blue-400 animate-spin-slow"></div>
          <div className="w-16 h-16 bg-blue-600 rounded-full shadow-lg flex items-center justify-center text-white text-2xl relative z-10">
            {getActiveIcon()}
          </div>
        </div>
      )}

      {/* Floating Popup Icons */}
      {!isOpen && popupVisible && (
        <div
          ref={popupRef}
          className="fixed z-40 flex flex-col gap-4  p-2 rounded-xl shadow-md"
          style={{ top: dragPos.y + 80, left: dragPos.x, backgroundColor: "var(--card-bg)" }}
        >
          <button
            onClick={() => setPopupVisible(false)}
            className="self-center bg-red-600 rounded-full p-1 text-white shadow-sm"
          >
            <FaTimes />
          </button>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => handleNavClick(item.href)}
              className={`p-2 text-2xl rounded-full transition-all duration-300 ${
                active === item.href
                  ? "text-blue-600 border border-blue-600 animate-bounce"
                  : "text-gray-600 dark:text-white hover:text-blue-600"
              }`}
            >
              {item.icon}
            </Link>
          ))}
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes slidein {
          from {
            transform: translateY(-10px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes pulseScale {
          0% {
            transform: translateY(-50%) translateX(50%) scale(0.8);
            opacity: 0.7;
          }
          50% {
            transform: translateY(-50%) translateX(50%) scale(1.1);
            opacity: 1;
          }
          100% {
            transform: translateY(-50%) translateX(50%) scale(1);
            opacity: 0.9;
          }
        }

        @keyframes spinSlow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-slidein {
          animation: slidein 0.4s ease-out;
        }

        .animate-pulse-scale {
          animation: pulseScale 1.5s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spinSlow 0.8s linear infinite;
        }
      `}</style>
    </>
  );
};

export default Navbar;
