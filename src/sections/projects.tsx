// import portfolioPage from '@/assets/images/portfolio_testing.png';
// import pizzaOrderPage from '@/assets/images/pizza_order_management.png';
import adidasTurkey from '@/assets/images/adidas_turkey.png';
import Image from 'next/image';

const portfolioProjects = [
  {
    company: 'Acme Corp',
    title: 'Adidas Turkey',
    year: '2022',
    results: [
      { title: "Enhanced user experience by 300"},
      { title: "Enhanced user experience by 300"},
      { title: "Enhanced user experience by 300"},
    ],
    link: '#',
    image: adidasTurkey,
  }
];

export const ProjectsSection = () => {
  return <div>
    <div className='container'>
      <p>Real-world Results</p>
      <h2>Featured Projects</h2>
      <p>See how I transformed concepts into engaging digital experiences</p>
      <div>
        {portfolioProjects.map((project) => (
          <div key={project.title}>
            <div>
              <span>{project.company}</span>
              <span>{project.year}</span>
            </div>
            <h3>{project.title}</h3>
            <ul>
              {project.results.map((result,index) => (
                <li key={index}>{result.title}</li>
              ))}
            </ul>
            <a href={project.link}>
              <button>View Live Site</button>
            </a>
            <Image src={project.image} alt={project.title} />
          </div>
        ))}
      </div>
    </div>
  </div>;
}