"use client";

import React from "react";
import SectionHeading from "components/SectionHeading";
import { projectsData } from "lib/data";
import Project from "components/Project";
import { useSectionInView } from "lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projectos", 0.5);
  return (
    <section ref={ref} id="projectos" className="scroll-mt-28 mb-28">
      <>
        <SectionHeading>Mis proyectos</SectionHeading>
        {projectsData.map((project, index) => {
          return (
            <React.Fragment key={index}>
              <Project {...project} />
            </React.Fragment>
          );
        })}
      </>
    </section>
  );
}
