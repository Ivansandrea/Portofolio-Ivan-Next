"use client";

import { useEffect, useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { delay, motion } from "framer-motion";

import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const box = useRef(null);
  const textRef = useRef(null);

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  useEffect(() => {
    const words = textRef.current.querySelectorAll(".word");

    gsap.to(words, {
      opacity: 1,
      color: "#ffffff",
      stagger: 0.08,
      ease: "none",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 75%",
        end: "bottom 40%",
        scrub: true,
      },
    });
  }, []);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: box.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
    });

    // FASE 1 — muncul sebagian (bayangan)
    tl.fromTo(
      box.current,
      {
        opacity: 0,
        scale: 1,
        filter: "blur(14px)",
        clipPath: "inset(0 100% 0 0)",
      },
      {
        opacity: 1,
        scale: 1,
        filter: "blur(6px)",
        clipPath: "inset(0 60% 0 0)",
        ease: "none",
      }
    )

      // FASE 2 — kebuka full & stay
      .to(box.current, {
        filter: "blur(0px)",
        clipPath: "inset(0 0% 0 0)",
        ease: "none",
      });
  }, []);

  return (
    <section
      id="about"
      className="px-14 py-32 min-h-screen items-center justify-center"
    >
      <motion.div variants={container} initial="hidden" animate="show">
        <motion.div variants={item}>
        <h1 className="text-center mb-10 tracking-widest text-3xl md:text-6xl font-bold">
          About Me
        </h1>
        </motion.div>
        <div className="lg:flex gap-32">
          <div
            ref={box}
            className="mx-auto relative flex items-center justify-center w-[200px] h-[200px] lg:w-[600px] lg:h-[400px]"
          >
            <Image
              src="/images/ivan.jpg"
              alt="ivan-img"
              fill
              className="rounded-full object-cover opacity-90 pointer-events-none"
            />
          </div>

          <p
            ref={textRef}
            className="mt-10 md:mt-0 text-lg md:text-2xl flex flex-wrap items-center justify-center lg:justify-start text-center md:text-left tracking-wider max-w-4xl leading-relaxed"
          >
            {"I'm Ivan Sandrea, a web developer specializing in website development using PHP, Laravel, SQL, and Tailwind CSS. I'm experienced in building dynamic websites with clean, responsive, and user-friendly code structures. I'm constantly developing my skills and am open to learning new technologies in the web development field."
              .split(" ")
              .map((word, i) => (
                <span key={i} className="word opacity-30 mr-2">
                  {word}
                </span>
              ))}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
