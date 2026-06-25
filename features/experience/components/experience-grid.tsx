import { workExperience } from "@/data";
import { Building2, Calendar, Layers, Server, Shield, Smartphone, Code2 } from "@/lib/icons";
import type { LucideIcon } from "@/lib/icons";
import { Button } from "@/components/common/moving-borders";
import { Badge } from "@/components/ui/badge";
import { PageHeader } from "@/components/common/page-header";

const roleIcons: Record<string, LucideIcon> = {
  "Frontend Lead & Software Engineer": Layers,
  "Platform, DevSecOps & Observability": Shield,
  "Backend & API Integration": Server,
  "Mobile Developer": Smartphone,
  "IT Consultant Intern": Code2,
  "IT / Telecoms Intern": Server,
};

export default function Experience() {
  return (
    <div className="w-full" id="experience">
      <PageHeader
        title="Work"
        highlight="Experience"
        description="5+ years at Safaricom PLC — one of Africa's largest telcos — across frontend, backend, and platform engineering."
      />

      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-8">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "rgb(4,7,29)",
              backgroundColor: "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex flex-col p-5 lg:p-8 gap-4">
              {/* Header */}
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple/10 border border-purple/20 flex items-center justify-center">
                  {(() => { const Icon = roleIcons[card.title] ?? Code2; return <Icon className="h-5 w-5 text-purple" />; })()}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base md:text-lg font-bold text-white leading-tight">
                    {card.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                    <span className="flex items-center gap-1 text-xs text-white-200">
                      <Building2 className="h-3 w-3" />
                      {card.company}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-white-200">
                      <Calendar className="h-3 w-3" />
                      {card.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-white-100 leading-relaxed line-clamp-3">{card.desc}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {card.tags.slice(0, 5).map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="text-[10px] px-2 py-0.5 bg-[#1a1f3a] border-white/[0.07] text-white-200"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}
