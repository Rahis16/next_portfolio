"use client";

import { useEffect, useState } from "react";

export function useSectionObserver() {
  const [activeSection, setActiveSection] = useState("#about");
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const observers = new Map();
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(`#${entry.target.id}`);
              setIsVisible((prev) => ({
                ...prev,
                [entry.target.id]: true,
              }));
            }
          });
        },
        { threshold: 0.3 }
      );

      observer.observe(section);
      observers.set(section.id, observer);
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return { activeSection, isVisible };
}
