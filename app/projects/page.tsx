import type { Metadata } from "next";

import { ProjectsGrid } from "@/features/projects";
import { SectionWrapper } from "@/components/common/section-wrapper";

export const metadata: Metadata = {
  title: "Projects — Mavene Omondi",
  description:
    "Showcasing key engineering projects: IoT Unified Platform, SIM Connectivity Portal, EQMS, Connected Farmers, Smart Water, and more.",
};

export default function ProjectsPage() {
  return (
    <main>
      <SectionWrapper id="projects">
        <ProjectsGrid />
      </SectionWrapper>
    </main>
  );
}
