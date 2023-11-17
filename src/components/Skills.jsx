"use client";

import React from "react";
import SectionHeading from "@/components/SectionHeading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

const faceInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    };
  },
};

export default function Skills() {
  const { ref } = useSectionInView("Habilidades", 0.75);
  return (
    <section
    id="habilidades"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>Mis Habilidades</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => {
          return (
            <motion.li
              className="bg-white border border-black/[0.1] rounded-xl px-5 py-3 dark:bg-gray-800 dark:text-white/100"
              key={index}
              variants={faceInAnimationVariants}
              initial="initial"
              whileInView={"animate"}
              viewport={{
                once: true,
              }}
              custom={index}
            >
              {skill}
            </motion.li>
          );
        })}
      </ul>
    </section>
  );
}
