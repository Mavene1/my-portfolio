import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { projects } from "@/data";
import { ProjectDetail } from "@/features/projects";
import { SectionWrapper } from "@/components/common/section-wrapper";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} — Mavene Omondi`,
    description: project.overview ?? project.des,
    openGraph: {
      title: `${project.title} — Mavene Omondi`,
      description: project.overview ?? project.des,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  return (
    <main>
      <SectionWrapper id="project-detail">
        <ProjectDetail project={project} />
      </SectionWrapper>
    </main>
  );
}
