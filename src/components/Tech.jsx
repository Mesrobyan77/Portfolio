import React, { useEffect } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const Tech = () => {
  useEffect(() => {
    gsap.fromTo(
      ".tech-icon",
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 2.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".tech-icons-wrapper",
          start: "top 80%",
          end: "bottom 70%",
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <section>
      <div className="tech-icons-wrapper flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <motion.div
            key={technology.name}
            className="relative w-28 h-28 flex items-center justify-center cursor-pointer"
            initial="rest"
            whileHover="hover"
            animate="rest"
            variants={{
              rest: {},
              hover: {},
            }}
          >
            <motion.span
              variants={{
                rest: { opacity: 0, scale: 0.8 },
                hover: { opacity: 1, scale: 1 },
              }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute inset-0 size-full flex items-center justify-center  text-secondary text-sm font-medium bg-black/60 rounded-lg pointer-events-none z-[999999]"
            >
              {technology.name}
            </motion.span>

            <img
              src={technology.icon}
              alt={technology.name}
              className="tech-icon  w-full h-full object-contain rounded-lg"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SectionWrapper(Tech, "");
