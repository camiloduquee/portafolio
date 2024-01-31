import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { GrCertificate } from "react-icons/gr";
import { LuGraduationCap } from "react-icons/lu";
import ImgRick from "../public/Background-Rick.png";
import ImgPokemon from "../public/Background-pokemon.png";
import ImgTCG from "../public/Background-TCG.png";

export const linkGitHub = "https://github.com/camiloduquee";
export const linkLinkedin = "https://www.linkedin.com/in/h%C3%A9ctor-g%C3%B3mez-0a1075287/";

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
    location: "Bogotá - Colombia",
    description: "Licenciatura en electrónica ",
    icon: React.createElement(LuGraduationCap),
    date: "2018 - 2022",
  },
  {
    title: "Henry Bootcamp",
    location: "Bogatá - Colombia",
    description:
      "Obtuve mi Certificado después de dedicar 6 meses a un extenso estudio, acumulando más de 800 horas de dedicación. Durante este período, adquirí habilidades en HTML, CSS, JavaScript, React, Node.js, Express y bases de datos.",
    icon: React.createElement(GrCertificate),
    date: "2022 - 2023",
  },
  {
    title: "Proyecto GOD (Guardian of decks)",
    location: "Bogatá - Colombia",
    description:
      "Participé activamente como miembro clave de un equipo de 6 desarrolladores en la creación de un E-commerce especializado en cartas coleccionables. Mi contribución se centró en la implementación de un panel de control, diseñado para gestionar de manera eficiente el inventario, facilitando las operaciones de añadir, modificar, supender y eliminar productos. Este panel proporciona una visión detallada del rendimiento, ofreciendo estadísticas precisas, análisis de órdenes de compra y administración de usuarios. Además, colaboré en la optimización de la experiencia del usuario y desempeñé un papel crucial en el diseño de la plantilla del sitio utilizando Figma, así como en la conceptualización y creación del logotipo de la plataforma.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
];

export const projectsData = [
  {
    title: "Tienda Virtual (GOD)",
    description:
      "E-commerce de venta de cartas coleccionables. Integrado con el sistema de pagos de Mercado Libre, presenta un carrito de compras con diversos métodos de búsqueda y filtrado. Destaca por un panel de control que administra de manera ágil el inventario, permitiendo operaciones de añadir, modificar y eliminar productos. Proporciona estadísticas, análisis de órdenes de compra y gestión de usuarios. Cuenta con autenticación por correo electrónico para garantizar la seguridad y confiabilidad en el proceso.",
    tags: ["React", "NextJS", "Mongoose", "Tailwind", "Redux", "Scrum", "GitFlow"],
    imageUrl: ImgTCG,
    url:"https://final-project-client-lime.vercel.app/"
  },
  {
    title: "Pokédex",
    description:
      "La API REST que desarrollé, es una plataforma integral basada en la PokeAPI, donde los usuarios pueden acceder y filtrar información detallada sobre Pokémon. Ofrece métodos de filtrado y búsqueda para una experiencia personalizada. Destaca por una sección interactiva que permite agregar nuevos Pokémon a través de un formulario dinámico. Cada vista individual de Pokémon se adapta dinámicamente según el tipo de pokémon.",
    tags: [
      "React",
      "Redux",
      "CSS",
      "JavaScript",
      "NodeJS",
      "PostgreSQL",
      "Express",
    ],
    imageUrl: ImgPokemon,
    url:"https://pi-pokemon-main-orcin.vercel.app/"
  },
];

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "NextJS",
  "NodeJS",
  "Git",
  "Tailwind",
  "Redux",
  "Sequelize",
  "Express",
  "PostgreSQL",
  "Mongoose",
  "Framer Motion",
  "Adobe Ilustrator",
  "Adobe After Effects"
];
