"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowLeft, ArrowUpRight, Calendar, User, Briefcase,
  CheckCircle, Zap, ExternalLink, Code2, Layers, Shield,
  Server, Database, Cpu, GitBranch,
} from "@/lib/icons";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { FadeIn, FadeUp, ScrollReveal, motion } from "@/components/motion";
import { cn } from "@/lib/utils";

const statusColors: Record<string, string> = {
  "in-progress": "bg-yellow-500/10 text-yellow-400 border-yellow-500/25",
  live: "bg-emerald-500/10 text-emerald-400 border-emerald-500/25",
  completed: "bg-blue-500/10 text-blue-400 border-blue-500/25",
};

const statusLabels: Record<string, string> = {
  "in-progress": "In Progress",
  live: "Live",
  completed: "Completed",
};

const categoryIcons: Record<string, typeof Layers> = {
  Frontend: Layers,
  Architecture: GitBranch,
  "Auth & Security": Shield,
  Infrastructure: Server,
  Backend: Server,
  "Backend Integration": Server,
  "State Management": Cpu,
  "Data & AI": Cpu,
  "Real-time": Zap,
  Mobile: Cpu,
  default: Code2,
};

const categoryColors = [
  "from-purple/20 to-purple/5 border-purple/20",
  "from-blue-500/15 to-blue-500/5 border-blue-500/20",
  "from-emerald-500/15 to-emerald-500/5 border-emerald-500/20",
  "from-orange-500/15 to-orange-500/5 border-orange-500/20",
];

type TabId = "overview" | "tech" | "impact";

