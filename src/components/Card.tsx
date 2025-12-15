import { twMerge } from "tailwind-merge";
import backgroundimage from "../assets/images/pixeldot.jpeg";
import { ComponentPropsWithoutRef } from "react";

type CardProps = ComponentPropsWithoutRef<"div">;


export const Card = ({ className, children, ...props }: CardProps) => {
  return (
    <div
      className={twMerge(
        'bg-gray-800 rounded-3xl relative z-0 overflow-hidden after:z-10 after:content-[""] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 after:pointer-events-none p-6',
        className
      )}
      {...props}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${backgroundimage.src})`,
        }}
      />
      {children}
    </div>
  );
};
