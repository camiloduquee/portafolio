"use client";

import React from "react";
import SectionHeading from "components/SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "lib/hooks";

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
      <p>
        Soy un <span className="font-medium">Desarrollador Full Stack </span>{" "}
        profesional con experiencia significativa en el{" "}
        <span className="italic"> desarrollo de aplicaciones web.</span> Me
        destaco por mi enfoque ágil, implementando metodologías ágiles para
        garantizar la entrega eficiente de proyectos de alta calidad. Siempre
        estoy en modo de "aprendizaje constante", explorando nuevas
        oportunidades para ampliar mis conocimientos y mantenerme al tanto de
        las últimas tendencias tecnológicas. Los retos son mi combustible, y me
        encanta sumergirme en ellos con un fuerte compromiso con el trabajo en
        equipo.
      </p>
      <br />
      <p>
        Mi objetivo es aplicar mis conocimientos y habilidades en proyectos para
        diseñar y construir{" "}
        <span className="font-medium">soluciones escalables</span>. Me esfuerzo
        por superar expectativas, adoptando un enfoque proactivo para
        identificar y resolver posibles problemas.
      </p>
      <br />
      <p className=" text-lg">
        🚀
        <span className=" font-bold">
          ¡Estoy listo para enfrentar nuevos desafíos y contribuir al éxito de
          proyectos innovadores!
        </span>
        🚀
      </p>
    </motion.section>
  );
}
