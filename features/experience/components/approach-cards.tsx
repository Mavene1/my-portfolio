"use client";

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/three/canvas-reveal-effect";
import { PageHeader } from "@/components/common/page-header";

const phases = [
  {
    order: "Phase 1",
    title: "Understand & Architect",
    des: "I start by deeply understanding the problem — business goals, technical constraints, scalability requirements, and user needs. From there I define architectural decisions (ADRs), choose the right patterns (micro-frontend, event-driven, DDD), and align with cross-functional stakeholders before writing a line of code.",
    containerClassName: "bg-emerald-900 rounded-3xl overflow-hidden",
    animationSpeed: 5.1,
  },
  {
    order: "Phase 2",
    title: "Build with Precision",
    des: "Implementation follows architecture. I build incrementally — CI/CD from day one, unit and e2e tests alongside features, security embedded (OWASP, OAuth2, SAST), and performance measured via Core Web Vitals and profiling. Code reviews and mentoring happen throughout.",
    containerClassName: "bg-pink-900 rounded-3xl overflow-hidden",
    colors: [[255, 166, 158], [221, 255, 247]] as number[][],
    dotSize: 2,
    animationSpeed: 3,
  },
  {
    order: "Phase 3",
    title: "Ship, Observe & Improve",
    des: "Deployment is just the beginning. I monitor with Prometheus, Grafana, ELK, and Dynatrace — setting up alerting and runbooks. Post-launch I analyse performance, gather feedback, and drive continuous improvements. L2/L3 incident management and root cause analysis are second nature.",
    containerClassName: "bg-sky-600 rounded-3xl overflow-hidden",
    colors: [[125, 211, 252]] as number[][],
    animationSpeed: 3,
  },
];

export default function Approach() {
  return (
    <section className="w-full">
      <PageHeader
        title="My Engineering"
        highlight="Approach"
        description="How I take ideas from requirements to production — and keep them running reliably."
      />

      <div className="mt-12 flex flex-col lg:flex-row items-center justify-center w-full gap-6">
        {phases.map((phase) => (
          <Card
            key={phase.order}
            title={phase.title}
            icon={<PhaseIcon order={phase.order} />}
            des={phase.des}
          >
            <CanvasRevealEffect
              animationSpeed={phase.animationSpeed}
              containerClassName={phase.containerClassName}
              colors={phase.colors}
              dotSize={phase.dotSize}
            />
          </Card>
        ))}
      </div>
    </section>
  );
}

const Card = ({
  title,
  icon,
  children,
  des,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  des: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
      style={{
        background: "rgb(4,7,29)",
        backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <CornerIcon className="absolute h-10 w-10 -top-3 -left-3 dark:text-white text-black opacity-30" />
      <CornerIcon className="absolute h-10 w-10 -bottom-3 -left-3 dark:text-white text-black opacity-30" />
      <CornerIcon className="absolute h-10 w-10 -top-3 -right-3 dark:text-white text-black opacity-30" />
      <CornerIcon className="absolute h-10 w-10 -bottom-3 -right-3 dark:text-white text-black opacity-30" />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10">
        <div className="text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 min-w-40 mx-auto flex items-center justify-center">
          {icon}
        </div>
        <h2 className="dark:text-white text-center text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4 font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200">
          {title}
        </h2>
        <p className="text-sm opacity-0 group-hover/canvas-card:opacity-100 relative z-10 mt-4 group-hover/canvas-card:text-white text-center group-hover/canvas-card:-translate-y-2 transition duration-200" style={{ color: "#E4ECFF" }}>
          {des}
        </p>
      </div>
    </div>
  );
};

const PhaseIcon = ({ order }: { order: string }) => (
  <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl font-bold text-2xl">
      {order}
    </span>
  </button>
);

const CornerIcon = ({ className, ...rest }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={className} {...rest}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
  </svg>
);
