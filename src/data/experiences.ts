interface Experience {
  id: string;
  company: string;
  role: string;
  date: string;
  location?: string;
  description?: string[];
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