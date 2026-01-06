"use client";

import Image from "next/image";
import gsap from "gsap";
import { useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRouter } from "next/navigation";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function HScrollSection() {
  const router = useRouter();
  const boxRef = useRef(null);

  const handleClick = (el, path) => {
    gsap.to(el, {
      scale: 1.2,
      opacity: 0,
      duration: 0.6,
      ease: "power3.inOut",
      onComplete: () => {
        router.push(path);
      },
    });
  };

  const scroller = useRef(null);

  useLayoutEffect(() => {
    const cleanups = [];
    const ctx = gsap.context(() => {
      /* ===============================
         ZOOM IMAGE INTERACTION
      =============================== */
      const containers = gsap.utils.toArray(".img-wrapper");

      containers.forEach((container) => {
        const image = container.querySelector(".zoom-img, img");

        if (!image) return;

        const onMove = (e) => {
          const ev = e.touches ? e.touches[0] : e;
          const rect = container.getBoundingClientRect();
          const x = ((ev.clientX - rect.left) / rect.width) * 100;
          const y = ((ev.clientY - rect.top) / rect.height) * 100;

          gsap.to(image, {
            scale: 1.15,
            transformOrigin: `${x}% ${y}%`,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const onLeave = () => {
          gsap.to(image, {
            scale: 1,
            duration: 0.4,
            ease: "power2.out",
          });
        };

        // use pointer events (works for mouse + touch) and fallback mouse
        container.addEventListener("pointermove", onMove);
        container.addEventListener("pointerleave", onLeave);
        container.addEventListener("mousemove", onMove);
        container.addEventListener("mouseleave", onLeave);

        cleanups.push(() => {
          container.removeEventListener("pointermove", onMove);
          container.removeEventListener("pointerleave", onLeave);
          container.removeEventListener("mousemove", onMove);
          container.removeEventListener("mouseleave", onLeave);
        });
      });

      /* ===============================
         HORIZONTAL SCROLL
      =============================== */
      const sections = gsap.utils.toArray(".skill-set");

      gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: scroller.current,
          pin: true,
          scrub: 1,
          snap: 1 / (sections.length - 1),
          end: () => "+=" + window.innerWidth,
        },
      });
    }, scroller);

    // 🔥 CLEANUP TOTAL
    return () => {
      ctx.revert();
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <div
      id="project"
      ref={scroller}
      className="flex w-[400vw] min-h-screen overflow-hidden text-white"
    >
      {/* 1 */}
      <section className="skill-set w-screen h-full flex flex-col gap-10 items-center justify-center">
        <h1 className="text-4xl md:text-6xl">Library System</h1>

        <div
          onClick={(e) => handleClick(e.currentTarget, "/project1")}
          className="img-wrapper relative w-[59vw] h-[60vh] overflow-hidden rounded-[40px] cursor-pointer"
        >
          <Image
            src="/images/project-1.png"
            alt="img1"
            fill
            className="object-cover zoom-img"
          />
        </div>
      </section>

      {/* 2 */}
      <section className="skill-set w-screen h-full flex flex-col gap-10 items-center justify-center">
        <h1 className="text-4xl md:text-6xl text-center">
          Device Reporting System
        </h1>
        <div
          onClick={(e) => handleClick(e.currentTarget, "/project2")}
          className="img-wrapper relative w-[63vw] h-[60vh] rounded-[40px] overflow-hidden"
        >
          <Image
            src="/images/project-2.png"
            alt="img2"
            fill
            className="object-cover zoom-img"
          />
        </div>
      </section>
      {/* 3 */}
      <section className="skill-set w-screen h-full flex flex-col gap-10 items-center justify-center">
        <h1 className="text-4xl md:text-6xl text-center">AutoCAD 3D Design</h1>
        <div
          onClick={(e) => handleClick(e.currentTarget, "/project3")}
          className="img-wrapper relative w-[65.5vw] h-[60vh]  rounded-[40px] overflow-hidden"
        >
          <Image
            src="/images/project-3.png"
            alt="img2"
            fill
            className="object-cover zoom-img"
          />
        </div>
      </section>
      {/* 4 */}
      <section className="skill-set w-screen h-full flex flex-col gap-10 items-center justify-center">
        <h1 className="text-4xl md:text-6xl text-center">
          Animal Photo Gallery
        </h1>
        <div
          onClick={(e) => handleClick(e.currentTarget, "/project4")}
          className="img-wrapper relative w-[63.5vw] h-[60vh]  rounded-[40px] overflow-hidden"
        >
          <Image
            src="/images/project-4.png"
            alt="img2"
            fill
            className="object-cover zoom-img"
          />
        </div>
      </section>
    </div>
  );
}
