"use client";

import React, { useEffect } from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("Sobre mí", 0.75);
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="sobreMi"
    >
      <SectionHeading>Sobre mí</SectionHeading>
      <p className="mb-3">
        Mi experiencia como{" "}
        <span className="font-medium">desarrollador web</span> me ha permitido
        llevar a cabo proyectos web de principio a fin, desde la planificación y
        el diseño hasta la implementación y el mantenimiento. Con sólidas
        habilidades en
        <span className=" font-medium"> Node.js, React, Next.js y Express</span>
        , he trabajado en la creación de soluciones web innovadoras y escalables
        que satisfacen las necesidades de los clientes y los usuarios. Además,
        mi experiencia en el{" "}
        <span className="italic">desarrollo web con WordPress y PHP</span> me ha
        proporcionado una comprensión completa del{" "}
        <span className="underline">ecosistema web.</span>
      </p>
      <p>
        Estoy constantemente actualizando mis conocimientos y habilidades para
        mantenerme al día con las últimas tendencias y tecnologías en el
        <span className="font-medium"> desarrollo web</span>. Mi objetivo es
        ofrecer soluciones personalizadas y eficientes que impulsen el éxito de
        los proyectos. Si estás buscando un
        <span className="font-medium"> Full Stack Developer</span> comprometido
        y apasionado para tu equipo o proyecto, estaré encantado de conectarme
        contigo y explorar posibles colaboraciones.{" "}
        <span className="italic">
          ¡Hablemos de cómo puedo ayudarte a alcanzar tus objetivos en el
          desarrollo web!
        </span>
      </p>
    </motion.section>
  );
}
