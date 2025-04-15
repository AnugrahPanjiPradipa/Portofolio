import web from "/coding/Portfolio/Portfolio/src/assets/web.png";
import jabol from "/coding/Portfolio/Portfolio/src/assets/Jabol.png"
import notes from "/coding/Portfolio/Portfolio/src/assets/Notesapp.png";

export const projects = [
  {
    title: "Jabol (Jalanan Bolong)",
    role: "Front-End",
    description: "A website as a means of reporting damaged roads around the Telkom University.",
    image: jabol,
    technologies: ["HTML", "CSS", "Bootstrap"],
    link: "https://www.figma.com/design/AzkqQjiVNaffKtZzXfcCZd/UI-Jabol--Copy-?node-id=745-229&t=Fkt6lPqTNX58J6ct-1#",
    journal: "https://publikasi.mercubuana.ac.id/index.php/fifo/article/view/26525", 
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
