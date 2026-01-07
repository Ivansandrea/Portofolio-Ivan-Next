"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef(null);
  const mapRef = useRef(null);
  const formRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%", // mulai animasi saat section masuk
          toggleActions: "play none none reverse",
        },
      });

      tl.from(mapRef.current, {
        x: -120,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      })
        .from(
          formRef.current,
          {
            x: 120,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.7"
        )
        .from(
          formRef.current.children,
          {
            opacity: 0,
            y: 30,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
          },
          "-=0.5"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      id="contact"
      className="min-h-screen flex flex-col-reverse md:flex-row gap-10 items-center justify-center px-5 md:px-30 py-20"
    >
      {/* MAP */}
      <div ref={mapRef}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.108983576949!2d104.11608617528859!3d1.0804227989092037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d98594c29153d5%3A0xf51fafd33d9f2cd7!2sJl.%20Purna%20Yudha%20Indah%2C%20Kabil%2C%20Kecamatan%20Nongsa%2C%20Kota%20Batam%2C%20Kepulauan%20Riau%2029467!5e0!3m2!1sid!2sid!4v1767582982456!5m2!1sid!2sid"
          width="600"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-xl w-[350px] h-[300px] md:w-[500px] md:h-[400px] lg:w-[600px] lg:h-[450px]"
        />
      </div>

      {/* FORM */}
      <form
        ref={formRef}
        className="flex flex-col mx-auto max-w-3xl h-fit gap-5 border-x-2 rounded-full px-13 py-9 md:px-28 md:py-20 shadow-2xl shadow-white/20"
      >
        <h2 className="text-3xl text-center">Contact Me</h2>

        <input
          type="text"
          placeholder="Your Name"
          className="border-2 border-white px-5 py-2 rounded-tl-3xl rounded-br-3xl"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          className="border-2 border-white px-5 py-2 rounded-bl-3xl rounded-tr-3xl"
          required
        />

        <textarea
          placeholder="Your Message"
          className="border-2 border-white px-5 py-2 rounded-tl-3xl rounded-br-3xl"
          required
        />

        <button
          type="submit"
          className="bg-white text-black px-4 py-2 w-fit mx-auto rounded-bl-3xl rounded-tr-3xl"
        >
          Send
        </button>
      </form>
    </main>
  );
}
