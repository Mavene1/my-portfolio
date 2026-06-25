"use client";

import { useState } from "react";
import { skillCategories, highlights } from "@/data";
import { DynamicIcon } from "@/lib/icons";
import { ScrollReveal, StaggerContainer, staggerItem, motion } from "@/components/motion";
import { cn } from "@/lib/utils";

export default function AboutSkills() {
  const [activeCategory, setActiveCategory] = useState(skillCategories[0].category);
  const active = skillCategories.find((c) => c.category === activeCategory)!;

  return (
    <div className="mt-20 space-y-16">
      {/* Highlights row */}
      <StaggerContainer staggerDelay={0.07} className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {highlights.map((h) => (
          <motion.div
            key={h.label}
            variants={staggerItem}
            className="flex flex-col items-center text-center p-5 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-colors"
          >
            <DynamicIcon name={h.icon} className="h-5 w-5 text-purple mb-3" />
            <span className="text-2xl md:text-3xl font-black text-white tracking-tight">{h.value}</span>
            <span className="text-[11px] text-white/40 mt-1.5 leading-tight">{h.label}</span>
          </motion.div>
        ))}
      </StaggerContainer>

      {/* Skills section */}
      <ScrollReveal>
        <h2 className="heading mb-8">
          Core <span className="text-purple">Competencies</span>
        </h2>

        {/* Tab bar */}
        <div className="relative border-b border-white/[0.06] mb-8 overflow-x-auto">
          <div className="flex items-stretch min-w-max">
            {skillCategories.map((cat) => {
              const isActive = activeCategory === cat.category;
              return (
                <button
                  key={cat.category}
                  onClick={() => setActiveCategory(cat.category)}
                  className={cn(
                    "relative flex items-center gap-2 px-4 py-3.5 text-sm transition-colors whitespace-nowrap",
                    isActive ? "text-white" : "text-white/35 hover:text-white/60"
                  )}
                >
                  <DynamicIcon
                    name={cat.icon}
                    className={cn("h-3.5 w-3.5 transition-colors", isActive ? "text-purple" : "text-white/25")}
                  />
                  <span className={cn("font-medium transition-colors", isActive ? "text-white" : "")}>
                    {cat.category}
                  </span>
                  <span className={cn(
                    "text-[10px] px-1.5 py-0.5 rounded-full transition-colors",
                    isActive
                      ? "bg-purple/15 text-purple/80"
                      : "bg-white/[0.04] text-white/25"
                  )}>
                    {cat.skills.length}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="skill-tab-indicator"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-purple rounded-t-full"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.35 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active category content */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="rounded-2xl border border-white/[0.05] bg-white/[0.02] p-6"
        >
          <div className="flex items-center gap-2.5 mb-5">
            <DynamicIcon name={active.icon} className="h-4 w-4 text-purple" />
            <span className="text-sm font-semibold text-white">{active.category}</span>
            <span className="text-xs text-white/30 ml-auto">{active.skills.length} skills</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {active.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center text-xs px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.07] text-white/60 hover:border-purple/30 hover:text-white/90 hover:bg-purple/5 transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </ScrollReveal>
    </div>
  );
}
