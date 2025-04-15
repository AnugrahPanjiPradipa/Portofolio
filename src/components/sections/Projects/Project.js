import web from "/coding/Portfolio/my-app/src/assets/web.png";
import notes from "/coding/Portfolio/my-app/src/assets/Notesapp.png";

export const projects = [
  {
    title: "Jabol (Jalanan Bolong)",
    role: "Front-End",
    description: "A website as a means of reporting damaged roads around the Telkom University.",
    image: web,
    technologies: ["HTML", "CSS", "Bootstrap"],
    link: "#",
  },
  {
    title: "SnapClean",
    role: "UI/UX Designer",
    description: "A mobile application that is useful for reporting dirty neighborhoods to the authorities.",
    image: web,
    technologies: ["Figma"],
    link: "#",
  },
  {
    title: "MindEase",
    role: "Fullstack Android",
    description: "A mobile application that is useful for monitoring and helping Telkom students related to mental health.",
    image: web,
    technologies: ["Kotlin", "Firebase"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    role: "Fullstack Website",
    description: "My own portfolio website.",
    image: web,
    technologies: ["React", "Tailwind", "Motion", "Email.js"],
    link: "#",
  },
  {
    title: "Notes",
    role: "FUllstack Website",
    description: "A simple notes app.",
    image: notes,
    technologies: ["MongoDB", "Express", "React", "Node"],
    link: "#",
  },
];
