"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Project1() {
  const images = [
    "/images/project-3.png",
    "/images/project-3-1.png",
    "/images/project-3-2.png",
    "/images/project-3-3.png",
  ];

  const [index, setIndex] = useState(0);

  const next = () => setIndex((prev) => (prev + 1) % images.length);

  const prev = () =>
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="min-h-screen px-10 py-20 md:px-16 md:py-24 overflow-x-hidden z-0">
      <div className="flex flex-col gap-10 max-w-xs md:max-w-19/20 mx-auto">
        <div className="flex flex-col md:flex-row gap-8 justify-between">
          {/* IMAGE SLIDER */}
          <div className="relative w-full h-44 md:w-[60vw] md:h-[60vh] rounded-3xl overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={images[index]}
                  alt="project image"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>

            {/* BUTTONS */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/70"
            >
              <i className="bx bx-chevron-left text-3xl"></i>
            </button>

            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center rounded-full bg-black/50 text-white backdrop-blur hover:bg-black/70"
            >
              <i className="bx bx-chevron-right text-3xl"></i>
            </button>
          </div>
          <motion.div variants={container} initial="hidden" animate="show">
            <div className="flex flex-col gap-8">
              {/* TECH STACK */}
              <div className="flex flex-col p-5 gap-5 text-xl bg-[#1b263b] rounded-xl w-full">
                <motion.div variants={item}>
                  <h1 className="tracking-widest text-xl font-bold">
                    Technology used
                  </h1>
                </motion.div>
                <motion.div variants={item}>
                  <ul className="list-disc pl-6">
                    <li>
                      <span className="text-red-500">AutoCAD</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              {/* Features */}
              <div className="flex flex-col p-5 gap-5 bg-[#1b263b] rounded-xl">
                <motion.div variants={item}>
                  <h1 className="tracking-widest text-xl font-bold">
                    AutoCAD 3D Design
                  </h1>
                </motion.div>
                <motion.div variants={item}>
                  <p className="max-w-sm text-xl md:text-xl tracking-wide text-justify leading-relaxed ">
                    This project involves creating a three-dimensional design
                    using AutoCAD to visualize objects in detail and precision.
                    The design was created with attention to scale, size, and
                    technical accuracy to meet planning and documentation
                    requirements.
                  </p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
