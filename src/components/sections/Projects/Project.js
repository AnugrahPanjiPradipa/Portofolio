import jabol from '../../../assets/Jabol.png';
import snap from '../../../assets/Snapclean.png';
import mind from '../../../assets/mindease.png';
import porto from '../../../assets/Porto.png';
import notes from '../../../assets/Notesapp.png';
import pengeluaran from '../../../assets/Pengeluaran.png';
import dashboard from '../../../assets/dashboard.png';
import film from '../../../assets/film.png';

export const projects = [
  {
    title: 'Jabol (Jalanan Bolong)',
    role: 'Front-End',
    description: 'A community-driven platform for reporting and tracking damaged roads around Telkom University to accelerate repairs.',
    image: jabol,
    technologies: ['HTML', 'CSS', 'Bootstrap'],
    link: 'https://www.figma.com/design/AzkqQjiVNaffKtZzXfcCZd/UI-Jabol--Copy-?node-id=745-229&t=Fkt6lPqTNX58J6ct-1#',
    journal: 'https://publikasi.mercubuana.ac.id/index.php/fifo/article/view/26525',
  },
  {
    title: 'SnapClean',
    role: 'UI/UX Designer',
    description: 'A mobile solution empowering users to report environmental waste directly to authorities for a cleaner neighborhood.',
    image: snap,
    technologies: ['Figma'],
    link: 'https://www.figma.com/design/6zUjcSGYReBnPx21O7Sijg/MOCKUP-SNAPCLEAN?node-id=0-1&t=AevT9NFHvP8fCMiI-1',
  },
  {
    title: 'MindEase',
    role: 'Fullstack Android',
    description: 'A dedicated mental health companion for students, offering mood tracking and wellness support resources.',
    image: mind,
    technologies: ['Kotlin', 'Firebase'],
    link: 'https://github.com/MindEasee/MindEasee.git',
  },
  {
    title: 'Portfolio Website',
    role: 'Fullstack',
    description: 'A modern, interactive portfolio showcasing my development journey, technical skills, and creative projects.',
    image: porto,
    technologies: ['React', 'Tailwind', 'Motion', 'Email.js'],
    link: 'https://panjiporto.netlify.app/',
  },
  {
    title: 'Notes',
    role: 'Frontend',
    description: 'A streamlined note-taking application designed for rapid idea capture and seamless organization.',
    image: notes,
    technologies: ['React'],
    link: 'https://reactnotesweb.netlify.app/',
  },
  {
    title: 'Catatan Pengeluaran',
    role: 'Frontend',
    description: 'An intuitive personal finance tracker helping users monitor daily expenses and manage budgets efficiently.',
    image: pengeluaran,
    technologies: ['React', 'Tailwind', 'Chart.js'],
    link: 'https://anugrahpanjipradipa.github.io/catatanPengeluaran/',
  },
  {
    title: 'Personal Dashboard',
    role: 'Frontend',
    description: 'A unified productivity hub featuring real-time weather, daily inspiration, task management, and quick access links.',
    image: dashboard,
    technologies: ['React', 'Tailwind', 'OpenWeatherMap API', 'Quotable API'],
    link: 'https://desktop-dashboards.netlify.app/',
  },
  {
    title: 'Movies Rating App', 
    role: 'Frontend',
    description: 'An immersive movie discovery platform featuring infinite scrolling, search, and personalized watchlists powered by TMDB.',
    image: film,
    technologies: ['React', 'Tailwind', 'TMDB API', 'react-infinite-scroll-component', 'lucide-react', 'react-loading-indicators'],
    link: 'https://mymovies-rating.netlify.app/',
  },
];