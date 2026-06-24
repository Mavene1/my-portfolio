import type { Metadata } from "next";

import { ContactForm, ContactFooter } from "@/features/contact";
import { PageHeader } from "@/components/common/page-header";
import { SectionWrapper } from "@/components/common/section-wrapper";

export const metadata: Metadata = {
  title: "Contact — Mavene Omondi",
  description:
    "Get in touch with Mavene Omondi — Senior Frontend Engineer based in Nairobi, Kenya.",
};

export default function ContactPage() {
  return (
    <main>
      <SectionWrapper id="contact">
        <PageHeader
          title="Let's Build Something"
          highlight="Together"
          description="Have a project in mind, a role to fill, or just want to connect? I'd love to hear from you."
        />
        <ContactForm />
        <div className="mt-20">
          <ContactFooter />
        </div>
      </SectionWrapper>
    </main>
  );
}