export default function ProjectDetail({ project }: { project: Project }) {
  const [activeTab, setActiveTab] = useState<TabId>("overview");

  const tabs: { id: TabId; label: string; icon: typeof Layers; sub: string; hidden?: boolean }[] = [
    {
      id: "overview",
      label: "Overview",
      icon: Layers,
      sub: `${project.highlights?.length ?? 0} highlights`,
    },
    {
      id: "tech",
      label: "Tech Stack",
      icon: Code2,
      sub: `${project.techStack?.length ?? 0} categories`,
    },
    {
      id: "impact",
      label: "Impact",
      icon: Zap,
      sub: `${project.metrics?.length ?? 0} metrics`,
      hidden: !project.metrics?.length,
    },
  ];

  return (
    <div className="space-y-10">
      {/* Back nav */}
      <FadeIn>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors group"
        >
          <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" />
          All Projects
        </Link>
      </FadeIn>

      {/* ── Hero card ─────────────────────────────────── */}
      <FadeUp delay={0.05}>
        <div className="relative rounded-2xl overflow-hidden border border-white/[0.06]">
          {/* layered gradient bg */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0d1030] via-[#000319] to-[#0d1030]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_100%_0%,rgba(203,172,249,0.07)_0%,transparent_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_0%_100%,rgba(99,102,241,0.05)_0%,transparent_70%)]" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-10 p-8 md:p-12">
            {/* Left */}
            <div className="flex-1 space-y-6">
              {/* Status + tags */}
              <div className="flex items-center gap-2.5 flex-wrap">
                {project.status && (
                  <Badge variant="outline" className={`text-[11px] font-semibold tracking-wide ${statusColors[project.status]}`}>
                    {statusLabels[project.status]}
                  </Badge>
                )}
                {project.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="outline" className="text-[11px] bg-white/[0.03] border-white/[0.07] text-white/50">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div>
                <h1 className="text-3xl md:text-4xl lg:text-[2.8rem] font-bold text-white leading-[1.15] tracking-tight mb-4">
                  {project.title}
                </h1>
                <p className="text-white/60 text-base md:text-lg leading-relaxed max-w-2xl">
                  {project.overview ?? project.des}
                </p>
              </div>

              {/* Meta chips */}
              <div className="flex flex-wrap gap-6">
                {project.role && (
                  <div className="flex items-center gap-2.5 text-sm">
                    <div className="w-7 h-7 rounded-lg bg-purple/10 border border-purple/20 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="h-3.5 w-3.5 text-purple" />
                    </div>
                    <span className="text-white/70">{project.role}</span>
                  </div>
                )}
                {project.duration && (
                  <div className="flex items-center gap-2.5 text-sm">
                    <div className="w-7 h-7 rounded-lg bg-purple/10 border border-purple/20 flex items-center justify-center flex-shrink-0">
                      <Calendar className="h-3.5 w-3.5 text-purple" />
                    </div>
                    <span className="text-white/70">{project.duration}</span>
                  </div>
                )}
                {project.teamSize && (
                  <div className="flex items-center gap-2.5 text-sm">
                    <div className="w-7 h-7 rounded-lg bg-purple/10 border border-purple/20 flex items-center justify-center flex-shrink-0">
                      <User className="h-3.5 w-3.5 text-purple" />
                    </div>
                    <span className="text-white/70">{project.teamSize} engineers</span>
                  </div>
                )}
              </div>

              {/* Links */}
              {(project.liveUrl || project.githubUrl) && (
                <div className="flex flex-wrap gap-3">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-purple border border-purple/25 rounded-full px-4 py-2 bg-purple/5 hover:bg-purple/10 transition-colors"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live Site
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-white/50 border border-white/[0.08] rounded-full px-4 py-2 hover:bg-white/[0.04] transition-colors"
                    >
                      <Code2 className="h-3.5 w-3.5" />
                      Source
                    </a>
                  )}
                </div>
              )}
            </div>

            {/* Right: project image */}
            <div className="lg:w-64 xl:w-72 flex-shrink-0 flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-[240px] rounded-2xl overflow-hidden bg-[#0d1030] border border-white/[0.06] shadow-xl">
                <img src="/images/bg.png" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-40" />
                <img
                  src={project.img}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-contain p-8 z-10 drop-shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </FadeUp>

      {/* ── Custom tab control ─────────────────────────── */}
      <FadeUp delay={0.1}>
        {/* Tab bar */}
        <div className="relative border-b border-white/[0.06]">
          <div className="flex items-stretch gap-0">
            {tabs.filter((t) => !t.hidden).map((tab) => {
              const isActive = activeTab === tab.id;
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "relative flex flex-col items-start gap-0.5 px-5 py-4 text-left transition-colors duration-200 min-w-[7rem]",
                    isActive ? "text-white" : "text-white/35 hover:text-white/65"
                  )}
                >
                  <div className="flex items-center gap-2">
                    <Icon className={cn("h-4 w-4 transition-colors", isActive ? "text-purple" : "text-white/25")} />
                    <span className="text-sm font-semibold">{tab.label}</span>
                  </div>
                  <span className={cn("text-[11px] ml-6 transition-colors", isActive ? "text-white/40" : "text-white/20")}>
                    {tab.sub}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-purple rounded-t-full"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.35 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab content */}
        <div className="pt-8">
          {/* ── Overview ── */}
          {activeTab === "overview" && (
            <div className="grid lg:grid-cols-5 gap-6">
              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <ScrollReveal className="lg:col-span-3">
                  <div className="rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent p-6 h-full">
                    <div className="flex items-center gap-2.5 mb-6">
                      <div className="w-7 h-7 rounded-lg bg-purple/10 border border-purple/20 flex items-center justify-center">
                        <Zap className="h-3.5 w-3.5 text-purple" />
                      </div>
                      <h2 className="font-semibold text-white">Key Highlights</h2>
                      <Badge variant="outline" className="ml-auto text-[10px] bg-white/[0.03] border-white/[0.07] text-white/40">
                        {project.highlights.length}
                      </Badge>
                    </div>
                    <ul className="space-y-3.5">
                      {project.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 group">
                          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mt-0.5">
                            <CheckCircle className="h-3 w-3 text-emerald-400" />
                          </div>
                          <span className="text-white/60 text-sm leading-relaxed group-hover:text-white/80 transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              )}

              {/* Challenges */}
              {project.challenges && project.challenges.length > 0 && (
                <ScrollReveal delay={0.06} className="lg:col-span-2">
                  <div className="rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent p-6 h-full">
                    <div className="flex items-center gap-2.5 mb-6">
                      <div className="w-7 h-7 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                        <ArrowUpRight className="h-3.5 w-3.5 text-orange-400" />
                      </div>
                      <h2 className="font-semibold text-white">Engineering Challenges</h2>
                    </div>
                    <ul className="space-y-4">
                      {project.challenges.map((item, i) => (
                        <li key={i} className="relative pl-4 text-sm text-white/55 leading-relaxed hover:text-white/75 transition-colors">
                          <span className="absolute left-0 top-[0.45rem] w-1.5 h-1.5 rounded-full bg-orange-500/40" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              )}
            </div>
          )}

          {/* ── Tech Stack ── */}
          {activeTab === "tech" && (
            <div className="space-y-6">
              {project.techStack && project.techStack.length > 0 ? (
                <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">
                  {project.techStack.map((cat, i) => {
                    const Icon = categoryIcons[cat.category] ?? categoryIcons.default;
                    const colorClass = categoryColors[i % categoryColors.length];
                    return (
                      <ScrollReveal key={cat.category} delay={i * 0.05}>
                        <div className={cn("rounded-2xl border bg-gradient-to-b p-5 h-full", colorClass)}>
                          <div className="flex items-center gap-2.5 mb-4">
                            <Icon className="h-4 w-4 text-white/60" />
                            <span className="text-xs font-bold uppercase tracking-widest text-white/50">{cat.category}</span>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {cat.items.map((item) => (
                              <span
                                key={item}
                                className="inline-flex items-center text-[11px] px-2.5 py-1 rounded-full bg-white/[0.05] border border-white/[0.08] text-white/70 hover:border-white/20 hover:text-white transition-colors"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </ScrollReveal>
                    );
                  })}
                </div>
              ) : (
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-sm bg-white/[0.03] border-white/[0.08] text-white/60">
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              {/* Icon row */}
              {project.iconLists.length > 0 && (
                <ScrollReveal delay={0.15}>
                  <div className="flex items-center gap-4 pt-2">
                    <span className="text-[11px] text-white/25 uppercase tracking-widest whitespace-nowrap">Stack</span>
                    <div className="flex-1 h-px bg-white/[0.05]" />
                    <div className="flex items-center gap-2">
                      {project.iconLists.map((icon, index) => (
                        <div
                          key={index}
                          className="w-9 h-9 rounded-xl border border-white/[0.08] bg-[#0d1030] flex justify-center items-center hover:border-white/20 transition-colors"
                        >
                          <img src={icon} alt="" className="w-5 h-5 object-contain" />
                        </div>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              )}
            </div>
          )}

          {/* ── Impact ── */}
          {activeTab === "impact" && project.metrics && project.metrics.length > 0 && (
            <div className="space-y-6">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {project.metrics.map((metric, i) => (
                  <ScrollReveal key={metric.label} delay={i * 0.06} className="h-full">
                    <div className="rounded-2xl border border-white/[0.06] bg-gradient-to-b from-white/[0.03] to-transparent p-6 text-center group hover:border-purple/20 transition-colors h-full flex flex-col justify-center">
                      <p className="text-4xl md:text-5xl font-black text-white tracking-tight leading-tight mb-2 group-hover:text-purple transition-colors">
                        {metric.value}
                      </p>
                      <p className="text-sm font-semibold text-white/70 mb-1">{metric.label}</p>
                      {metric.description && (
                        <p className="text-xs text-white/35">{metric.description}</p>
                      )}
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={0.12}>
                <div className="rounded-2xl border border-white/[0.05] bg-white/[0.02] p-5">
                  <p className="text-xs text-white/30 leading-relaxed">
                    Metrics represent measurable outcomes observed post-launch based on internal monitoring,
                    stakeholder reporting, and system telemetry. Percentage improvements are relative to the
                    baseline system or process they replaced.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          )}
        </div>
      </FadeUp>

      {/* Footer nav */}
      <FadeUp delay={0.15}>
        <Separator className="bg-white/[0.05]" />
        <div className="flex items-center justify-between pt-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors group"
          >
            <ArrowLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" />
            All Projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm text-purple hover:text-purple/70 transition-colors"
          >
            Discuss this project
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </FadeUp>
    </div>
  );
}
