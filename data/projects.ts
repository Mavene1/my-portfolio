export interface TechCategory {
  category: string;
  items: string[];
}

export interface Metric {
  label: string;
  value: string;
  description?: string;
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
  tags: string[];
  status?: "live" | "in-progress" | "completed";
  // Detail page fields
  overview?: string;
  role?: string;
  duration?: string;
  teamSize?: number;
  highlights?: string[];
  metrics?: Metric[];
  techStack?: TechCategory[];
  challenges?: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "iot-unified-platform",
    title: "IoT Unified Platform",
    des: "Next-generation micro-frontend shell using Next.js rewrites as reverse proxy to compose all Safaricom IoT sub-products under a single domain — independent repos, isolated CI/CD, Module Federation, unified auth.",
    img: "/p1.svg",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/re.svg"],
    link: "#",
    tags: ["Next.js", "Micro-frontend", "Module Federation", "TypeScript"],
    status: "in-progress",
    role: "Frontend Architect & Lead",
    duration: "July 2024 – Present",
    teamSize: 8,
    overview:
      "The IoT Unified Platform is a next-generation micro-frontend shell designed to compose all of Safaricom's IoT sub-products — SIM Portal, Connected Farmers, Smart Water, and EQMS — under a single domain. Each product team maintains full ownership: independent Git repositories, isolated CI/CD pipelines, and autonomous deployment cycles. The shell orchestrates these into a cohesive experience via Next.js rewrites acting as a reverse proxy, with Module Federation v2 handling runtime composition. A shared design system, unified authentication layer, and cross-app state bus ensure consistency without coupling.",
    highlights: [
      "Single-domain reverse proxy via Next.js rewrites, eliminating CORS and cross-app cookie scope issues",
      "Module Federation v2 for runtime micro-frontend composition with lazy-loaded remote modules",
      "Unified OAuth2/JWT auth layer with refresh token rotation shared across all sub-apps via a shared auth context",
      "Internal design system distributed as an npm package — shared Tailwind 4 config, shadcn components, and token set",
      "Zero-downtime deployments — each sub-app deploys independently without shell redeployment",
      "Turborepo monorepo with shared lint, TypeScript, and build config for all IoT products",
      "Cross-app event bus enabling lightweight communication between independently-deployed micro-frontends",
    ],
    metrics: [
      { label: "Sub-products unified", value: "6", description: "Under one domain" },
      { label: "Deployment independence", value: "100%", description: "Per sub-app CI/CD" },
      { label: "Integration friction", value: "~40%↓", description: "Cross-team overhead reduced" },
      { label: "Auth systems consolidated", value: "1", description: "From 3 separate implementations" },
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS 4", "shadcn/ui"],
      },
      {
        category: "Architecture",
        items: ["Module Federation v2", "Webpack 5", "Turborepo", "Next.js Rewrites"],
      },
      {
        category: "Auth & Security",
        items: ["OAuth2", "JWT", "Keycloak", "PKCE Flow"],
      },
      {
        category: "Infrastructure",
        items: ["Kubernetes", "GitLab CI/CD", "ArgoCD", "GitOps"],
      },
    ],
    challenges: [
      "Cross-app shared state without introducing coupling — solved with a lightweight event bus and scoped Zustand stores",
      "SSR compatibility with Module Federation — Next.js SSR expects synchronous modules; required custom webpack plugin configuration",
      "Consistent design tokens across independently-deployed apps — solved by versioning the design system as a private npm package",
      "Auth token propagation between sub-apps on different deployment schedules — solved with a shared session cookie scoped to the root domain",
    ],
  },
  {
    id: 2,
    slug: "sim-connectivity-portal",
    title: "SIM Connectivity Portal",
    des: "Enterprise multi-tenant platform for IoT SIM lifecycle management — bulk activation, suspension, resumption, audit logs, RBAC. Apollo Client caching reduced support escalations measurably.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/ts.svg", "/tail.svg", "/re.svg"],
    link: "#",
    tags: ["Next.js 15", "TypeScript", "Apollo Client", "RBAC", "Spring Boot"],
    status: "live",
    role: "Frontend Lead",
    duration: "January 2023 – September 2023",
    teamSize: 6,
    overview:
      "The SIM Connectivity Portal is an enterprise-grade multi-tenant SaaS platform enabling telecom operators and enterprise IoT customers to manage the full lifecycle of their IoT SIM cards at scale. The platform supports bulk operations — activating, suspending, and resuming thousands of SIMs in a single action — backed by async job processing with real-time progress feedback. A comprehensive RBAC system allows granular permission assignment across tenant hierarchies, and a full audit log captures every state change with timestamps, actor info, and diffs.",
    highlights: [
      "Bulk SIM operations with async job polling — progress indicators and toast notifications for long-running tasks",
      "Role-Based Access Control with granular permissions scoped across tenant, group, and user levels",
      "Apollo Client normalized cache reduced API call volume by ~60%, cutting backend load and UI latency",
      "Real-time SIM status updates via WebSocket with automatic reconnection and exponential back-off",
      "Comprehensive audit log with full-text search, date range filtering, CSV export, and infinite scroll",
      "Responsive data tables handling 10,000+ SIMs with virtual scrolling and column customisation",
      "Multi-tenant data isolation enforced at both UI and API boundary — no cross-tenant data leakage possible",
    ],
    metrics: [
      { label: "API call reduction", value: "60%", description: "Via Apollo normalized cache" },
      { label: "SIMs per tenant", value: "10,000+", description: "Supported at scale" },
      { label: "Support escalations", value: "↓ Measurable", description: "Post-launch reduction" },
      { label: "Bulk ops batch size", value: "1,000", description: "SIMs per operation" },
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["Next.js 15", "TypeScript", "Tailwind CSS", "Apollo Client", "TanStack Query"],
      },
      {
        category: "State Management",
        items: ["Zustand", "Apollo Client Cache", "React Context"],
      },
      {
        category: "Backend Integration",
        items: ["Spring Boot 3", "GraphQL", "REST APIs", "WebSockets"],
      },
      {
        category: "Auth & Security",
        items: ["RBAC", "OAuth2", "JWT", "Multi-tenancy"],
      },
    ],
    challenges: [
      "Optimistic UI for bulk operations — updating thousands of rows immediately before async confirmation, with rollback on failure",
      "Apollo cache invalidation strategy — bulk mutations invalidate paginated list queries without triggering full refetches",
      "Multi-tenant isolation in a shared UI codebase — solved with tenant context propagation through all API calls and component trees",
      "WebSocket reconnection under flaky enterprise network conditions — exponential back-off with last-known-state reconciliation on reconnect",
    ],
  },
  {
    id: 3,
    slug: "eqms",
    title: "EQMS — Enterprise Quality Management",
    des: "Internal ticketing platform with real-time status tracking and AI rule-engine categorisation — reduced issue resolution time by over 40% through workflow optimisation and responsive UI redesign.",
    img: "/p3.svg",
    iconLists: ["/next.svg", "/ts.svg", "/re.svg"],
    link: "#",
    tags: ["Next.js", "TypeScript", "AI/ML", "Redux", "MUI"],
    status: "live",
    role: "Full-stack Contributor & UI Redesign Lead",
    duration: "April 2022 – December 2022",
    teamSize: 5,
    overview:
      "EQMS (Enterprise Quality Management System) replaced a legacy internal ticketing system that had become a bottleneck for Safaricom's IoT engineering teams. The platform introduced AI-powered auto-categorisation to reduce manual triage, real-time status boards with WebSocket-driven live updates, and a fully redesigned responsive UI. The system handles quality issue management, SLA tracking, escalation workflows, and cross-team collaboration for 200+ concurrent engineering users.",
    highlights: [
      "AI rule-engine auto-categorises incoming tickets by severity, owning team, and product area — cutting triage time by 3×",
      "Real-time status board with WebSocket updates — live countdown timers to SLA breach with colour-coded urgency indicators",
      "SLA breach alert system with automated escalation to team leads and stakeholders via email and in-app notifications",
      "Full UI redesign migrating from MUI v4 to Next.js with custom components — improved performance and accessibility",
      "Advanced filtering, sorting, bulk-action toolbar, and keyboard shortcuts for power users",
      "Audit trail on every ticket state change with actor attribution and timestamp accuracy to the second",
      "Export capabilities (PDF, CSV) for compliance and quarterly quality reporting",
    ],
    metrics: [
      { label: "Issue resolution time", value: "40%↓", description: "Post-launch improvement" },
      { label: "Triage speed", value: "3×↑", description: "Via AI auto-categorisation" },
      { label: "Concurrent users", value: "200+", description: "Supported simultaneously" },
      { label: "SLA breach rate", value: "↓ Significant", description: "Via proactive alerting" },
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["Next.js", "TypeScript", "Redux Toolkit", "Custom UI Components"],
      },
      {
        category: "AI / ML",
        items: ["Rule-based engine", "ML classification pipeline", "NLP text categorisation"],
      },
      {
        category: "Backend",
        items: ["Spring Boot", "PostgreSQL", "Redis", "WebSockets"],
      },
      {
        category: "Infrastructure",
        items: ["GitLab CI/CD", "Docker", "Kubernetes"],
      },
    ],
    challenges: [
      "Migrating a large existing Redux codebase to RTK without disrupting ongoing feature development",
      "Real-time updates with optimistic rendering — WebSocket events had to reconcile with pending local state mutations",
      "AI model integration — the classification pipeline runs async; the UI had to reflect uncertain/pending states gracefully",
      "SLA timers with sub-second accuracy across browser tabs — required a shared worker pattern to avoid timer drift",
    ],
  },
  {
    id: 4,
    slug: "connected-farmers-platform",
    title: "Connected Farmers Platform",
    des: "Full-stack AgriTech SaaS (web + Flutter mobile) connecting farmers, agronomists, and institutions. Offline-first mobile architecture for rural users with AI-based crop advisory and farm-output visualisation.",
    img: "/p4.svg",
    iconLists: ["/re.svg", "/ts.svg", "/tail.svg", "/fm.svg"],
    link: "#",
    tags: ["React", "Flutter", "Spring Boot", "Kafka", "MLOps"],
    status: "live",
    role: "Full-stack Lead (Web & Mobile)",
    duration: "October 2023 – June 2024",
    teamSize: 10,
    overview:
      "Connected Farmers is a full-stack AgriTech SaaS platform connecting Kenya's smallholder farmers with agronomists, financial institutions, and market data. The platform consists of a Next.js web dashboard for agronomists and institutions, and an offline-first Flutter mobile app built for rural users with low or intermittent connectivity. The system provides AI-powered crop advisory personalised per farm plot, real-time weather overlays, M-Pesa integrated input procurement, and farm output visualisation via interactive maps.",
    highlights: [
      "Offline-first Flutter mobile app — SQLite local DB with background sync via Apache Kafka, works reliably on 2G",
      "AI-based crop advisory engine providing personalised recommendations per farm plot based on soil, weather, and historical yield data",
      "Interactive farm mapping with Mapbox GL — geofenced plot boundaries, sensor overlay, and crop health indicators",
      "M-Pesa payment API integration for direct input procurement and agronomist payment disbursement",
      "Multi-language support: English, Swahili, and Kikuyu — serving linguistically diverse farming communities",
      "Real-time market price feed integrated into the advisory flow — farmers see current market prices for their crop",
      "Agronomist scheduling and visit tracking with GPS check-in and digital field notes",
    ],
    metrics: [
      { label: "Farmers onboarded", value: "50,000+", description: "In first 6 months" },
      { label: "Min connectivity", value: "2G", description: "App works at edge" },
      { label: "Yield reporting accuracy", value: "30%↑", description: "Vs. manual baseline" },
      { label: "Languages supported", value: "3", description: "EN, SW, Kikuyu" },
    ],
    techStack: [
      {
        category: "Web Frontend",
        items: ["React", "TypeScript", "Tailwind CSS", "TanStack Query", "Mapbox GL"],
      },
      {
        category: "Mobile",
        items: ["Flutter 3", "Dart", "SQLite", "Provider", "Background Sync"],
      },
      {
        category: "Backend",
        items: ["Spring Boot 3", "Apache Kafka", "PostgreSQL", "Redis"],
      },
      {
        category: "Data & AI",
        items: ["MLOps pipeline", "Crop advisory model", "Weather API", "Satellite imagery"],
      },
    ],
    challenges: [
      "Offline sync conflict resolution — farmer and agronomist edits to the same plot record could diverge; solved with a last-write-wins strategy with manual conflict review UI for agronomists",
      "ML model serving on constrained mobile devices — models quantised and served from the edge rather than device-local inference",
      "Scalable Kafka consumer groups for real-time farm telemetry — partitioning strategy required careful consideration to avoid hot partitions per region",
      "M-Pesa API idempotency — payment retries on network failure had to be deduplicated to prevent double charges",
    ],
  },
  {
    id: 5,
    slug: "smart-water-platform",
    title: "Smart Water Platform",
    des: "Real-time telemetry platform for water utility management — meter and valve control, leak detection alerts, and usage pattern visualisation. Stepped in as BCP frontend lead to deliver first production launch.",
    img: "/p1.svg",
    iconLists: ["/next.svg", "/ts.svg", "/re.svg"],
    link: "#",
    tags: ["Next.js", "Real-time", "IoT", "Time-series DB"],
    status: "live",
    role: "Frontend Lead (BCP)",
    duration: "October 2023 – March 2024",
    teamSize: 7,
    overview:
      "The Smart Water Platform is a real-time IoT telemetry and control system for a water utility client, monitoring hundreds of smart meters, valves, and network nodes across a distributed sensor mesh. The platform provides live pressure and flow readings, remote valve control, geospatial leak detection, and predictive alerting based on pressure differential thresholds. I stepped in as the Business Continuity Plan (BCP) frontend lead to stabilise the project and deliver the first production launch under a tight deadline.",
    highlights: [
      "Real-time meter telemetry with 5-second refresh cadence — D3.js time-series charts with live pan/zoom and historical playback",
      "Remote valve control (open/close/throttle) with two-step confirmation dialogs, operator attribution, and full audit trail",
      "Geospatial leak detection overlay on Leaflet map — sensor clusters, severity heatmap, and one-click incident creation",
      "Predictive leak alerts based on configurable pressure differential thresholds with SMS/email dispatch",
      "Responsive dashboards optimised for field engineer tablets — large touch targets, offline map tiles, and low-bandwidth mode",
      "Historical usage pattern visualisation with export to PDF for utility reporting",
      "Role-segregated views: control room operators, field engineers, and management dashboards",
    ],
    metrics: [
      { label: "Leak detection speed", value: "30%↑", description: "Faster response time" },
      { label: "IoT nodes monitored", value: "500+", description: "In real time" },
      { label: "Telemetry refresh", value: "5s", description: "Live data cadence" },
      { label: "Delivery", value: "On time", description: "Under BCP conditions" },
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["Next.js", "TypeScript", "D3.js", "Leaflet.js", "Tailwind CSS"],
      },
      {
        category: "Real-time",
        items: ["WebSockets", "MQTT", "Server-Sent Events"],
      },
      {
        category: "Backend",
        items: ["Spring Boot", "InfluxDB", "PostgreSQL", "Redis"],
      },
      {
        category: "Infrastructure",
        items: ["Kubernetes", "Prometheus", "Grafana", "GitLab CI/CD"],
      },
    ],
    challenges: [
      "High-frequency real-time data without UI jank — D3 chart updates batched with requestAnimationFrame; React render cycle decoupled from WebSocket event loop",
      "WebSocket reconnection under flaky field network conditions — exponential back-off with last-known-state reconciliation on reconnect",
      "Geospatial clustering for dense sensor nodes — dynamic cluster radius based on zoom level to avoid SVG rendering bottlenecks",
      "Low-bandwidth mode for field tablets — graceful degradation to polling with reduced telemetry resolution when offline detection triggers",
    ],
  },
  {
    id: 6,
    slug: "sms-gateway-management-portal",
    title: "SMS Gateway Management Portal",
    des: "Delivered SMS Portal v2 to production. Built Configuration Management Portal for SMS Middleware across IoT platforms — automated onboarding and refactored middleware for reusability and scalability.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/ts.svg", "/re.svg"],
    link: "#",
    tags: ["Next.js", "Spring Boot", "REST APIs", "TypeScript"],
    status: "completed",
    role: "Frontend Developer",
    duration: "January 2023 – March 2023",
    teamSize: 4,
    overview:
      "The SMS Gateway Management Portal consisted of two complementary products: SMS Portal v2 — a modernised interface for managing bulk SMS routing and delivery monitoring — and a Configuration Management Portal for the shared SMS middleware used across all Safaricom IoT products. The Config Portal automated the onboarding of new IoT products onto the SMS gateway, replacing a manual multi-week process that was a recurring bottleneck for platform teams.",
    highlights: [
      "Automated SMS route configuration — new IoT products onboard onto the gateway in under 4 hours via a self-service wizard",
      "SMS template management with versioning, A/B testing support, and one-click rollback",
      "Middleware refactor reducing per-product configuration from bespoke to a shared, parameterised template",
      "Real-time delivery monitoring dashboard — SMS delivery rates, failure categorisation, latency percentiles, and retry queue depth",
      "Bulk import/export of route configurations via CSV for large migration workflows",
      "Webhook management for delivery status callbacks — test, replay, and inspect webhook payloads inline",
    ],
    metrics: [
      { label: "Onboarding time", value: "2 wks → 4h", description: "Manual → automated" },
      { label: "SMS delivery rate", value: "99.5%", description: "Post-optimisation" },
      { label: "Products on middleware", value: "8", description: "IoT products unified" },
      { label: "Config duplication", value: "~0", description: "Shared template model" },
    ],
    techStack: [
      {
        category: "Frontend",
        items: ["Next.js", "TypeScript", "Tailwind CSS", "TanStack Query"],
      },
      {
        category: "Backend",
        items: ["Spring Boot", "MySQL", "REST APIs"],
      },
      {
        category: "Infrastructure",
        items: ["GitLab CI/CD", "Docker", "Nginx"],
      },
    ],
    challenges: [
      "Backwards-compatible middleware refactor with zero downtime — feature-flagged rollout per product with instant rollback capability",
      "Template versioning with atomic rollback — required a snapshot-based versioning scheme at the DB level, exposed through the UI as a visual diff",
      "Webhook payload inspection — built an in-browser JSON diff viewer to compare expected vs. received payloads without leaving the portal",
    ],
  },
];
