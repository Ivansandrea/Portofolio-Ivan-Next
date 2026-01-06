"use client";
import React from "react";
import Image from "next/image";
import Hero from "./components/hero";
import About from "./components/about";
// import Project from "./components/project";
import Contact from "./components/contact";
import HScrollSection from "./components/HScrollSection";
import SmoothScroll from "./components/smoothScroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="min-h-screen overflow-hidden">
        <div>
          <Image
            src="/images/gradient.png"
            alt="Gradient-img"
            width={800}
            height={600}
            className="pointer-events-none absolute top-0 right-0 opacity-60 -z-10"
          />
        </div>

        <div className="pointer-events-none h-0 w-[700px] absolute top-[30%] right-0 shadow-[0_0_900px_30px_white] -rotate-45 -z-10"></div>
        <Hero />
        <About />
        <HScrollSection />
        <Contact />
      </main>
    </SmoothScroll>
  );
}
