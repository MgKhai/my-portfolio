// import portfolioPage from '@/assets/images/portfolio_testing.png';
// import pizzaOrderPage from '@/assets/images/pizza_order_management.png';
import adidasTurkey from "@/assets/images/adidas_turkey.png";
import Image from "next/image";
import backgroundimage from "../assets/images/skin.jpg";

const portfolioProjects = [
  {
    company: "Acme Corp",
    title: "Adidas Turkey",
    year: "2022",
    results: [
      { title: "Enhanced user experience by 300" },
      { title: "Enhanced user experience by 300" },
      { title: "Enhanced user experience by 300" },
    ],
    link: "#",
    image: adidasTurkey,
  },
  {
    company: "Acme Corp",
    title: "Adidas ",
    year: "2022",
    results: [
      { title: "Enhanced user experience by 300" },
      { title: "Enhanced user experience by 300" },
      { title: "Enhanced user experience by 300" },
    ],
    link: "#",
    image: adidasTurkey,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="pb-16 lg:py-24">
      <div className="container lg:max-w-5xl">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-center text-transparent bg-clip-text">
            Real-world Results
          </p>
        </div>
        <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
          Featured Projects
        </h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
          See how I transformed concepts into engaging digital experiences
        </p>
        <div className="flex flex-col mt-10 md:mt-20 gap-20">
          {portfolioProjects.map((project) => (
            <div
              key={project.title}
              className='bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[""] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 lg:pt-16 lg:px-20 px-8 pt-8 md:pt-12 md:px-10 after:pointer-events-none'
            >
              <div
                className="absolute inset-0 -z-10 opacity-5"
                style={{
                  backgroundImage: `url(${backgroundimage.src})`,
                }}
              ></div>

              <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                <div className="lg:pb-16">
                  <div className="bg-gradient-to-r from from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>&bull;</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl mt-2 md:mt-5 md:text-4xl">
                    {project.title}
                  </h3>
                  <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                  <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                    {project.results.map((result, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm md:text-base text-white/50"
                      >
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <div>
                    <a href={project.link}>
                      <button className="bg-white text-gray-950 h-12 w-full md:w-auto px-6 rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8">
                        Visit Live Site
                      </button>
                    </a>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
