// app/components/icons/LazyIcon.tsx
"use client";
import React, { Suspense } from "react";
import { FaCode } from "react-icons/fa";

// Define a fallback icon or loader
const FallbackIcon = () => <span className="text-xl"><FaCode/></span>;

// Lazy load icon by string (e.g., "SiDjango")
const LazyIcon = ({ iconName }: { iconName: string }) => {
  if (!iconName) {
    return <FallbackIcon />;
  }
  const prefix = iconName.slice(0, 2); // "Fa", "Si", etc.

  const importPathMap: Record<string, () => Promise<any>> = {
    Fa: () => import("react-icons/fa"),
    Si: () => import("react-icons/si"),
    Ai: () => import("react-icons/ai"),
    Bs: () => import("react-icons/bs"),
    Md: () => import("react-icons/md"),
    Io: () => import("react-icons/io"),
    Tb: () => import("react-icons/tb"),
    Hi: () => import("react-icons/hi"),
  };

  const IconComponent = React.lazy(async () => {
    try {
      const iconPack = await importPathMap[prefix]?.();
      const Icon = iconPack?.[iconName];
      if (!Icon)
        throw new Error(`Icon "${iconName}" not found in pack "${prefix}"`);
      return { default: Icon };
    } catch (err) {
      console.error("Icon load error:", err);
      return { default: FallbackIcon }; // fallback
    }
  });

  return (
    <Suspense fallback={<FallbackIcon />}>
      <IconComponent />
    </Suspense>
  );
};

export default LazyIcon;