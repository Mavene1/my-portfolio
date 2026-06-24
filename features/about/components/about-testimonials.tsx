"use client";

import { techStack, testimonials } from "@/data";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { InfiniteMovingCards } from "@/components/common/infinite-cards";

const Clients = () => {
  return (
    <section id="testimonials" className="py-20">
      <h1 className="heading">
        Kind words from
        <span className="text-purple"> colleagues &amp; collaborators</span>
      </h1>

      <div className="flex flex-col items-center max-lg:mt-10">
        <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 max-lg:mt-10">
          {techStack.map((tech) => (
            <Badge
              key={tech.id}
              variant="outline"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#10132E] border-white/[0.05] text-white-100 hover:border-white/[0.15] transition-colors h-auto"
            >
              <img src={tech.img} alt={tech.name} className="w-5 h-5 object-contain" />
              <span className="text-sm">{tech.name}</span>
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
