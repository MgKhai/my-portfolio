import { SectionHeader } from "@/components/SectionHeader";
import Image from "next/image";
import { GlowIcon } from "@/components/GlowIcon";

const techIcons = [
  "/icons/html5-original.svg",
  "/icons/bootstrap-original.svg",
  "/icons/jquery-original.svg",
  "/icons/java-original.svg",
  "/icons/mysql-original.svg",
  "/icons/postman-original.svg",
  "/icons/vuejs-original.svg",
  "/icons/github-original.svg",
  "/icons/css3-original.svg",
  "/icons/python-original.svg",
  "/icons/react-original.svg",
  "/icons/laravel-original.svg",
  "/icons/javascript-original.svg",
  "/icons/tailwindcss-original.svg",
  "/icons/postgresql-original.svg",
  "/icons/php-original.svg",
];

export const ToolkitSection = () => {
  return (
    <div className="py-16 lg:py-24">
      <div className="container">
        <SectionHeader
          eyebrow="Developer Toolkit"
          title="My Core Technologies"
          description="A closer look at what drives my development and workflow daily"
        />
      </div>
      <div className="mt-5 p-5 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex gap-8 flex-none">
          {techIcons.map((icon, index) => (
            <GlowIcon key={index}>
              <Image src={icon} alt="Tech icon" width={36} height={36} />
            </GlowIcon>
          ))}
        </div>
      </div>
    </div>
  );
};
