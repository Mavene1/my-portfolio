import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { navItems, socialMedia } from "@/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.05] bg-black-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4 w-fit group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#cbacf9] to-[#6366f1] flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:shadow-[#cbacf9]/20 transition-shadow">
                MO
              </div>
              <span className="text-white font-semibold text-sm">Mavene Omondi</span>
            </Link>
            <p className="text-white/40 text-sm leading-relaxed max-w-[220px]">
              Senior Frontend Engineer & Lead building scalable platforms at Safaricom PLC, Nairobi.
            </p>
          </div>

          {/* Pages */}
          <div>
            <p className="text-white/50 text-xs uppercase tracking-widest font-medium mb-4">Pages</p>
            <nav className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.link}
                  href={item.link}
                  className="text-white/40 hover:text-white text-sm transition-colors w-fit"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="text-white/50 text-xs uppercase tracking-widest font-medium mb-4">Connect</p>
            <div className="flex gap-2 mb-4">
              {socialMedia.map((s) => (
                <a
                  key={s.id}
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center hover:border-[#cbacf9]/40 hover:bg-white/[0.07] transition-all"
                >
                  <img src={s.img} alt={s.name} width={15} height={15} />
                </a>
              ))}
            </div>
            <a
              href="mailto:maveneomondi111@gmail.com"
              className="text-white/40 hover:text-[#cbacf9] text-sm transition-colors"
            >
              maveneomondi111@gmail.com
            </a>
          </div>
        </div>

        <Separator className="bg-white/[0.05] mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/25">
          <p>© {new Date().getFullYear()} Mavene Omondi · All rights reserved</p>
          <p>Built with Next.js 16 · TypeScript · Tailwind CSS 4</p>
        </div>
      </div>
    </footer>
  );
}
