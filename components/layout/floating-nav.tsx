"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu } from "@/lib/icons";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { navItems, socialMedia } from "@/data";

export function FloatingNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="fixed top-0 inset-x-0 z-[5000]"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-10 py-4">
        <div
          className={cn(
            "flex items-center justify-between px-4 sm:px-6 py-3 rounded-2xl transition-all duration-300",
            scrolled
              ? "bg-[rgba(7,10,26,0.92)] backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.5)]"
              : "bg-[rgba(7,10,26,0.60)] backdrop-blur-md border border-white/[0.05]"
          )}
        >
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#cbacf9] to-[#6366f1] flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:shadow-[#cbacf9]/25 transition-shadow duration-300">
              MO
            </div>
            <span className="hidden sm:block text-white/70 font-medium text-sm tracking-wide group-hover:text-white transition-colors duration-200">
              Mavene Omondi
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navItems.map((item) => {
              const isActive = pathname === item.link;
              return (
                <Link
                  key={item.link}
                  href={item.link}
                  className={cn(
                    "relative px-4 py-2 text-sm font-medium rounded-xl transition-colors duration-200",
                    isActive
                      ? "text-white"
                      : "text-white/45 hover:text-white/80 hover:bg-white/[0.05]"
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-pill"
                      className="absolute inset-0 rounded-xl bg-white/[0.08] border border-white/[0.1]"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                    />
                  )}
                  <span className="relative z-10">{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right: CTA + mobile trigger */}
          <div className="flex items-center gap-2">
            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center px-4 py-2 rounded-full bg-[#cbacf9] text-black text-sm font-semibold hover:bg-[#cbacf9]/85 transition-colors duration-200"
            >
              Hire Me
            </Link>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-white/60 hover:text-white hover:bg-white/[0.07] rounded-xl"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-[#070a1a] border-white/[0.07] w-72 p-6"
              >
                <div className="flex items-center gap-3 mb-6 pt-2">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#cbacf9] to-[#6366f1] flex items-center justify-center text-white font-bold text-sm">
                    MO
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm">Mavene Omondi</p>
                    <p className="text-white/40 text-xs">Senior Frontend Engineer</p>
                  </div>
                </div>

                <Separator className="bg-white/[0.06] mb-5" />

                <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
                  {navItems.map((item) => {
                    const isActive = pathname === item.link;
                    return (
                      <Link
                        key={item.link}
                        href={item.link}
                        className={cn(
                          "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all",
                          isActive
                            ? "bg-white/[0.07] text-white border border-white/[0.1]"
                            : "text-white/50 hover:text-white hover:bg-white/[0.04]"
                        )}
                      >
                        {item.name}
                        {isActive && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#cbacf9]" />
                        )}
                      </Link>
                    );
                  })}
                </nav>

                <Separator className="bg-white/[0.06] my-5" />

                <div>
                  <p className="text-white/30 text-xs uppercase tracking-widest mb-3">Connect</p>
                  <div className="flex gap-2">
                    {socialMedia.map((s) => (
                      <a
                        key={s.id}
                        href={s.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.name}
                        className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center hover:border-[#cbacf9]/40 hover:bg-white/[0.08] transition-all"
                      >
                        <img src={s.img} alt={s.name} width={15} height={15} />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-8">
                  <Link
                    href="/contact"
                    className="flex items-center justify-center w-full px-4 py-3 rounded-full bg-[#cbacf9] text-black text-sm font-semibold hover:bg-[#cbacf9]/85 transition-colors"
                  >
                    Hire Me
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
