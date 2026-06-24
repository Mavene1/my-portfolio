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
    title: "Backend Engineer",
    company: "Safaricom PLC",
    period: "April 2022 – Present",
    desc: "Architected production microservices with Spring Boot 3 & 4. Built async event-driven pipelines with Apache Kafka integrating M-PESA financial APIs, SMS middleware, and IoT device providers. Applied Resilience4j circuit breakers, retry with backoff, and bulkheads.",
    tags: ["Spring Boot 4", "Java", "Apache Kafka", "PostgreSQL", "Redis", "OAuth2"],
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Platform & DevSecOps Engineer",
    company: "Safaricom PLC",
    period: "April 2022 – Present",
    desc: "Designed reusable CI/CD pipeline templates with GitOps (Flux CD, Argo CD). Embedded SAST, DAST, SCA, and container scanning across SDLC. Provisioned AWS and Azure infrastructure with Terraform. Built AIOps observability with ELK, Prometheus, Grafana, Dynatrace, PagerDuty.",
    tags: ["GitLab CI/CD", "Kubernetes", "Terraform", "AWS", "Docker", "Prometheus"],
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
