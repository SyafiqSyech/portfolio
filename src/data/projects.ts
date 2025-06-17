
interface Project {
  id: string;
  title: string;
  role: string;
  type: string;
  tech: string[];
  summary: string;
  links: {
    github?: string;
    website?: string;
  };
  images: {
    src: string;
    phone: boolean;
  }[];
  description: string[];
  color: string;
}

export const projects: Project[] = [
  {
    id: "modmanager",
    title: "Mod Manager",
    role: "Solo Developer",
    type: "Personal Project",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "Axios"],
    summary: "React-based website for managing Minecraft mods using Modrinths API.",
    links: {
      github: "https://github.com/SyafiqSyech/mod-manager",
      website: "https://modrinthmanager.netlify.app/",
    },
    images: [
      { src: "modmanager.webp", phone: false },
    ],
    description: [
      "Developed a web-based manager for Minecraft mods using React TypeScript.",
      "Built custom reusable hooks for fetching data and debouncing inputs, and integrated Modrinth’s API using Axios, applying best practices learned from industry experience and independent study.",
      "Designed a scalable project architecture and folder system to enhance maintainability and future development.",
    ],
    color: "#586684",
  },
  {
    id: "layzy",
    title: "Layzy",
    role: "Project Leader / Frontend Developer",
    type: "University Final Project",
    tech: ["React", "React Libraries", "Typescript", "TailwindCSS", "Vite", "Netlify"],
    summary: "Website section layout library with customizable layouts.",
    links: {
      github: "https://github.com/JeRiJeMaRiCo6203/ComponentWireframeLibrary",
    },
    images: [
      { src: "layzy.webp", phone: false },
    ],
    description: [
      "Led a team of three to develop a modular web section layout library for faster web development using React, deployed via Netlify, and collaborated using Git/GitHub.",
      "Designed all of the interfaces, developed the layout editor system and contributed to database structuring.",
    ],
    color: "#95d4f3",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    role: "Solo Developer",
    type: "Personal Project",
    tech: ["Vue", "Vue Router", "Typescript", "TailwindCSS", "Vite", "Netlify"],
    summary: "Personal website built using Vue to showcase projects, experience, and skills.",
    links: {
      github: "https://github.com/SyafiqSyech/portfolio",
      website: "https://abdullahsyafiq.netlify.app/",
    },
    images: [
      { src: "portfolio.webp", phone: true },
    ],
    description: [
      "Built a responsive personal portfolio website using Vue.js and Tailwind CSS to showcase projects, professional experience, and resume.",
      "Designed a minimalist UI with responsive animations and a togglable darkmode for improved UX.",
      "Deployed on Netlify with GitHub-integrated CI/CD pipeline for automated updates and version control.",
    ],
    color: "#ff916c",
  },
  {
    id: "charsheet",
    title: "Character Sheet (Ongoing)",
    role: "Solo Developer",
    type: "Personal Project",
    tech: ["Vue", "Quill.js", "Typescript", "Local Storage", "TailwindCSS", "Vite", "Netlify"],
    summary: "Virtual character sheet for tabletop RPGs, built with Vue.",
    links: {
      github: "https://github.com/SyafiqSyech/char-sheet",
      website: "https://bonekeeper.netlify.app/",
    },
    images: [
      { src: "charsheet.webp", phone: true },
    ],
    description: [
      "Developed a virtual character sheet for tabletop RPGs using Vue.js and Tailwind CSS, focusing on usability and clean UI.",
      "Implemented customizable user settings, including font preferences and data saving options.",
      "Integrated and customized Quill.js as a text editor for the notes section.",
      "Currently working on adding autosave functionality, improving overall experience and other features.",
    ],
    color: "#7c7c7c",
  },
  {
    id: "oldportfolio",
    title: "Portfolio Website (Old)",
    role: "Solo Developer",
    type: "Personal Project",
    tech: ["React", "Vite", "Typescript", "Framer Motion", "TailwindCSS", "Netlify"],
    summary: "Personal website built using React to showcase projects, experience, and skills.",
    links: {
      github: "https://github.com/SyafiqSyech/personal",
    },
    images: [
      { src: "oldportfolio.webp", phone: false },
    ],
    description: [
      "Developed a responsive web application using React.js and Vite.",
      "Designed a minimalist user interface enhanced with Framer Motion animations, focusing on techniques such as variants and spring physics",
      "Applied component-based architecture, improving my proficiency in React props, component reuse, and state management.",
    ],
    color: "#ffe59e",
  },
  {
    id: "cognitivetest",
    title: "Cognitive Test",
    role: "Solo Developer",
    type: "Personal Project",
    tech: ["HTML", "CSS", "JavaScript", "Local Storage", "Netlify", "Game Design"],
    summary: "Interactive cognitive test games with high score tracking.",
    links: {
      github: "https://github.com/SyafiqSyech/cognitive-test",
      website: "https://sherbetlemon.netlify.app/",
    },
    images: [
      { src: "cognitivetest.webp", phone: false },
    ],
    description: [
      "Designed and developed three browser-based cognitive skill games, implementing difficulty curves, custom visuals, and engaging interactive mechanics.",
      "Applied high score tracking using local storage.",
    ],
    color: "#f27f7c",
  },
]