import web from "/coding/Portfolio/Portfolio/src/assets/web.png";
import jabol from "/coding/Portfolio/Portfolio/src/assets/Jabol.png"
import snap from "/coding/Portfolio/Portfolio/src/assets/Snapclean.png";
import mind from "/coding/Portfolio/Portfolio/src/assets/mindease.png"
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
    image: snap,
    technologies: ["Figma"],
    link: "https://www.figma.com/design/6zUjcSGYReBnPx21O7Sijg/MOCKUP-SNAPCLEAN?node-id=0-1&t=AevT9NFHvP8fCMiI-1",
  },
  {
    title: "MindEase",
    role: "Fullstack Android",
    description: "A mobile application that is useful for monitoring and helping Telkom students related to mental health.",
    image: mind,
    technologies: ["Kotlin", "Firebase"],
    link: "https://github.com/MindEasee/MindEasee.git",
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
    role: "Fullstack Website",
    description: "A simple notes app.",
    image: notes,
    technologies: ["MongoDB", "Express", "React", "Node"],
    link: "#",
  },
];
