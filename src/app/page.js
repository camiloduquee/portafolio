import About from "../components/About.jsx"
import { Intro } from "../components/Intro.jsx"
import SectionDivider from "../components/section-divider"
import Projects from "../components/Projects.jsx"
import Skills from "../components/Skills.jsx"
import Experience from "@/components/Experience.jsx"
import Contact from "@/components/Contact.jsx"
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
    </main>
  )
}
