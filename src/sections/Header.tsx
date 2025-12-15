"use client";
import React, { useState, useEffect } from 'react';

export const Header = () => {
  
  const [isVisible, setIsVisible] = useState(true); 
  const [lastScrollY, setLastScrollY] = useState(0);

  
  const handleScroll = () => {  
    const currentScrollY = window.scrollY;

    
    if (currentScrollY > lastScrollY) {
      if (currentScrollY > 50) {
        setIsVisible(false);
      }
    } else {
      // Scrolling UP
      setIsVisible(true);
    }


    setLastScrollY(currentScrollY);
  };

  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

   
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  
  const headerClass = isVisible 
    ? 'translate-y-0 opacity-100' 
    : '-translate-y-20 opacity-0'; 


  return (
    <div
      className={`
        flex justify-center items-center fixed top-3 z-50 left-1/2 -translate-x-1/2
        transition-all duration-300 ease-in-out // For smooth animation
        ${headerClass} // Apply the visibility class
      `}
    >
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#home" className="nav-item ">Home</a>
        <a href="#about"className="nav-item ">About</a>
        <a href="#projects"className="nav-item ">Projects</a>
        <a href="#contact"className="nav-item">Contact</a>
      </nav>
    </div>
  )
}