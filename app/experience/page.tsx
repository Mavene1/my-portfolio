import type { Metadata } from "next";

import { ExperienceGrid, ApproachCards } from "@/features/experience";
import { SectionWrapper } from "@/components/common/section-wrapper";

export const metadata: Metadata = {
  title: "Experience — Mavene Omondi",
  description:
    "5+ years of professional experience at Safaricom PLC — Frontend Lead, Backend Engineer, Platform & DevSecOps.",
};

export default function ExperiencePage() {
  return (
    <main>
      <SectionWrapper id="experience">
        <ExperienceGrid />
      </SectionWrapper>
      <SectionWrapper id="approach">
        <ApproachCards />
      </SectionWrapper>
    </main>
  );
}
