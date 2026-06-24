export interface SkillCategory {
  id: number;
  category: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    category: "Frontend",
    icon: "MonitorSmartphone",
    skills: ["React.js", "Next.js 15", "TypeScript", "JavaScript", "Tailwind CSS", "Material-UI", "Redux / React Redux", "Zustand", "TanStack Query", "Apollo Client", "Angular.js", "Figma", "Accessibility (ARIA, WCAG)", "Core Web Vitals"],
  },
  {
    id: 2,
    category: "Backend",
    icon: "Server",
    skills: ["Spring Boot 3 & 4", "Java", "Node.js", "Python", "REST APIs", "GraphQL", "Apache Kafka", "Resilience4j", "TIBCO BPM"],
  },
  {
    id: 3,
    category: "Platform & DevSecOps",
    icon: "Shield",
    skills: ["GitLab CI/CD", "Jenkins", "GitHub Actions", "GitOps", "Flux CD", "Argo CD", "SAST / DAST / SCA", "OPA Policy-as-Code", "Kubernetes", "Docker", "Terraform", "AWS", "Azure"],
  },
  {
    id: 4,
    category: "Databases",
    icon: "Database",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "InfluxDB (Time-series)", "Apache NiFi", "ETL Pipelines"],
  },
  {
    id: 5,
    category: "Architecture",
    icon: "Layers",
    skills: ["Micro-frontend (Module Federation)", "Next.js App Router / RSC", "Clean Architecture", "Domain-Driven Design", "Hexagonal Design", "Event-driven (Kafka)", "Microservices", "12-factor App"],
  },
  {
    id: 6,
    category: "Observability & AI/ML",
    icon: "BrainCircuit",
    skills: ["Prometheus", "Grafana", "ELK Stack", "Dynatrace", "PagerDuty", "MLOps Pipelines", "AI PDLC", "Scikit-learn", "Pandas / NumPy"],
  },
  {
    id: 7,
    category: "Mobile",
    icon: "Smartphone",
    skills: ["Flutter", "React Native", "Offline-first Architecture", "Push Notifications", "Real-time Sync"],
  },
  {
    id: 8,
    category: "Practices & Leadership",
    icon: "Workflow",
    skills: ["Agile / Scrum", "Technical Leadership", "ADR-driven Decisions", "Code & Design Reviews", "OpenAPI / Swagger", "TDD", "Mentoring", "OWASP / Secure Coding"],
  },
];

export const highlights = [
  { value: "5+", label: "Years at Safaricom PLC", icon: "Building2" },
  { value: "40%", label: "Reduction in EQMS ticket resolution", icon: "Zap" },
  { value: "14%", label: "Client satisfaction boost in 6 months", icon: "Star" },
  { value: "1st", label: "To complete all 4 Safaricom learning tracks", icon: "Award" },
];
