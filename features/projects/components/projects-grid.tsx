"use client";

import Link from "next/link";
import { ArrowUpRight } from "@/lib/icons";
import { projects } from "@/data";
import { PinContainer } from "@/components/common/pin";
import { PageHeader } from "@/components/common/page-header";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/motion";

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

export default function RecentProjects() {
  return (
    <div id="projects">
      <PageHeader
        title="Key Engineering"
        highlight="Projects"
        description="Production systems built at Safaricom PLC — from IoT platforms serving thousands to enterprise internal tools."
      />

      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
        {projects.map((item, i) => (
          <ScrollReveal
            key={item.id}
            delay={i * 0.08}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer
              title={item.tags[0] ?? "View Project"}
              href={item.link === "#" ? undefined : item.link}
            >
              {/* Project image */}
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div
                  className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                  style={{ backgroundColor: "#13162D" }}
                >
                  <img src="/images/bg.png" alt="" aria-hidden />
                </div>
                <img
                  src={item.img}
                  alt={item.title}
                  className="z-10 absolute bottom-0"
                />
                {item.status && (
                  <Badge
                    variant="outline"
                    className={`absolute top-3 right-3 z-20 text-xs font-medium ${statusColors[item.status]}`}
                  >
                    {statusLabels[item.status]}
                  </Badge>
                )}
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-base lg:font-normal font-light text-sm line-clamp-3 mt-2"
                style={{ color: "#BEC1DD" }}
              >
                {item.des}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 mt-3">
                {item.tags.slice(0, 4).map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-[10px] px-2 py-0.5 rounded-full bg-[#1a1f3a] border-white/[0.07] text-white-200"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center justify-between mt-5 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{ transform: `translateX(-${5 * index + 2}px)` }}
                    >
                      <img src={icon} alt="" className="p-2" />
                    </div>
                  ))}
                </div>

                <Link
                  href={`/projects/${item.slug}`}
                  className="flex justify-center items-center gap-1.5 group"
                  onClick={(e) => e.stopPropagation()}
                >
                  <span className="text-sm text-purple group-hover:underline underline-offset-2 transition-all">
                    {item.status === "in-progress" ? "In Progress" : "View Details"}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-purple group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </PinContainer>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
