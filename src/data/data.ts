export interface Experience {
  id: string;
  company: string;
  role: string;
  date: string;
  location?: string;
  description?: string[];
}

interface Education {
  institution: string;
  degree: string;
  date: string;
}

export interface Project {
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
  images: { src: string; phone: boolean }[];
  description: string[];
  color: string;
}

export const experiences: Experience[] = [
  {
    id: "periksa",
    company: "P.T Periksa Solusi Indonesia",
    role: "Frontend Developer Intern",
    date: "Feb 2024 - Feb 2025",
    location: "Central Jakarta, Indonesia (Remote)",
    description: [
      "Maintained an SaaS dashboard application by developing and updating interactive tables with advanced filtering, CRUD operations, and complex forms using Angular.",
      "Built and updated RESTful API service integration and data models with TypeScript.",
      "Contributed to a separate application by building printable form templates using PHP and HTML, and utilized DBeaver for data validation.",
    ],
  },
  {
    id: "yourcompany",
    company: "Your Company Hopefully :)",
    role: "Software Engineer",
    date: "Tomorrow",
    location: "Anywhere",
    description: [
      "Hoping to build meaningful applications that genuinely help people.",
      "Open to opportunities in various industries, including health tech, automotive, Islamic sectors, and others.",
    ]
  },
]

export const skills: {
  frontend: [string, string][];
  tools: [string, string][];
  others: [string, string][];
  languages: [string, string][];
} = {
  frontend: [
    ["React",""],
    ["Vue",""],
    ["Angular",""],
    ["Typescript",""],
    ["HTML/CSS",""],
    ["TailwindCSS",""],
    ["API Integration",""],
  ],
  tools: [
    ["Git/Github",""],
    ["Vite",""],
    ["Netlify",""],
    ["Postman",""],
    ["DBeaver",""],
    ["Figma",""],
  ],
  others: [
    ["Backend Dev","Learning"],
    ["Golang","Learning"],
    ["SQL","Basic"],
    ["Python","Basic"],
    ["PHP","Basic"],
    ["C & C++","Basic"],
  ],
  languages: [
    ["English","Proficient"],
    ["Bahasa Indonesia","Native"],
  ],
}

export const education: Education = {
  institution: "Bina Nusantara University",
  degree: "Bachelor of Computer Science / 3.87 GPA / Graduation pending",
  date: "2025",
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
      { src: "modmanager.png", phone: false },
      { src: "modmanager1.png", phone: false },
      { src: "modmanager2.png", phone: false },
      { src: "modmanager3.png", phone: false },
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
      { src: "layzy.png", phone: false },
      { src: "layzy1.png", phone: false },
      { src: "layzy2.png", phone: false },
      { src: "layzy3.png", phone: false },
      { src: "layzy4.png", phone: false },
      { src: "layzy5.png", phone: false },
    ],
    description: [
      "Led a team of three to develop a modular web section layout library for faster web development using React, React libraries, TailwindCSS, TypeScript, Vite, deployed via Netlify, collaboration using Git/GitHub.",
      "Designed all of the interfaces, developed the layout editor system and contributed to database structuring.",
    ],
    color: "#95d4f3",
  },
  {
    id: "portfolio",
    title: "Portfolio Website",
    role: "Solo Developer",
    type: "Personal Project",
    tech: ["Vue", "Typescript", "TailwindCSS", "Vite", "Netlify"],
    summary: "Personal website built using Vue to showcase projects, experience, and skills.",
    links: {
      github: "https://github.com/SyafiqSyech/portfolio",
      website: "https://abdullahsyafiq.netlify.app/",
    },
    images: [
      { src: "portfolio.png", phone: true },
    ],
    description: [
      "Built a responsive personal portfolio website using Vue.js and Tailwind CSS to showcase projects, professional experience, and resume.",
      "Designed a minimalist UI with responsive animations and a togglable darkmode for improved UX.",
      "Deployed on Netlify with GitHub-integrated CI/CD pipeline for automated updates and version control.",
    ],
    color: "#feac91",
  },
  {
    id: "charsheet",
    title: "Character Sheet (Ongoing)",
    role: "Solo Developer",
    type: "Personal Project",
    tech: ["Vue", "Typescript", "TailwindCSS", "Vite", "Netlify"],
    summary: "Virtual character sheet for tabletop RPGs, built with Vue.",
    links: {
      github: "https://github.com/SyafiqSyech/char-sheet",
      website: "https://bonekeeper.netlify.app/",
    },
    images: [
      { src: "charsheet.png", phone: true },
    ],
    description: [
      "Developed and maintained web applications using React and TypeScript.",
    ],
    color: "#7c7c7c",
  },
  {
    id: "oldportfolio",
    title: "Portfolio Website (Old)",
    role: "Solo Developer",
    type: "Personal Project",
    tech: ["React", "Typescript", "TailwindCSS", "Vite", "Netlify"],
    summary: "Personal website built using React to showcase projects, experience, and skills.",
    links: {
      github: "https://github.com/SyafiqSyech/personal",
    },
    images: [
      { src: "oldportfolio.png", phone: false },
    ],
    description: [
      "Developed and maintained web applications using React and TypeScript.",
    ],
    color: "#ffe59e",
  },
  {
    id: "cognitivetest",
    title: "Cognitive Test",
    role: "Solo Developer",
    type: "Personal Project",
    tech: ["HTML", "CSS", "JavaScript", "Netlify", "Game Design"],
    summary: "Interactive cognitive test games with high score tracking.",
    links: {
      github: "https://github.com/SyafiqSyech/cognitive-test",
      website: "https://sherbetlemon.netlify.app/",
    },
    images: [
      { src: "cognitivetest.png", phone: false },
    ],
    description: [
      "Developed and maintained web applications using React and TypeScript.",
    ],
    color: "#f27f7c",
  },
]