'use client';

import { SectionHeader } from "@/components/SectionHeader";
import { EducationCard } from "@/components/EducationCard";
import codelab from "../assets/images/codelab.png";
import utycc from "../assets/images/utycc.jpeg";
import beycoz from "../assets/images/beycoz.jpg";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const educationBackgrounds = [
  {
    institution: "University of Technology (Yadanabon Cyber City)",
    degree: "Computer Engineering in UTYCC",
    description:
      "Focused on computer engineering fundamentals with strong emphasis on programming principles, and the practical application of computer systems and algorithms through academic coursework and hands-on learning.",
    period: "2015 Dec – ",
    image: utycc,
    link: "#"
  },
  {
    institution: "Code Lab",
    degree: "AZ Training at Code Lab",
    description:
      "Completed an intensive full-stack development training program covering Laravel for backend development and Vue.js for frontend interfaces, with practical experience building dynamic web applications and real-world projects.",
    period: "2024 Dec – 2025 July",
    image: codelab,
    link: "#"
  },
  {
    institution: "Beycoz University",
    degree: "Software Engineering in Beycoz University",
    description:
      "Currently studying software engineering with a focus on programming concepts, software development life cycles, and building practical projects to strengthen problem-solving skills and real-world development experience.",
    period: "2024 Sep – Present",
    image: beycoz,
    link: "#"
  },
];

export const AcademicSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth vertical growth
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  });

  // Shiny gradient movement
  const gradientPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["0% 0%", "0% 100%"]
  );

  return (
    <section className="py-16 lg:py-24">
      <div className="container relative" ref={containerRef}>
        <SectionHeader
          eyebrow="Academic Background"
          title="My Learning Path"
          description="Key academic experiences that shaped my technical growth"
        />

        {/* TIMELINE */}
        <div className="relative mt-16">

          {/* Background Line */}
          <div className="absolute left-6 md:left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-white/10 rounded-full" />

          {/* Progress Line */}
          <motion.div
            className="absolute left-6 md:left-[calc(50%-1px)] transform md:-translate-x-1/2 top-0 w-[2px] origin-top h-full rounded-full shadow-[0_0_12px_rgba(34,211,238,0.7)]"
            style={{
              scaleY,
              backgroundImage:
                "linear-gradient(180deg, #00644f, #82c8e5, #00644f)",
              backgroundSize: "100% 200%",
              backgroundPosition: gradientPosition,
            }}
          />

          {/* ITEMS */}
          <ul className="relative z-10 flex flex-col gap-16">
            {educationBackgrounds.map((edu, index) => (
              <li
                key={edu.institution}
                className="relative flex flex-col md:flex-row items-start md:items-center"
              >
                {/* DOT */}
                <div className="absolute left-6 md:left-1/2 top-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500 border-2 border-white shadow-md" />

                {/* CARD */}
                <div
                      className={`mt-6 md:mt-0 md:w-1/2 text-left ${ 
                          index % 2 === 0
                              ? "md:pr-8 md:mr-auto md:text-right" 
                              : "md:pl-8 md:ml-auto md:text-left"  
                      }`}
                  >
                  <EducationCard {...edu} />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
