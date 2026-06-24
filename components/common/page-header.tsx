import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/motion";

interface PageHeaderProps {
  title: string;
  highlight?: string;
  description?: string;
  className?: string;
}

export function PageHeader({ title, highlight, description, className }: PageHeaderProps) {
  return (
    <ScrollReveal className={cn("text-center mb-16", className)}>
      <h1 className="heading">
        {title}
        {highlight && <span className="text-purple"> {highlight}</span>}
      </h1>
      {description && (
        <p className="text-white-200 mt-4 max-w-2xl mx-auto text-base md:text-lg">
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
