"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";
import { linkGitHub, linkLinkedin } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { LuMailMinus } from "react-icons/lu";

export default function Intro() {
  const { ref } = useSectionInView("Inicio", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] sm:mb-0 scroll-mt-28"
      id="inicio"
    >
      <div className="max-xs:grid-rows-3 grid grid-cols-2 grid-rows-2 justify-items-center">
        {/* elemento 1 */}

        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl font-medium sm:text-4xl col-span-2"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-l font-semibold py-16">
            Hola, Soy Héctor 🖐️
          </span>
          <br />
          <span className="xs:text-8xl font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 ">
            Full Stack Developer
          </span>
          <br></br>
          <span className="text-lg font-semibold">
            {"<"} Apasionado por el diseño web y la programación. 🖥️ {" />"}
          </span>
        </motion.h1>

        {/* elemento 2 */}

        <motion.div
          className="flex flex-col justify-center gap-2 px-4 text-lg font-medium max-xs:col-span-2 max-xs:row-start-3 row-start-2"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link
            href="#contacto"
            className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer"
            onClick={() => {
              setActiveSection("Contacto");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contácteme{" "}
            <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
          </Link>
          <Link
            className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10"
            href="/Hector-Gomez.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Descargar CV{" "}
            <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
          </Link>
          <div className="flex flex-wrap gap-4 max-xs:col-span-2 max-xs:row-start-2">
            <Link
              className="group bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10"
              href={linkLinkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin className="opacity-80 group-hover:opacity-100 dark:text-white/60" />
            </Link>
            <Link
              className="group bg-white p-4 text-gray-700 flex items-center gap-4 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10"
              href={linkGitHub}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub className="opacity-80 group-hover:opacity-100 dark:text-white/60" />
            </Link>
            <Link
              className="group bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10"
              href="mailto:hectorg.devp@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuMailMinus className="opacity-80 group-hover:opacity-100 dark:text-white/60" />
            </Link>
          </div>
        </motion.div>

        {/* elemento 3 */}
        <div className="relative w-72 max-xs:w-52 max-xs:col-span-2 max-xs:row-start-2">
          <div className="absolute z-20  row-start-2 w-72 h-72 max-xs:w-52 max-xs:h-52 rounded-full object-cover bg-gradient-to-r from-purple-300 via-purple-600 to-pink-500 p-1 animate-spin" />
          <motion.div
            className="z-20 absolute left-2 top-2 "
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/Avatar.jpg"
              alt="Héctor Gómez"
              width="270"
              height="250"
              priority={true}
              className="rounded-full object-cover shadow-xl max-xs:w-48 max-xs:h-48 "
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
