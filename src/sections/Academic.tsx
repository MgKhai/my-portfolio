'use client';

import { SectionHeader } from "@/components/SectionHeader";
import { EducationCard } from "@/components/EducationCard";
import codelab from "../assets/images/codelab.png";
import utycc from "../assets/images/utycc.jpeg";
import beycoz from "../assets/images/beycoz.jpg";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const educationBackgrounds = [
  {
    institution: "University of Technology (Yadanabon Cyber City)",
    degree: "Computer Engineering in UTYCC",
    description:
      "Focused on computer engineering fundamentals with strong emphasis on programming principles, and the practical application of computer systems and algorithms through academic coursework and hands-on learning.",
    period: "2015 Dec – ",
    image: utycc,
    link: "https://en.wikipedia.org/wiki/University_of_Technology,_Yadanabon_Cyber_City"
  },
  {
    institution: "Code Lab",
    degree: "AZ Training at Code Lab",
    description:
      "Completed an intensive full-stack development training program covering Laravel for backend development and Vue.js for frontend interfaces, with practical experience building dynamic web applications and real-world projects.",
    period: "2024 Dec – 2025 July",
    image: codelab,
    link: "https://www.facebook.com/codelab.mm"
  },
  {
    institution: "Beycoz University",
    degree: "Software Engineering in Beycoz University",
    description:
      "Currently studying software engineering with a focus on programming concepts, software development life cycles, and building practical projects to strengthen problem-solving skills and real-world development experience.",
    period: "2024 Sep – Present",
    image: beycoz,
    link: "https://www.beykoz.edu.tr/"
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export const AcademicSection = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  // Track scroll **relative to timeline itself**
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 80%", "end 20%"],
  });

  // Smooth spring animation
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 160,
    damping: 22,
  });

  return (
    <section className="py-16 lg:py-24">
      <div className="container relative">
        <SectionHeader
          eyebrow="Academic Background"
          title="My Learning Path"
          description="Key academic experiences that shaped my technical growth"
        />

        {/* TIMELINE */}
        <div
          ref={timelineRef}
          className="relative mt-16 [--timeline-offset:8em] md:[--timeline-offset:9.5em]"
        >
          {/* Background Line */}
          <div
            className="absolute left-6 md:left-1/2 top-0 w-[2px] -translate-x-1/5 md:-translate-x-1/2 bg-white/10 rounded-full"
            style={{ height: "calc(100% - var(--timeline-offset))" }}
          />

          {/* Progress Line */}
          <motion.div
            className="absolute left-6 md:left-[calc(50%-1px)] top-0 w-[2px] origin-top rounded-full"
            style={{
              scaleY,
              height: "calc(100% - var(--timeline-offset))",
              backgroundImage:
                "linear-gradient(180deg, #10B981 30%, #34D399 70%, #10B981 100%)",
              backgroundSize: "100% 200%",
              WebkitMaskImage:
                "linear-gradient(to bottom, black 85%, transparent 100%)",
              maskImage:
                "linear-gradient(to bottom, black 85%, transparent 100%)",
            }}
          />

          {/* Timeline Items */}
          <ul className="relative z-10 flex flex-col gap-16">
            {educationBackgrounds.map((edu, index) => (
              <li
                key={edu.institution}
                className="relative flex flex-col md:flex-row items-start md:items-center"
              >
                {/* Timeline Dot */}
                <div className="absolute hidden md:block left-6 md:left-1/2 top-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500 border-2 border-white shadow-md" />

                {/* Card */}
                <motion.div
                  className={`mt-6 md:mt-0 md:w-1/2 text-left ${
                    index % 2 === 0
                      ? "md:pr-8 md:mr-auto md:text-right"
                      : "md:pl-8 md:ml-auto md:text-left"
                  }`}
                  initial="hidden"
                  whileInView="visible"
                  variants={cardVariants}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.1,
                  }}
                  viewport={{
                    once: false,
                    amount: 0.1,
                  }}
                >
                  <EducationCard {...edu} />
                </motion.div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
