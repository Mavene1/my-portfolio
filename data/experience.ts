export interface WorkExperience {
  id: number;
  title: string;
  company: string;
  period: string;
  desc: string;
  tags: string[];
  className: string;
  thumbnail: string;
}

export const workExperience: WorkExperience[] = [
  {
    id: 1,
    title: "Frontend Lead & Software Engineer",
    company: "Safaricom PLC",
    period: "April 2022 – Present",
    desc: "Frontend Lead within the IoT squad — establishing architectural patterns, coding standards, and frontend design principles across all IoT products. Architecting IoT Unified Platform (micro-frontend shell). Built large-scale Next.js 15 apps with RSC, Server Actions, and streaming SSR.",
    tags: ["React", "Next.js 15", "TypeScript", "Zustand", "Apollo Client", "TanStack Query"],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Backend & API Integration",
    company: "Safaricom PLC",
    period: "April 2022 – Present",
    desc: "Collaborated closely with backend engineers on Spring Boot 3 & 4 microservices, Apache Kafka event pipelines, and PostgreSQL/MongoDB/Redis-backed services — ensuring tight frontend/backend API contracts. Integrated REST and GraphQL APIs across IoT platforms plus real-time data flows for fraud detection, line status, and chatbot features.",
    tags: ["Spring Boot", "Apache Kafka", "GraphQL", "REST APIs", "PostgreSQL", "Redis"],
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Platform, DevSecOps & Observability",
    company: "Safaricom PLC",
    period: "April 2022 – Present",
    desc: "Provided architectural input across the CI/CD, Kubernetes, and observability stack to troubleshoot complex cross-layer production issues end-to-end. Championed SDLC and Agile processes — sprint planning, release management, and embedding secure coding practices (OWASP, OAuth2/JWT) into team workflows.",
    tags: ["GitLab CI/CD", "Kubernetes", "GitOps", "ELK Stack", "Prometheus", "Grafana"],
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Mobile Developer",
    company: "Safaricom PLC",
    period: "April 2022 – Present",
    desc: "Built cross-platform mobile apps in Flutter with offline-first architecture, push notifications, and real-time sync — extending platform reach to rural, connectivity-constrained users. Connected Farmers mobile app and SIM Portal companion app.",
    tags: ["Flutter", "React Native", "Offline-first", "Push Notifications"],
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  {
    id: 5,
    title: "IT Consultant Intern",
    company: "Flag 42 Ltd.",
    period: "August 2018 – December 2018",
    desc: "Developed web and mobile applications, delivered data analytics pipelines, and built Telco integration and custom software solutions that surpassed client specifications. Contributed to digital marketing and production systems.",
    tags: ["Web Development", "Mobile", "Data Analytics", "Telco Integration"],
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 6,
    title: "IT / Telecoms Intern",
    company: "Kenya Power & Lighting Company (KPLC)",
    period: "August 2019 – December 2019",
    desc: "Supported remote smart grid monitoring, token system installations, and fibre network commissioning. Performed network troubleshooting (TCP/IP, DNS, firewalls) and resolved customer-impacting incidents within SLA.",
    tags: ["Smart Grid", "Networking", "TCP/IP", "Linux", "Infrastructure"],
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];
