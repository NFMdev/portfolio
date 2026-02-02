export type Project = {
  name: string;
  tagline: string;
  description: string;
  tags: string[];
  link: string;
  featured: boolean;
  preview?: {
    type: "image" | "video";
    src: string;
    alt: string;
    poster?: string;
  };
};

export const projects: Project[] = [
  {
    name: "Aether 3D",
    tagline: "Transforms data into a living 3D visual experience.",
    description:
      "Interactive 3D dashboard where entities evolve with real-time metrics. Built for visual storytelling and control-driven exploration.",
    tags: [
      "React",
      "TypeScript",
      "React Three Fiber",
      "Zustand",
      "Leva",
      "Tailwind v4",
      "Framer Motion",
    ],
    link: "https://github.com/NFMdev/aether-3D",
    featured: true,
    preview: {
      type: "video",
      src: "/previews/aether-3D.webm",
      alt: "Aether-3D preview",
      poster: "/previews/aether-3D.webp",
    },
  },
  {
    name: "Crime Data Ingestion & Analytics (CDIA)",
    tagline: "Mini platform for real-time ingestion, processing, and search.",
    description:
      "Simulates suspicious activity reports ingestion with CDC from PostgreSQL into Flink, and searchable analytics in Elasticsearch.",
    tags: [
      "Java 21",
      "Spring Boot",
      "PostgreSQL",
      "Flyway",
      "Flink",
      "Elasticsearch",
      "Docker",
    ],
    link: "https://github.com/NFMdev/cdia",
    featured: true,
    preview: {
      type: "image",
      src: "/previews/cdia.webp",
      alt: "CDIA preview",
    },
  },
  {
    name: "My CV Web App",
    tagline: "Small front-end web app to present my CV.",
    description:
      "A clean CV experience with charts and UI components, built as a lightweight showcase.",
    tags: ["React 18", "TypeScript", "Vite", "MUI", "Recharts"],
    link: "https://github.com/NFMdev/cv-web-app",
    featured: true,
    preview: {
      type: "image",
      src: "/previews/cv.png",
      alt: "CV project preview",
    },
  },
  {
    name: "Supermarket API",
    tagline: "API that generates optimized shopping routes (AI WIP).",
    description:
      "Backend API for product list → route planning. Uses PostgreSQL + MongoDB, JWT auth, and DTO mapping.",
    tags: ["Spring Boot", "PostgreSQL", "MongoDB", "JWT", "ModelMapper"],
    link: "https://github.com/NFMdev/supermarket-api",
    featured: false,
  },
];
