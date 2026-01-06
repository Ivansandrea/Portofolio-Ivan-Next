"use client"; // wajib kalau pakai App Router

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <motion.div
      className="w-6 h-6 bg-white rounded-full pointer-events-none fixed top-0 left-0 z-50 mix-blend-difference"
      animate={{
        x: position.x - 12,
        y: position.y - 12,
      }}
      transition={{ type: "spring", stiffness: 1000, damping: 28 }}
    />
  );
}
