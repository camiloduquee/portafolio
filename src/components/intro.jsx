"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsArrowRight, BsLinkedin, BsGithub } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";
import { linkGitHub, linkLinkedin } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";


export default function Intro() {
  const { ref } = useSectionInView("Inicio", 0.5);
  const { setActiveSection, setTimeOfLastClick } =
  useActiveSectionContext();
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-28"
      id="inicio"
    >
      <div className="flex items-center justify-center">
        <div className=" relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/Avatar.png"
              alt="Héctor Gómez"
              width="192"
              height="192"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hola, soy Héctor.</span> Soy un{" "}
        <span className="font-bold">desarrollador full-stack</span>. Me gusta
        construir <span className="italic">sitios y aplicaciones.</span> Mi
        enfoque es <span className="underline">React (Next.js)</span>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contacto"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition cursor-pointer"
          onClick={()=> {
            setActiveSection("Contacto");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contácteme{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>
        <Link
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10"
          href="/Héctor-Gómez.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          Descargar CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </Link>
        <Link
          className="group bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10"
          href={linkLinkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsLinkedin className="opacity-80 group-hover:opacity-100 dark:text-white/60" />
        </Link>
        <Link
          className="group bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-black/10 dark:bg-white/10"
          href={linkGitHub}
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub className="opacity-80 group-hover:opacity-100 dark:text-white/60" />
        </Link>
      </motion.div>
    </section>
  );
};
