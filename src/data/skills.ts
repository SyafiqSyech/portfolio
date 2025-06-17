interface SkillCategory {
  name: string;
  note?: string;
}

interface Skill {
  [category: string]: SkillCategory[];
}

export const skills: Skill = {
  "Frontend": [
    { name: "React" },
    { name: "Vue" },
    { name: "Angular" },
    { name: "Typescript" },
    { name: "HTML/CSS" },
    { name: "TailwindCSS" },
    { name: "API Integration" },
  ],
  "Tools": [
    { name: "Git/Github" },
    { name: "Vite" },
    { name: "Netlify" },
    { name: "Postman" },
    { name: "DBeaver" },
    { name: "Figma" },
  ],
  "Others": [
    { name: "Backend Dev", note: "Learning" },
    { name: "Golang", note: "Learning" },
    { name: "SQL", note: "Basic" },
    { name: "Python", note: "Basic" },
    { name: "PHP", note: "Basic" },
    { name: "C & C++", note: "Basic" },
  ],
  "Languages": [
    { name: "English", note: "Proficient" },
    { name: "Bahasa Indonesia", note: "Native" },
  ],
}