import adidasTurkey from "@/assets/images/adidas_turkey.png";
import bootstrapPortfolio from "@/assets/images/portfolio_testing.png";
import pizzaManagement from "@/assets/images/pizza_order_management.png";
import Image from "next/image";
import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";

const portfolioProjects = [
  {
    title: "Pizza Order Management System",
    description:
      "A full-stack Pizza Order Management Website built using Laravel and MySQL, with a responsive HTML, CSS, Bootstrap, and JavaScript frontend. This project allows users to browse pizzas, place orders, and lets admins manage menu items and track customer orders efficiently.",
    link: "#",
    language: [
      { title: "bootstrap", icon: "/icons/bootstrap-original.svg" },
      { title: "laravel", icon: "/icons/laravel-original.svg" },
      { title: "mysql", icon: "/icons/mysql-original.svg" },
      { title: "jquery", icon: "/icons/jquery-original.svg" },

    ],
    github: "https://github.com/MgKhai/pizza-order-management-system",
    image: pizzaManagement,
  },
  {
    title: "Bootstrap Portfolio",
    description:
      "A personal portfolio website built using HTML, CSS, and Bootstrap to showcase projects, skills, and experience. Designed with a clean and responsive layout for all devices. This project serves as a practice for front-end development and Bootstrap styling.",
    link: "#",
    language: [
      { title: "html", icon: "/icons/html5-original.svg" },
      { title: "css", icon: "/icons/css3-original.svg" },
      { title: "bootstrap", icon: "/icons/bootstrap-original.svg" },
    ],
    github: "https://github.com/MgKhai/portfolio",
    image: bootstrapPortfolio,
  },
  {
    title: "Adidas Turkey",
    description:
      "This project is a basic clone of the Adidas Turkey website created for learning purposes. It focuses on building clean layouts, navigation bars, product sections, and responsive design using only HTML and CSS. No frameworks or JavaScript used.",
    link: "#",
    language: [
      { title: "html", icon: "/icons/html5-original.svg" },
      { title: "css", icon: "/icons/css3-original.svg" },
    ],
    github: "https://github.com/MgKhai/adidas-turkey",
    image: adidasTurkey,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container lg:max-w-5xl">
        <SectionHeader 
        eyebrow="Real-world Results" 
        title="Featured Projects" 
        description="See how I transformed concepts into engaging digital experiences" 
        />
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project) => (
            <Card
              key={project.title}
              className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <div className="flex flex-col gap-4 mt-4 md:mt-5">
                    <p className="flex gap-2 text-sm md:text-base text-gray-300 leading-relaxed">
                      <span>{project.description}</span>
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-6">
                    {/* Left: Language Icons */}
                    <div className="flex -space-x-2">
                      {project.language?.map((lang, index) => (
                        <div
                          key={index}
                          className="w-10 h-10 rounded-full border border-gray bg-[#0f0f1a] flex items-center justify-center"
                        >
                          <Image
                            src={lang.icon}
                            alt={lang.title}
                            width={16}
                            height={16}
                            className="w-6 h-6 object-contain"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Right: GitHub & Rocket Icons */}
                    <div className="flex items-center gap-2">
                      <a href={project.github} target="_blank">
                        <div className="w-10 h-10 rounded-full bg-[#FFFFFF] flex items-center justify-center">
                          <Image
                            src="/icons/github-original.svg"
                            alt="GitHub"
                            width={16}
                            height={16}
                            className="w-10 h-10 object-contain"
                          />
                        </div>
                      </a>
                      <a href="#">
                        <Image
                          src="/icons/rocket.svg"
                          alt="Rocket"
                          width={16}
                          height={16}
                          className="w-8 h-8"
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="rounded mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
