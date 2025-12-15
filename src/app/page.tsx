import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero"
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { ExpertiseSection } from "@/sections/Expertise";
import { ToolkitSection } from "@/sections/Toolkit";
import { AcademicSection } from "@/sections/Academic";
import { ContactSection } from "@/sections/Contact"

export default function Home () {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <ExpertiseSection />
      <ToolkitSection />
      <AcademicSection />
      <ContactSection />
    </div>
  )
}

