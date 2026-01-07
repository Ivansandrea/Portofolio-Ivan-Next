import ParallaxText from "./parallaxText";
import Spline from "@splinetool/react-spline";
import { delay, motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
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

  return (
    <main className="relative min-h-screen p-10 sm:p-20 items-center flex flex-col-reverse lg:flex-row justify-between overflow-x-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative top-24 lg:top-auto flex flex-col gap-10 sm:gap-10 text-center z-30"
      >
        <motion.div variants={item}>
          <ParallaxText distance={100} className="lg:text-start text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Heloo, Im Ivan Sandrea
          </ParallaxText>
        </motion.div>

        <motion.div variants={item}>
          <div className="flex lg:text-start flex-col gap-5 sm:gap-3">
            <ParallaxText distance={100} className="text-xl">
              A Web Developer with a focus on{" "}
              <span className="text-red-500">Laravel</span> &{" "}
              <span className="text-blue-500">Tailwind CSS</span>.
            </ParallaxText>

            <ParallaxText distance={100} className="text-xl">
              I love creating modern, responsive, and user-friendly websites.
            </ParallaxText>
            <ParallaxText distance={100} className="relative top-7 block md:hidden text-center">
              <div className="text-sm  animate-bounce">
                <p>❕use desktop💻 for better experience❕</p>
              </div>
            </ParallaxText>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
          delay: 0.8,
        }}
        className="absolute hidden md:block md:top-0 inset-0 z-20 justify-center items-center pointer-events-none overflow-hidden select-none"
      >
        <Spline
          className="w-[700px] h-[700px] lg:w-[900px] lg:h-[900px] -translate-y-32 md:translate-y-0 translate-x-0 lg:translate-x-[25%] transform scale-100 md:scale-115"
          scene="https://prod.spline.design/URNsG61-ZP7Is3BA/scene.splinecode?v=3"
        />
      </motion.div>

      <div className="md:hidden absolute inset-0 z-20 flex justify-center items-center pointer-events-none overflow-hidden select-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="transform -translate-y-28"
        >
          <Image
            src="/images/RobotImg.png"
            alt="3D Preview"
            width={250}
            height={250}
            priority
            className="object-contain"
          />
        </motion.div>
      </div>
    </main>
  );
}
