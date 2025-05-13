
type TailwindColor = "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose" | "slate" | "gray" | "zinc" | "neutral" | "stone";

interface Experience {
  company: string;
  role: string;
  date: string;
  location?: string;
  description?: string[];
  color: TailwindColor;
}

interface Education {
  institution: string;
  degree: string;
  date: string;
  color: TailwindColor;
}

interface Project {
  title: string;
  thumbnail: string;
  role: string;
  tools?: string[];
  summary: string;
  links?: {
    github?: string;
    website?: string;
  }[];
  images?: string[];
  description: string[];
  color: TailwindColor;
}

export const experiences: Experience[] = [
  {
    company: "P.T Periksa Solusi Indonesia",
    role: "Frontend Developer Intern",
    date: "Feb 2024 - Feb 2025",
    location: "Central Jakarta, Indonesia (Remote)",
    color: "purple",
    description: [
      "Developed and maintained web applications using React and TypeScript.",
      "Collaborated with designers to implement user-friendly interfaces.",
      "Participated in code reviews and contributed to team knowledge sharing.",
    ]
  },
  {
    company: "Your Company Hopefully :)",
    role: "Software Engineer",
    date: "Tomorrow",
    location: undefined,
    color: "yellow",
    description: [
      "Hoping to build meaningful applications that genuinely help people.",
      "Open to opportunities in various industries, including health tech, automotive, Islamic sectors, and others.",
    ]
  },
]

export const skills: string[] = [
  "React",
  "TailwindCSS",
  "Vue",
  "Angular",
  "Typescript",
  "RESTful API",
  "Git/Github",
  "SQL",
  "HTML/CSS",
]

export const education: Education = {
  institution: "Bina Nusantara University",
  degree: "Bachelor of Computer Science / 3.87 GPA / 3.5 Years",
  date: "2025",
  color: "amber",
}

export const projects: Project[] = [
  {
    title: "Mod Manager (In Progress)",
    thumbnail: "test.png",
    role: "Solo Developer",
    tools: ["React", "TypeScript", "Tailwind CSS"],
    summary: "A Minecraft mods manager using Modrinths API",
    links: [
      {
        github: "https://github.com/SyafiqSyech",
        website: "https://abdullahsyafiq.netlify.app/",
      },
    ],
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
    color: "orange",
  },
  {
    title: "Layzy",
    thumbnail: "test2.png",
    role: "Project Leader / Frontend Developer",
    tools: ["React", "React Libraries", "Typescript", "TailwindCSS", "Vite", "Netlify"],
    summary: "Website layout library with customizable layouts",
    links: [
      {
        github: "https://github.com/SyafiqSyech",
        website: "https://abdullahsyafiq.netlify.app/",
      },
    ],
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
    color: "blue",
  },
]