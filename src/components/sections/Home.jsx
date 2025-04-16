import React from "react";
import { Github, Linkedin, Instagram } from "lucide-react";
import wajah from "/coding/Portfolio/Portfolio/src/assets/WAJAH.png";

const Home = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative mt-5">
      <div className="text-center z-10 px-4">
        <h1 className="text-3xl md:text-6xl font-bold bg-gradient-to-r mb-6 from-blue-500 via-purple-500 to-cyan-400 bg-clip-text text-transparent leading-tight animate-gradient">
          <span className="text-white">Hi, I'm</span> Anugrah Panji Pradipa
        </h1>

        <div className="flex items-center justify-center">
          <img src={wajah} alt="Profile" className="w-32 h-32 md:w-48 md:h-48 rounded-full object-cover border-2 border-blue-500" />
        </div>

        <p className="text-gray-400 text-lg mb-4 max-w-lg mx-auto pt-6">
        Hi! I’m someone who’s genuinely passionate about design and front-end development. I love bringing ideas to life through clean, user-friendly interfaces and smooth interactions. For me, it's not just about making things look good—it’s about making them feel right for the user.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 text-blue-500 text-2xl mb-6">
          <a href="https://github.com/AnugrahPanjiPradipa" target="_blank" className="hover:text-blue-700 transition">
            <Github size={30} />
          </a>
          <a href="https://www.linkedin.com/in/anugrah-panji-pradipa/" target="_blank" className="hover:text-blue-700 transition">
            <Linkedin size={30} />
          </a>
          <a href="https://www.instagram.com/apidarp_/" target="_blank" className="hover:text-blue-700 transition">
            <Instagram size={30} />
          </a>
        </div>

        <div className="flex justify-center space-x-4">
          <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)]">
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
