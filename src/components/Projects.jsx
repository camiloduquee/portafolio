import React from "react";
import SectionHeading from "./SectionHeading";
import { projectsData } from "@/lib/data";
import Project from "./Project";

export default function Projects() {
  return (
    <section>
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
