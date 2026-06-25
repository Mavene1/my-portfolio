"use client";

import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Calendar, User, Briefcase, CheckCircle, Zap, ExternalLink, Code2 } from "@/lib/icons";
import type { Project } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FadeIn, FadeUp, ScrollReveal } from "@/components/motion";

const statusColors: Record<string, string> = {
  "in-progress": "bg-yellow-500/15 text-yellow-400 border-yellow-500/30",
  live: "bg-green-500/15 text-green-400 border-green-500/30",
  completed: "bg-blue-500/15 text-blue-400 border-blue-500/30",
};

const statusLabels: Record<string, string> = {
  "in-progress": "In Progress",
  live: "Live",
  completed: "Completed",
};

export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <div className="space-y-10">
      {/* Back navigation */}
      <FadeIn>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm text-white-200 hover:text-purple transition-colors group"
        >
          <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
          All Projects
        </Link>
      </FadeIn>

      {/* Hero */}
      <FadeUp delay={0.05}>
        <div className="relative rounded-2xl overflow-hidden border border-white/[0.07] bg-gradient-to-br from-[#0c0e23] via-[#000319] to-[#0c0e23]">
          {/* background accent */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(203,172,249,0.08)_0%,_transparent_60%)] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-8 p-8 md:p-12">
            {/* Left: text */}
            <div className="flex-1 space-y-5">
              <div className="flex items-center gap-3 flex-wrap">
                {project.status && (
                  <Badge
                    variant="outline"
                    className={`text-xs font-medium ${statusColors[project.status]}`}
                  >
                    {statusLabels[project.status]}
                  </Badge>
                )}
                {project.tags.slice(0, 3).map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-[11px] bg-white/[0.04] border-white/[0.08] text-white-200"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {project.title}
              </h1>

              <p className="text-white-200 text-base md:text-lg leading-relaxed max-w-2xl">
                {project.overview ?? project.des}
              </p>

              {/* Meta row */}
              <div className="flex flex-wrap gap-5 pt-2">
                {project.role && (
                  <div className="flex items-center gap-2 text-sm text-white-200">
                    <Briefcase className="h-4 w-4 text-purple flex-shrink-0" />
                    <span>{project.role}</span>
                  </div>
                )}
                {project.duration && (
                  <div className="flex items-center gap-2 text-sm text-white-200">
                    <Calendar className="h-4 w-4 text-purple flex-shrink-0" />
                    <span>{project.duration}</span>
                  </div>
                )}
                {project.teamSize && (
                  <div className="flex items-center gap-2 text-sm text-white-200">
                    <User className="h-4 w-4 text-purple flex-shrink-0" />
                    <span>{project.teamSize} engineers</span>
                  </div>
                )}
              </div>

              {/* External links */}
              <div className="flex flex-wrap gap-3 pt-1">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-purple border border-purple/30 rounded-full px-4 py-1.5 hover:bg-purple/10 transition-colors"
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
                    className="inline-flex items-center gap-1.5 text-sm text-white-200 border border-white/10 rounded-full px-4 py-1.5 hover:bg-white/5 transition-colors"
                  >
                    <Code2 className="h-3.5 w-3.5" />
                    Source
                  </a>
                )}
              </div>
            </div>

            {/* Right: project image */}
            <div className="lg:w-72 xl:w-80 flex-shrink-0 flex items-center justify-center">
              <div className="relative w-full aspect-square max-w-[280px] rounded-xl overflow-hidden bg-[#13162D] border border-white/[0.06]">
                <img src="/images/bg.png" alt="" aria-hidden className="absolute inset-0 w-full h-full object-cover opacity-60" />
                <img
                  src={project.img}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-contain p-6 z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </FadeUp>

      {/* Tabs: Overview / Tech Stack / Impact */}
      <FadeUp delay={0.1}>
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="bg-[#0c0e23] border border-white/[0.07] rounded-xl p-1 h-auto gap-1 mb-8">
            <TabsTrigger
              value="overview"
              className="rounded-lg text-sm data-[state=active]:bg-purple/20 data-[state=active]:text-purple text-white-200"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="tech"
              className="rounded-lg text-sm data-[state=active]:bg-purple/20 data-[state=active]:text-purple text-white-200"
            >
              Tech Stack
            </TabsTrigger>
            {project.metrics && project.metrics.length > 0 && (
              <TabsTrigger
                value="impact"
                className="rounded-lg text-sm data-[state=active]:bg-purple/20 data-[state=active]:text-purple text-white-200"
              >
                Impact
              </TabsTrigger>
            )}
          </TabsList>

          {/* ── Overview ─────────────────────────────── */}
          <TabsContent value="overview" className="space-y-6 mt-0">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Highlights */}
              {project.highlights && project.highlights.length > 0 && (
                <ScrollReveal className="lg:col-span-2">
                  <div className="rounded-xl border border-white/[0.07] bg-[#0c0e23]/60 p-6 h-full">
                    <div className="flex items-center gap-2 mb-5">
                      <Zap className="h-4 w-4 text-purple" />
                      <h2 className="font-semibold text-white text-lg">Key Highlights</h2>
                    </div>
                    <ul className="space-y-3">
                      {project.highlights.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-purple mt-0.5 flex-shrink-0" />
                          <span className="text-white-200 text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              )}

              {/* Challenges */}
              {project.challenges && project.challenges.length > 0 && (
                <ScrollReveal delay={0.05}>
                  <div className="rounded-xl border border-white/[0.07] bg-[#0c0e23]/60 p-6 h-full">
                    <div className="flex items-center gap-2 mb-5">
                      <ArrowUpRight className="h-4 w-4 text-purple" />
                      <h2 className="font-semibold text-white text-lg">Engineering Challenges</h2>
                    </div>
                    <ul className="space-y-4">
                      {project.challenges.map((item, i) => (
                        <li key={i} className="text-sm text-white-200 leading-relaxed border-l-2 border-purple/30 pl-4">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </ScrollReveal>
              )}
            </div>
          </TabsContent>

          {/* ── Tech Stack ────────────────────────────── */}
          <TabsContent value="tech" className="mt-0">
            {project.techStack && project.techStack.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {project.techStack.map((category, i) => (
                  <ScrollReveal key={category.category} delay={i * 0.06}>
                    <div className="rounded-xl border border-white/[0.07] bg-[#0c0e23]/60 p-5 h-full">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-purple mb-4">
                        {category.category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {category.items.map((item) => (
                          <Badge
                            key={item}
                            variant="outline"
                            className="text-xs bg-white/[0.03] border-white/[0.08] text-white-200 font-normal"
                          >
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {project.tags.map((tag, i) => (
                  <ScrollReveal key={tag} delay={i * 0.06}>
                    <div className="rounded-xl border border-white/[0.07] bg-[#0c0e23]/60 p-5 flex items-center justify-center">
                      <Badge
                        variant="outline"
                        className="text-sm bg-white/[0.03] border-white/[0.08] text-white-200 font-normal"
                      >
                        {tag}
                      </Badge>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            )}

            {/* Tech icon row */}
            {project.iconLists.length > 0 && (
              <div className="mt-6 flex items-center gap-3">
                <span className="text-xs text-white-200 uppercase tracking-wider">Stack icons</span>
                <Separator className="flex-1 bg-white/[0.06]" />
                <div className="flex items-center gap-2">
                  {project.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[0.15] rounded-full bg-[#0c0e23] w-10 h-10 flex justify-center items-center"
                    >
                      <img src={icon} alt="" className="p-2 w-full h-full" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </TabsContent>

          {/* ── Impact ─────────────────────────────────── */}
          {project.metrics && project.metrics.length > 0 && (
            <TabsContent value="impact" className="mt-0">
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                {project.metrics.map((metric, i) => (
                  <ScrollReveal key={metric.label} delay={i * 0.06}>
                    <div className="rounded-xl border border-white/[0.07] bg-[#0c0e23]/60 p-6 text-center h-full">
                      <p className="text-3xl md:text-4xl font-bold text-purple mb-1">{metric.value}</p>
                      <p className="text-sm font-medium text-white mb-1">{metric.label}</p>
                      {metric.description && (
                        <p className="text-xs text-white-200">{metric.description}</p>
                      )}
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal delay={0.1}>
                <div className="rounded-xl border border-white/[0.07] bg-[#0c0e23]/60 p-6">
                  <h2 className="font-semibold text-white mb-3">About these numbers</h2>
                  <p className="text-white-200 text-sm leading-relaxed">
                    Metrics represent measurable outcomes observed post-launch based on internal monitoring,
                    stakeholder reporting, and system telemetry. Percentage improvements are relative to the
                    baseline system or process they replaced.
                  </p>
                </div>
              </ScrollReveal>
            </TabsContent>
          )}
        </Tabs>
      </FadeUp>

      {/* Footer nav */}
      <FadeUp delay={0.15}>
        <Separator className="bg-white/[0.06]" />
        <div className="flex items-center justify-between pt-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm text-white-200 hover:text-purple transition-colors group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
            All Projects
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-sm text-purple hover:text-purple/80 transition-colors"
          >
            Discuss this project
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </FadeUp>
    </div>
  );
}
