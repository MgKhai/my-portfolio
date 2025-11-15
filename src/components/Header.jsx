const Header = () => {
  // simple functio to toggle the mobile menu
  // const toggleMobileMenu = () => {
  //   const mobileMenu = document.getElementById('mobileMenu');

  //   if(mobileMenu.classList.contains('hidden')){
  //     mobileMenu.classList.remove('hidden');
  //   }else{
  //     mobileMenu.classList.add('hidden');
  //   }
  // }
  return (
    <header className="flex justify-center items-center py-4 px-4 lg:px-20">

      {/* Desktop Navigation */}
      {/* <nav className=" md:flex items-center gap-12 text-sm">
        <a data-aos="fade-down"
           data-aos-easing="linear"
           data-aos-duration="1000" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#"> 
          Home
        </a>

        <a data-aos="fade-down"
           data-aos-easing="linear"
           data-aos-duration="1500" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#"> 
          About
        </a>

        <a data-aos="fade-down"
           data-aos-easing="linear"
           data-aos-duration="2000" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#"> 
          Projects
        </a>

        <a data-aos="fade-down"
           data-aos-easing="linear"
           data-aos-duration="2500" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#"> 
          Experience
        </a>

        <a data-aos="fade-down"
           data-aos-easing="linear"
           data-aos-duration="3000" className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#"> 
          Contact
        </a>
      </nav> */}
      <div className="hidden flex font-sans text-sm max-w-fit fixed top-10 inset-x-0 mx-auto 
      border border-white/10 rounded-full backdrop-blur-md dark:bg-black/60 
      shadow-[0_2px_8px_rgba(0,0,0,0.15)] z-[5000] px-10 py-4 items-center justify-center 
      space-x-6 transition-all duration-300">
      
        <a href="#home" className="text-sm relative text-neutral-700 dark:text-neutral-50 
        hover:text-[#e99b63] transition-colors duration-300">
          <span className="sm:block">Home</span>
        </a>

        <a href="#about" className="text-sm relative text-neutral-700 dark:text-neutral-50 
        hover:text-[#e99b63] transition-colors duration-300">
          <span className="sm:block">About</span>
        </a>

        <a href="#projects" className="text-sm relative text-neutral-700 dark:text-neutral-50 
        hover:text-[#e99b63] transition-colors duration-300">
          <span className="sm:block">Projects</span>
        </a>

        <a href="#experience" className="text-sm relative text-neutral-700 dark:text-neutral-50 
        hover:text-[#e99b63] transition-colors duration-300">
          <span className="sm:block">Experience</span>
        </a>

        <a href="#contact" className="text-sm relative text-neutral-700 dark:text-neutral-50 
        hover:text-[#e99b63] transition-colors duration-300">
          <span className="sm:block">Contact</span>
        </a>
      </div>

      {/* Mobile menu button - visible only on Mobile
      <button onClick={toggleMobileMenu}  className="md:hidden text-3xl p-2 z-50">
        <i class="bx bx-menu"></i>
      </button> */}

      {/* Mobile menu - Hidden by default */}
      <div id="mobileMenu" className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40 bg-black bg-opacity-70 backdrop-blur- md">
        <nav className="flex flex-col gap-6 items-center">
        <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#"> 
            Home
          </a>

          <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#"> 
            About
          </a>

          <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#"> 
            Projects
          </a>

          <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#"> 
            Experience
          </a>

          <a className="text-base tracking-wider transition-colors hover:text-gray-300 z-50" href="#"> 
            Contact
          </a>
        </nav>
      </div>

    </header>
  )
}

export default Header