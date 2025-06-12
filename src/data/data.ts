interface Experience {
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

interface Project {
  id: string;
  title: string;
  thumbnail: string;
  role: string;
  tools?: string[];
  summary: string;
  links?: {
    github?: string;
    website?: string;
  };
  images?: string[];
  description: string[];
  color: string;
  phone?: boolean;
}

export const experiences: Experience[] = [
  {
    id: "ex1",
    company: "P.T Periksa Solusi Indonesia",
    role: "Frontend Developer Intern",
    date: "Feb 2024 - Feb 2025",
    location: "Central Jakarta, Indonesia (Remote)",
    description: [
      "Developed and maintained web applications using React and TypeScript.",
      "Collaborated with designers to implement user-friendly interfaces.",
      "Participated in code reviews and contributed to team knowledge sharing.",
    ]
  },
  {
    id: "ex2",
    company: "Your Company Hopefully :)",
    role: "Software Engineer",
    date: "Tomorrow",
    location: undefined,
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
    id: "pr1",
    title: "Mod Manager",
    thumbnail: "modmanager.png",
    role: "Solo Developer",
    tools: ["React", "TypeScript", "Tailwind CSS", "Vite", "Axios"],
    summary: "React-based website for managing Minecraft mods using Modrinths API.",
    links: {
      github: "https://github.com/SyafiqSyech/mod-manager",
      website: "https://modrinthmanager.netlify.app/",
    },
    images: [
      "test2.png",
      "test.png",
      "test2.png",
    ],
    description: [
      "Developed and maintained web applications using React and TypeScript.",
      "Collaborated with designers to implement user-friendly interfaces.",
      "Participated in code reviews and contributed to team knowledge sharing.",
    ],
    color: "#586684",
  },
  {
    id: "pr2",
    title: "Layzy",
    thumbnail: "layzy.png",
    role: "Project Leader / Frontend Developer",
    tools: ["React", "React Libraries", "Typescript", "TailwindCSS", "Vite", "Netlify"],
    summary: "Website section layout library with customizable layouts.",
    links: {
      github: "https://github.com/JeRiJeMaRiCo6203/ComponentWireframeLibrary",
    },
    images: [
      "test2.png",
      "test.png",
      "test2.png",
    ],
    description: [
      "Developed and maintained web applications using React and TypeScript.",
      "Collaborated with designers to implement user-friendly interfaces.",
      "Participated in code reviews and contributed to team knowledge sharing.",
    ],
    color: "#95d4f3",
  },
  {
    id: "pr3",
    title: "Portfolio Website",
    thumbnail: "portfolio.png",
    role: "Solo Developer",
    tools: ["Vue", "Typescript", "TailwindCSS", "Vite", "Netlify"],
    summary: "Personal website built using Vue to showcase projects, experience, and skills.",
    links: {
      github: "https://github.com/SyafiqSyech/portfolio",
      website: "https://abdullahsyafiq.netlify.app/",
    },
    images: [
      "test2.png",
      "test.png",
      "test2.png",
    ],
    description: [
      "Built a responsive personal portfolio website using Vue.js and Tailwind CSS to showcase projects, professional experience, and resume.",
      "Designed a minimalist UI with responsive animations and a togglable darkmode for improved UX.",
      "Deployed on Netlify with GitHub-integrated CI/CD pipeline for automated updates and version control.",
    ],
    color: "#feac91",
    phone: true,
  },
  {
    id: "pr4",
    title: "Character Sheet (Ongoing)",
    thumbnail: "charsheet.png",
    role: "Solo Developer",
    tools: ["Vue", "Typescript", "TailwindCSS", "Vite", "Netlify"],
    summary: "Virtual character sheet for tabletop RPGs, built with Vue.",
    links: {
      github: "https://github.com/SyafiqSyech/char-sheet",
      website: "https://bonekeeper.netlify.app/",
    },
    images: [
      "test2.png",
      "test.png",
      "test2.png",
    ],
    description: [
      "Developed and maintained web applications using React and TypeScript.",
      "Collaborated with designers to implement user-friendly interfaces.",
      "Participated in code reviews and contributed to team knowledge sharing.",
    ],
    color: "#7c7c7c",
    phone: true,
  },
  {
    id: "pr5",
    title: "Portfolio Website (Old)",
    thumbnail: "portfolioold.png",
    role: "Solo Developer",
    tools: ["React", "Typescript", "TailwindCSS", "Vite", "Netlify"],
    summary: "Personal website built using React to showcase projects, experience, and skills.",
    links: {
      github: "https://github.com/SyafiqSyech/personal",
    },
    images: [
      "test2.png",
      "test.png",
      "test2.png",
    ],
    description: [
      "Developed and maintained web applications using React and TypeScript.",
      
    ],
    color: "#ffe59e",
  },
  {
    id: "pr6",
    title: "Cognitive Test",
    thumbnail: "cognitivetest.png",
    role: "Solo Developer",
    tools: ["HTML", "CSS", "JavaScript", "Netlify", "Game Design"],
    summary: "Interactive cognitive test games with high score tracking.",
    links: {
      github: "https://github.com/SyafiqSyech/cognitive-test",
      website: "https://sherbetlemon.netlify.app/",
    },
    images: [
      "test2.png",
      "test.png",
      "test2.png",
    ],
    description: [
      "Developed and maintained web applications using React and TypeScript.",
    ],
    color: "#f27f7c",
  },
]