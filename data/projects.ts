export interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  tags: string[];
  status?: "live" | "in-progress" | "completed";
}

export const projects: Project[] = [
  {
    id: 1,
    title: "IoT Unified Platform",
    des: "Next-generation micro-frontend shell using Next.js rewrites as reverse proxy to compose all Safaricom IoT sub-products under a single domain — independent repos, isolated CI/CD, Module Federation, unified auth.",
    img: "/p1.svg",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/re.svg"],
    link: "#",
    tags: ["Next.js", "Micro-frontend", "Module Federation", "TypeScript"],
    status: "in-progress",
  },
  {
    id: 2,
    title: "SIM Connectivity Portal",
    des: "Enterprise multi-tenant platform for IoT SIM lifecycle management — bulk activation, suspension, resumption, audit logs, RBAC. Apollo Client caching reduced support escalations measurably.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/re.svg"],
    link: "#",
    tags: ["Next.js 15", "TypeScript", "Apollo Client", "RBAC", "Spring Boot"],
    status: "live",
  },
  {
    id: 3,
    title: "EQMS — Enterprise Quality Management",
    des: "Internal ticketing platform with real-time status tracking and AI rule-engine categorisation — reduced issue resolution time by over 40% through workflow optimisation and responsive UI redesign.",
    img: "/p3.svg",
    iconLists: ["/next.svg", "/ts.svg", "/re.svg"],
    link: "#",
    tags: ["Next.js", "TypeScript", "AI/ML", "Redux", "MUI"],
    status: "live",
  },
  {
    id: 4,
    title: "Connected Farmers Platform",
    des: "Full-stack AgriTech SaaS (web + Flutter mobile) connecting farmers, agronomists, and institutions. Offline-first mobile architecture for rural users with AI-based crop advisory and farm-output visualisation.",
    img: "/p4.svg",
    iconLists: ["/re.svg", "/ts.svg", "/tail.svg", "/fm.svg"],
    link: "#",
    tags: ["React", "Flutter", "Spring Boot", "Kafka", "MLOps"],
    status: "live",
  },
  {
    id: 5,
    title: "Smart Water Platform",
    des: "Real-time telemetry platform for water utility management — meter and valve control, leak detection alerts, and usage pattern visualisation. Stepped in as BCP frontend lead to deliver first production launch.",
    img: "/p1.svg",
    iconLists: ["/next.svg", "/ts.svg", "/re.svg"],
    link: "#",
    tags: ["Next.js", "Real-time", "IoT", "Time-series DB"],
    status: "live",
  },
  {
    id: 6,
    title: "SMS Gateway Management Portal",
    des: "Delivered SMS Portal v2 to production. Built Configuration Management Portal for SMS Middleware across IoT platforms — automated onboarding and refactored middleware for reusability and scalability.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/ts.svg", "/re.svg"],
    link: "#",
    tags: ["Next.js", "Spring Boot", "REST APIs", "TypeScript"],
    status: "completed",
  },
];
