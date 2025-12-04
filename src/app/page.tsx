import { Header } from "@/sections/Header";
import { HeroSection } from "@/sections/Hero"
import { ProjectsSection } from "@/sections/Projects";
import { TapeSection } from "@/sections/Tape";
import { TestimonialSection } from "@/sections/Testimonials";
export default function Home () {
  return (
    <div>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <TapeSection />
      <TestimonialSection />
    </div>
  )
}

