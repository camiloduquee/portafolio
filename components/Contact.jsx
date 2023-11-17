"use client";

import React from "react";
import SectionHeading from "components/SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "lib/hooks";
import sendEmail from "lib/actions";
import  toast  from "react-hot-toast";
import SubmitBtn from "components/Buton-Submit";

export default function Contact() {
  const { ref } = useSectionInView("Contacto", 0.5);
 
  return (
    <motion.section
      ref={ref}
      id="contacto"
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contáctame</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        "Conéctate conmigo a través del formulario o por correo electrónico{" "}
        <a className="underline" href="mailto:hectorg.devp@gmail.com">
          hectorg.devp@gmail.com
        </a>{" "}
        para explorar oportunidades de desarrollo y proyectos innovadores. Estoy
        listo para colaborar y construir juntos."
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          await sendEmail(formData);
          const { data, error } = await sendEmail(formData);
          
          if(data.error)
          {
            toast.error(data.error.message);
            return;
          }
          toast.success("Se envio el formulario")
        }}
      >
        <input
          name="email"
          className="h-14 rounded-lg border border-black/10 px-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          type="email"
          placeholder="Correo electrónico"
          required
          maxLength={50}
        />
        <textarea
          name="message"
          className="h-52 my-3 rounded-lg border-black/10  p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Mensaje"
          required
          maxLength={5000}
        ></textarea>
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
