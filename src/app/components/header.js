"use client";

import gsap from "gsap";
import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useRouter, usePathname } from "next/navigation";
gsap.registerPlugin(ScrollToPlugin);

export default function Header() {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  return (
    <>
      {/* HEADER */}
      <header className="px-14 w-full flex fixed z-50 justify-between items-center p-3 backdrop-blur">
        <h1 className="text-3xl DynaPuff font-semibold">Ivan Sandrea</h1>

        {/* Burger Menu — Mobile Only */}
        <i
          className="bx bx-menu text-3xl block sm:hidden! cursor-pointer"
          onClick={() => setOpen(true)}
        ></i>

        {/* Desktop Menu */}
        <nav className="hidden sm:flex">
          <ul className="flex space-x-8 text-lg">
            {["Home", "About", "Project", "Contact"].map((item) => (
              <motion.a
                key={item}
                onClick={() => {
                  const target = `#${item.toLowerCase()}`;

                  if (pathname !== "/") {
                    // pindah ke home dulu
                    router.push("/");

                    // tunggu DOM home siap
                    setTimeout(() => {
                      gsap.to(window, {
                        duration: 1.5,
                        scrollTo: target,
                        ease: "power3.out",
                      });
                    }, 300);
                  } else {
                    // kalau sudah di home, langsung scroll
                    gsap.to(window, {
                      duration: 1.5,
                      scrollTo: target,
                      ease: "power3.out",
                    });
                  }
                }}
                className="cursor-pointer select-none"
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                {item}
              </motion.a>
            ))}
          </ul>
        </nav>
      </header>

      {/* MOBILE MENU - SLIDE DOWN FROM TOP */}
      <aside
        className={`fixed sm:hidden top-0 left-0 w-full border-0 shadow-xl z-[99] p-6 transition-transform duration-300
  ${open ? "translate-y-10" : "-translate-y-full"}`}
      >
        <ul className="flex flex-col text-center space-y-6 text-lg">
          {["Home", "About", "Project", "Contact"].map((item) => (
            <li key={item}>
              <motion.a
                onClick={() => {
                  const target = `#${item.toLowerCase()}`;

                  if (pathname !== "/") {
                    router.push("/");
                    setTimeout(() => {
                      gsap.to(window, {
                        duration: 1.2,
                        scrollTo: target,
                        ease: "power3.out",
                      });
                    }, 300);
                  } else {
                    gsap.to(window, {
                      duration: 1.2,
                      scrollTo: target,
                      ease: "power3.out",
                    });
                  }

                  setOpen(false);
                }}
                className="cursor-pointer select-none"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                {item}
              </motion.a>
            </li>
          ))}
        </ul>
      </aside>

      {/* BACKDROP (klik luar untuk close) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-[90] sm:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}
    </>
  );
}
