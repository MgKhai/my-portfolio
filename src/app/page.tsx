import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero"
import { ProjectsSection } from "@/sections/projects";
import { TapeSection } from "@/sections/Tape";
import { ExpertiseSection } from "@/sections/expertise";
import { ToolkitSection } from "@/sections/Toolkit";
import { AcademicSection } from "@/sections/Academic";
import { ContactSection } from "@/sections/Contact";
import { FooterSection } from "@/sections/Footer";

export default function Home () {
  return (
    <div>
      <Header />
      <HeroSection />
      <ExpertiseSection />
      <ToolkitSection />
      <TapeSection />
      <ProjectsSection />
      <AcademicSection />
      <ContactSection />
      <FooterSection />
    </div>
  )
}

