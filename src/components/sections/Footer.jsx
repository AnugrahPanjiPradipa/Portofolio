import { Github, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm">&copy; 2025 Anugrah Panji Pradipa. All rights reserved.</p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="https://github.com/AnugrahPanjiPradipa" className="hover:text-gray-400">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/anugrah-panji-pradipa/" className="hover:text-gray-400">
            <Linkedin size={24} />
          </a>
          <a href="https://www.instagram.com/apidarp_/" className="hover:text-gray-400">
            <Instagram size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};
