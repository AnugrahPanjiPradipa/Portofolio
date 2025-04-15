import { motion } from "framer-motion";
import { skills } from "./Skill";
import { education } from "./Educations";
import { experience } from "./Experiences";
import { SkillSection } from "./SkillSection";

export const About = () => {
  return (
    <motion.section id="about" className="min-h-screen flex items-center justify-center py-20" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ amount: "some" }}>
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ amount: "some" }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.1 }}
          viewport={{ amount: "some" }}
        >
          <p className="text-gray-300 mb-6">Passionate developer with expertise in building scalable web applications and creating innovative solutions.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, techs]) => (
              <SkillSection key={category} title={category.charAt(0).toUpperCase() + category.slice(1)} skills={techs} />
            ))}
          </div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <motion.div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all" initial={{ opacity: 0, x: -70 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.1 }} viewport={{ amount: "some" }}>
            <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {education.map((edu, index) => (
                <li key={index}>
                  <strong>{edu.degree}</strong> {edu.school && ` - ${edu.school}`} {edu.years && `(${edu.years})`}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all" initial={{ opacity: 0, x: 70 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.1 }} viewport={{ amount: "some" }}>
            <h3 className="text-xl font-bold mb-4">💼 Work Experience</h3>
            <div className="space-y-4 text-gray-300">
              {experience.map((exp, index) => (
                <div key={index}>
                  <h4 className="font-semibold">
                    {exp.position} ({exp.years})
                  </h4>
                  <p>{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};
