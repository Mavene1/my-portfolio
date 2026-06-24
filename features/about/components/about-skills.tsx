"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { skillCategories, highlights } from "@/data";
import { DynamicIcon } from "@/lib/icons";
import { ScrollReveal, StaggerContainer, staggerItem, motion } from "@/components/motion";

export default function AboutSkills() {
  return (
    <div className="mt-20">
      {/* Highlights row */}
      <StaggerContainer staggerDelay={0.08} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {highlights.map((h) => (
          <motion.div
            key={h.label}
            variants={staggerItem}
            className="flex flex-col items-center text-center p-5 rounded-2xl bg-[#0a0d1f] border border-white/[0.06]"
          >
            <DynamicIcon name={h.icon} className="h-5 w-5 text-purple mb-3" />
            <span className="text-2xl md:text-3xl font-bold text-white">{h.value}</span>
            <span className="text-xs text-white-200 mt-1 leading-tight">{h.label}</span>
          </motion.div>
        ))}
      </StaggerContainer>

      {/* Skills tabs */}
      <ScrollReveal>
        <h2 className="heading mb-8">
          Core <span className="text-purple">Competencies</span>
        </h2>
        <Tabs defaultValue={skillCategories[0].category} className="w-full">
          <TabsList className="flex flex-wrap h-auto gap-2 bg-transparent mb-8 p-0">
            {skillCategories.map((cat) => (
              <TabsTrigger
                key={cat.category}
                value={cat.category}
                className="data-[state=active]:bg-purple data-[state=active]:text-white bg-[#0a0d1f] border border-white/[0.08] text-white-200 rounded-lg px-4 py-2 text-sm transition-all"
              >
                <DynamicIcon name={cat.icon} className="h-3.5 w-3.5 mr-1.5 inline" />
                {cat.category}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((cat) => (
            <TabsContent key={cat.category} value={cat.category}>
              <div className="p-6 rounded-2xl bg-[#0a0d1f] border border-white/[0.06]">
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="border-white/[0.12] bg-[#10132E] text-white-200 hover:border-purple/40 hover:text-white transition-colors text-xs px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </ScrollReveal>
    </div>
  );
}
