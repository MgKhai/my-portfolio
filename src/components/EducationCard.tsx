"use client";

import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { Calendar } from "lucide-react";
import backgroundimage from "../assets/images/pixeldot.jpeg";

type EducationCardProps = {
  institution: string;
  degree: string;
  description: string;
  period: string;
  link?: string;
  image: StaticImageData;
};

export const EducationCard = ({
  institution,
  degree,
  description,
  period,
  link,
  image,
}: EducationCardProps) => {
  return (
    <div className="rounded-xl relative border border-white/10 bg-white/5 backdrop-blur-md p-5 hover:border-white/20 ">
      <div
        className="absolute rounded-xl inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${backgroundimage.src})`,
        }}
      />
      <div className="flex items-center gap-4">
        {/* Small Image */}
        <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full border border-white/20 bg-white/10">
          <Image src={image} alt={institution} fill className="object-cover" />
        </div>

        {/* Content */}
        <div className="flex-1">
          <h3 className="mt-1 md:text-lg text-base font-bold text-white">{degree}</h3>
        </div>
      </div>
      <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
      <p className="mt-2 md:text-lg text-base text-gray-300 leading-relaxed">
        {description}
      </p>

      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <Calendar size={18} />
          <span>{period}</span>
        </div>

        {link && (
          <Link
            href={link}
            target="_blank"
            className="text-sm text-sky-600 hover:text-sky-300 transition"
          >
            Visit →
          </Link>
        )}
      </div>
    </div>
  );
};
