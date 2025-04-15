import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "./Project";

const ProjectCard = ({ title, role, description, image, technologies, link, journal }) => {
  return (
    <motion.div
      className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: "some" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
    >
      <h3 className="text-xl font-bold mb-2">
        {title} <span className="text-sm text-gray-400">({role})</span>
      </h3>
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-4" />
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center">
      <div className="flex flex-row gap-10 mt-4">
  <a
    href={link}
    target="_blank"
    className="text-blue-400 hover:text-blue-300 transition-colors"
  >
    View Project →
  </a>
  {journal && (
    <a
      href={journal}
      target="_blank"
      className="text-blue-400 hover:text-blue-300 transition-colors"
    >
      View Journal 📄
    </a>
  )}
</div>

      </div>
    </motion.div>
  );
};

export const Projects = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.1, once: false });

  return (
    <section ref={sectionRef} id="projects" className="min-h-screen flex items-center justify-center py-20">
      <motion.div className="max-w-5xl mx-auto px-4" initial={{ opacity: 0, y: 50 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.1, ease: "easeInOut" }}>
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};
