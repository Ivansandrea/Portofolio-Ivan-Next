"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ParallaxText({
  children,
  distance = 100,
  className = "",
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);

  return (
    <motion.h1
      ref={ref}
      style={{ y }}
      className={`font-bold ${className}`} // <— tinggal gabungkan
    >
      {children}
    </motion.h1>
  );
}
