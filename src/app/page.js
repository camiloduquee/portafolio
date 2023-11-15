import About from "@/components/About"
import { Intro } from "@/components/Intro"
import SectionDivider from "@/components/section-divider"
import Projects from "@/components/projects"
import Skills from "@/components/Skills"
export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
    </main>
  )
}
