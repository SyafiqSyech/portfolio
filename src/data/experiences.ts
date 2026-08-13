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
    id: "pls",
    company: "PLS PTE LTD",
    role: "Software Developer",
    date: "Feb 2026 - Present",
    location: "Singapore (Remote)",
    description: [
      "Created frontend API documentation from scratch by reviewing the existing frontend codebase and backend endpoint implementations for 12+ endpoints, documenting request/response schemas, data types, required fields, descriptions, and examples.",
      "Proposed and researched migrating the dashboard system from Google Charts to a more modern approach; introduced Apache ECharts by developing prototypes, building a conversion layer, and migrating selected charts from Google Charts while documenting the approach for future adoption.",
      "Worked independently within a legacy React/JavaScript stack and introduced TypeScript to the existing codebase, building a prototype dashboard page with typed API response interfaces and full API integration, demonstrating a potential approach for future development."
    ]
  },
  {
    id: "yourcompany",
    company: "Your Company Hopefully :)",
    role: "Software Engineer",
    date: "Tomorrow",
    location: "Anywhere",
    description: [
      "Hoping to build meaningful applications that genuinely help people.",
      "Open to opportunities in various industries, including health tech, automotive, and others.",
    ]
  },
]