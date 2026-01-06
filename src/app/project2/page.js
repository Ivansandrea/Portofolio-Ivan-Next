"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

export default function Project2() {
  const images = [
    "/images/project-2.png",
    "/images/project-2-1.png",
    "/images/project-2-2.png",
    "/images/project-2-3.png",
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
    <div className="min-h-screen px-16 py-24 overflow-x-hidden z-0">
      <div className="flex flex-col gap-5">
        <div className="flex flex-col md:flex-row gap-5 justify-between">
          {/* IMAGE SLIDER */}
          <div className="relative w-full h-48 md:w-[60vw] md:h-[60vh] rounded-3xl overflow-hidden">
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
            <div className="flex flex-col gap-5">
              {/* TECH STACK */}
              <div className="flex flex-col p-5 gap-3 text-xl bg-[#1b263b] rounded-xl w-full">
                <motion.div variants={item}>
                  <h1 className="tracking-widest text-xl font-bold">Technology used</h1>
                </motion.div>
                <motion.div variants={item}>
                  <ul className="list-disc pl-6">
                    <li>
                      <span className="text-red-500">Laravel</span>
                    </li>
                    <li>
                      <span className="text-orange-500">HTML</span> &{" "}
                      <span className="text-yellow-500">JS</span>
                    </li>
                    <li>
                      <span className="text-blue-800">MySQL</span>
                    </li>
                    <li>
                      <span className="text-blue-400">Tailwind CSS</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              <div className="flex flex-col p-5 gap-3 bg-[#1b263b] rounded-xl">
                <motion.div variants={item}>
                  <h1 className="tracking-widest text-xl font-bold">Features</h1>
                </motion.div>
                <motion.div variants={item}>
                  <ul className="list-disc list-inside text-xl mt-2">
                    <li>Device data management</li>
                    <li>Device damage and condition reporting</li>
                    <li>Device category and status</li>
                    <li>Device report and maintenance history</li>
                    <li>User authentication system</li>
                  </ul>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* DESCRIPTION */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item}>
            <div className="bg-[#1b263b] rounded-xl p-5 space-y-3">
              <h1 className="text-2xl md:text-3xl font-bold">
                Device Reporting System
              </h1>
              <p className="text-2xl tracking-wide text-justify leading-relaxed">
                The Device Reporting System is a web-based application used to
                record, manage, and consolidate device conditions in a
                structured and efficient manner. It is designed to facilitate
                the reporting of damage, maintenance, and device usage status,
                ensuring data is documented quickly and easily accessed.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
