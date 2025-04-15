import React from "react";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgb(10,10,10)] z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out

                     ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
                   `}
    >
      <button onClick={() => setMenuOpen(false)} className="absolute top-4 right-6 text-white text-3xl focus:outline-none cursor-pointer" aria-label="Close Menu">
        &times;
      </button>

      <a
  href="#home"
  onClick={() => setMenuOpen(false)}
  className={`text-2xl font-semibold text-white my-4 transform transition-all duration-500 
        ${menuOpen ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-[-20px]"} 
        relative group
  `}
>
  Home
  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
</a>

<a
  href="#about"
  onClick={() => setMenuOpen(false)}
  className={`text-2xl font-semibold text-white my-4 transform transition-all duration-500 
        ${menuOpen ? "opacity-100 translate-y-0 delay-200" : "opacity-0 translate-y-[-20px]"} 
        relative group
  `}
>
  About
  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
</a>

<a
  href="#projects"
  onClick={() => setMenuOpen(false)}
  className={`text-2xl font-semibold text-white my-4 transform transition-all duration-500 
        ${menuOpen ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-[-20px]"} 
        relative group
  `}
>
  Projects
  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
</a>

<a
  href="#contact"
  onClick={() => setMenuOpen(false)}
  className={`text-2xl font-semibold text-white my-4 transform transition-all duration-500 
        ${menuOpen ? "opacity-100 translate-y-0 delay-400" : "opacity-0 translate-y-[-20px]"} 
        relative group
  `}
>
  Contact
  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
</a>

    </div>
  );
};
