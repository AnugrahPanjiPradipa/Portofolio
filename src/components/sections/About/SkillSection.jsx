import { motion } from "framer-motion";

export const SkillSection = ({ title, skills }) => (
  <motion.div className="p-6 hover:-translate-y-1 transition-all" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.1 }} viewport={{ amount: "some" }}>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {skills.map((tech, key) => (
        <span key={key} className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);
