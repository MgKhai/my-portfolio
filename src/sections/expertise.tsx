import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SectionHeader } from "@/components/SectionHeader";
import { faCode,faTvAlt,faCloud,faGaugeHigh,faBug } from "@fortawesome/free-solid-svg-icons";
import { faGithubAlt,faKeycdn } from "@fortawesome/free-brands-svg-icons";
import { Card } from "@/components/Card";


const expertises = [
  {
    name: "Back-End",
    text: "Builds reliable and efficient server-side applications with clean architecture, secure API design, and organized data flow. Focuses on maintainable code and strong logic handling using modern backend frameworks.",
    avatar: faCode,
  },
  {
    name: "Performance",
    text: "Improves application speed through efficient database queries, reduced processing time, and optimized API responses. Ensures smooth performance across different devices and environments.",
    avatar: faGaugeHigh,
  },
  {
    name: "Version Control",
    text: "Uses Git for clean project organization, structured branching, and smooth collaboration. Manages commits, reviews code, and maintains version history to ensure stable development.",
    avatar: faGithubAlt,
  },
  {
    name: "Testing & Debugging",
    text: "Identifies errors, writes test cases, and applies debugging tools to ensure stability and correct application behavior. Focuses on preventing issues before deployment.",
    avatar: faBug,
  },
  {
    name: "Encryption & Security",
    text: "Implements secure authentication, encrypted data handling, and protection best practices. Ensures user information remains safe and system vulnerabilities are minimized.",
    avatar: faKeycdn,
  },
  {
    name: "Responsive Design",
    text: "Creates layouts that adapt to all screen sizes with clean, accessible, and mobile-first design. Focuses on usability and visual consistency.",
    avatar: faTvAlt,
  },
  {
    name: "Database",
    text: "Designs and maintains efficient databases with clean structure, fast queries, and reliable data storage. Supports stable backend operations through proper indexing and optimization.",
    avatar: faCloud,
  },
];
export const ExpertiseSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="My Expertise"
          title="What I Bring to The Table"
          description="A quick overview of my core development skills and strengths"
        />
        <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div className="flex gap-8 flex-none">
          {expertises.map((expertise) => (
              <Card key={expertise.name} className="max-w-xs md:p-8 md:max-w-md">
                <div className="flex gap-4 items-center ">
                  <div className="size-14 bg-gray-700 inline-flex items-center justify-center rounded-full flex-shrink-0">
                    <FontAwesomeIcon icon={expertise.avatar} className="size-6 max-h-full" />
                  </div>
                  <div>
                    <div className="text-lg font-bold">{expertise.name}</div>
                  </div>
                </div>
                <p className="mt-4 md:mt-6 text-sm text-gray-300 md:text-base">{expertise.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
