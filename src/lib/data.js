import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { GrCertificate } from "react-icons/gr";
import { LuGraduationCap } from "react-icons/lu";
import ImgRick from "../../public/Background-Rick.png";
import ImgPokemon from "../../public/Background-pokemon.png";
import ImgTCG from "../../public/Background-TCG.png";

export const linkGitHub = "https://github.com/camiloduquee";
export const linkLinkedin =
  "https://www.linkedin.com/in/h%C3%A9ctor-g%C3%B3mez-0a1075287/";
export const links = [
  {
    name: "Inicio",
    hash: "#inicio",
  },
  {
    name: "Sobre mí",
    hash: "#sobreMi",
  },
  {
    name: "Projectos",
    hash: "#projectos",
  },
  {
    name: "Habilidades",
    hash: "#habilidades",
  },
  {
    name: "Experiencia",
    hash: "#experiencia",
  },
  {
    name: "Contacto",
    hash: "#contacto",
  },
];

export const experiencesData = [
  {
    title: "Universidad Pedagógica Nacional",
    location: "Bogata - Colombia",
    description: "Curse séptimo semestre de licenciatura en electrónica ",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "Henry Bootcamp",
    location: "Bogata - Colombia",
    description:
      "Obtuve mi licencia después de dedicar 6 meses a un extenso estudio, acumulando más de 800 horas de dedicación. Durante este período, adquirí habilidades en HTML, CSS, JavaScript, React, Node.js, Express y bases de datos.",
    icon: React.createElement(GrCertificate),
    date: "2022 - 2023",
  },
  {
    title: "Dasarrollador Full Stack",
    location: "Bogata - Colombia",
    description:
      "Como parte de mi proyecto final, colaboré con un equipo de seis personas en el desarrollo de una tienda virtual. Durante este proceso, me especialicé en el desarrollo del frontend, centrándome en la creación del panel de control y sus diversas vistas y funcionalidades. Además, contribuí al desarrollo del backend y trabajé en la mejora de la experiencia del usuario para lograr un producto integral y cohesionado.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
];

export const projectsData = [
  {
    title: "Tienda Virtual (GOD)",
    description:
      "En el desarrollo de la tienda virtual de cartas TCG, se han aplicado diversos métodos de filtrado y agregación de datos. La plataforma cuenta con un panel de control que permite la gestión eficiente de artículos, facilitando la adición, modificación o eliminación de productos. Además, el panel proporciona información detallada, incluyendo estadísticas, órdenes de compra y gestión de usuarios.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Redux", "Scrum", "Git"],
    imageUrl: ImgTCG,
  },
  {
    title: "Pokédex",
    description:
      "En el marco de mi proyecto Pokémon, integro una API con métodos avanzados de filtrado y agregación para enriquecer eficientemente la base de datos. Este enfoque contribuye a la construcción de un sistema robusto y eficaz, optimizando la información para análisis y desarrollo continuo del proyecto.",
    tags: [
      "React",
      "Redux",
      "CSS",
      "JavaScript",
      "Node.js",
      "PostgreSQL",
      "Express",
    ],
    imageUrl: ImgPokemon,
  },
  {
    title: "Rick And Morty",
    description:
      "Este proyecto básico refleja la aplicación de una fracción de los conocimientos adquiridos durante mi participación en Henry. Representa una implementación práctica de las habilidades desarrolladas durante mi tiempo en la plataforma.",
    tags: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "Node.js",
      "PostgreSQL",
    ],
    imageUrl: ImgRick,
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Redux",
  "sequelize",
  "Express",
  "PostgreSQL",
  "Framer Motion",
];
