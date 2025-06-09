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
    ["RESTful API Integration",""],
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
    ["MySQL","Basic"],
    ["Python","Basic"],
    ["PHP","Basic"],
    ["C & C++","Basic"],
  ],
  languages: [
    ["Indonesian","Native"],
    ["English","Proficient"],
  ],
}

export const education: Education = {
  institution: "Bina Nusantara University",
  degree: "Bachelor of Computer Science / 3.87 GPA / 3.5 Years",
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
      github: "https://github.com/SyafiqSyech",
      website: "https://abdullahsyafiq.netlify.app/",
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
      github: "https://github.com/SyafiqSyech",
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
      github: "https://github.com/SyafiqSyech",
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
    color: "#feac91",
    phone: true,
  },
]