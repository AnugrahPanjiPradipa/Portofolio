import jabol from '/coding/Fix/Portfolio/src/assets/Jabol.png';
import snap from '/coding/Fix/Portfolio/src/assets/Snapclean.png';
import mind from '/coding/Fix/Portfolio/src/assets/mindease.png';
import porto from '/coding/Fix/Portfolio/src/assets/Porto.png';
import notes from '/coding/Fix/Portfolio/src/assets/Notesapp.png';
import pengeluaran from '/coding/Fix/Portfolio/src/assets/Pengeluaran.png';
import dashboard from '/coding/Fix/Portfolio/src/assets/dashboard.png';
import film from '/coding/Fix/Portfolio/src/assets/film.png';

export const projects = [
  {
    title: 'Jabol (Jalanan Bolong)',
    role: 'Front-End',
    description: 'A website as a means of reporting damaged roads around the Telkom University.',
    image: jabol,
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    link: 'https://www.figma.com/design/AzkqQjiVNaffKtZzXfcCZd/UI-Jabol--Copy-?node-id=745-229&t=Fkt6lPqTNX58J6ct-1#',
    journal: 'https://publikasi.mercubuana.ac.id/index.php/fifo/article/view/26525',
  },
  {
    title: 'SnapClean',
    role: 'UI/UX Designer',
    description: 'A mobile application that is useful for reporting dirty neighborhoods to the authorities.',
    image: snap,
    technologies: ['Figma'],
    link: 'https://www.figma.com/design/6zUjcSGYReBnPx21O7Sijg/MOCKUP-SNAPCLEAN?node-id=0-1&t=AevT9NFHvP8fCMiI-1',
  },
  {
    title: 'MindEase',
    role: 'Fullstack Android',
    description: 'A mobile application that is useful for monitoring and helping Telkom students related to mental health.',
    image: mind,
    technologies: ['Kotlin', 'Firebase'],
    link: 'https://github.com/MindEasee/MindEasee.git',
  },
  {
    title: 'Portfolio Website',
    role: 'Fullstack',
    description: 'My own portfolio website.',
    image: porto,
    technologies: ['React', 'Tailwind', 'Motion', 'Email.js'],
    link: 'https://panjiporto.netlify.app/',
  },
  {
    title: 'Notes',
    role: 'Frontend',
    description: 'A simple notes app.',
    image: notes,
    technologies: ['React'],
    link: 'https://reactnotesweb.netlify.app/',
  },
  {
    title: 'Catatan Pengeluaran',
    role: 'Frontend',
    description: 'Simple expense record application for personal use.',
    image: pengeluaran,
    technologies: ['React', 'Tailwind', 'Chart.js'],
    link: 'https://anugrahpanjipradipa.github.io/catatanPengeluaran/',
  },
  {
    title: 'Personal Dashboard',
    role: 'Frontend',
    description: 'A personalized dashboard application built with React, Vite, and Tailwind CSS, featuring local weather (OpenWeatherMap API), daily quotes (Quotable API), a to-do list, an animated clock, and quick navigation links.',
    image: dashboard,
    technologies: ['React', 'Tailwind', 'OpenWeatherMap API', 'Quotable API'],
    link: 'https://desktop-dashboards.netlify.app/',
  },
  {
    title: 'Personal Dashboard',
    role: 'Frontend',
    description: 'This is a Movies Rating web application built with React and Vite. It allows users to search and browse films by fetching data from The Movie Database (TMDB) API. Key features include infinite scrolling for movie lists and managing a personal favorites list that displays the average user rating. The application is styled using Tailwind CSS.',
    image: film,
    technologies: ['React', 'Tailwind', 'TMDB API', 'react-infinite-scroll-component', 'lucide-react', 'react-loading-indicators'],
    link: 'https://mymovies-rating.netlify.app/',
  },
];
