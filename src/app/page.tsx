import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero"
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { ExpertiseSection } from "@/sections/expertise";
import { ToolkitSection } from "@/sections/Toolkit";
export default function Home () {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <ExpertiseSection />
      <ToolkitSection />
    </div>
  )
}

