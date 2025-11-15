import Spline from '@splinetool/react-spline';
import { useEffect, useState } from "react";

export const Hero = () => {
  const texts = ["I'm Mg Khai", "Full Stack Developer"];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setFade(true);
      }, 600);
    }, 4000);
    return () => clearInterval(interval);
  });
  return (
    <main className='flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-4rem)]'>
      <div data-aos="fade-right"
         data-aos-offset="300"
         data-aos-easing="ease-in-sine" className='max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0'>
        
        <div className="relative w-[48%] sm:w-48 h-10 
          bg-[length:200%_auto] animate-gradient-move 
          bg-gradient-to-r from-[#656565] via-[#7f42a7] via-[#6600c5] via-[#e99b63] to-[#656565]
          backdrop-blur-md dark:bg-black/40 
          shadow-[0_0_15px_rgba(255,255,255,0.3)] rounded-full overflow-hidden">
          <div className="text-xs absolute inset-[1px] bg-black rounded-full flex items-center justify-center gap-1 text-white tracking-[1px]">
          <div
              className={` transition-all duration-500 text-gray-300 drop-shadow-md
                ${fade ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
              `}
            >
              {texts[index]}
            </div>
          </div>
        </div>
      
        <h1 className="bg-gradient-to-r from-[#f5f5f5dd] via-[#bcbcbcdd] to-[#f5f5f5dd]
                bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(255,255,255,0.5)]
                text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider my-8">
          In the world of development, possibilities are <br/>limitless.
        </h1>

        <p className="
          text-sm sm:text-lg tracking-wider 
          text-transparent bg-clip-text 
          bg-gradient-to-r from-gray-300 via-[#ff9d5ccc] to-gray-300
          bg-[length:200%_auto] animate-liquid-reflect
          max-w-[25rem] lg:max-w-[30rem]
        ">
          I specialize in building dynamic, high-quality applications that blend performance with beautiful user experience. My journey is driven by curiosity, creativity, and the mission to turn complex problems into elegant solutions.
        </p>


        {/* Buttons */}
        <div className="flex gap-4 mt-12">
          <a href="" className="border border-[#2a2a2a] py-2 sm:py-3 px-4 sm:px-5 rounded-full sm:text-lg text-sm tracking-wider transition-all duration-300 hover:bg-[#1a1a1a]">Documentation <i class='bx bx-link-external'></i></a>
          <a href="" className="border border-[#2a2a2a] py-2 sm:py-3 px-8 sm:px-10 rounded-full sm:text-lg text-sm tracking-wider transition-all duration-300 hover:bg-[#1a1a1a] bg-gray-300 text-black hover:text-white">GetStarted <i class='bx bx-link-external'></i></a>
        </div>
    </div>

      {/* 3D robot */}
      <Spline 
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="300"
        data-aos-offset="0" 
        data-aos-duration='3000' 
        className="absolute 
                  top-[-30%] lg:top-[-7%] 
                   bottom-[-10%] sm:bottom-[-5%] lg:bottom-0 
                   lg:left-[25%] 
                   h-full" 
        scene="https://prod.spline.design/RrTeFC-FNM1jIg-G/scene.splinecode" 
      />
    </main>
  )
}
