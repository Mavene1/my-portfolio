import type { Metadata } from "next";

import { AboutGrid, AboutTestimonials, AboutSkills } from "@/features/about";
import { SectionWrapper } from "@/components/common/section-wrapper";

export const metadata: Metadata = {
  title: "About — Mavene Omondi",
  description:
    "Senior Frontend Engineer & Lead at Safaricom PLC. 5+ years architecting scalable IoT platforms, micro-frontends, and full-stack solutions.",
};

export default function AboutPage() {
  return (
    <main>
      <SectionWrapper id="about">
        <AboutGrid />
        <AboutSkills />
      </SectionWrapper>
      <SectionWrapper id="testimonials">
        <AboutTestimonials />
      </SectionWrapper>
    </main>
  );
}
