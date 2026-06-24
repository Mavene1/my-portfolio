"use client";

import Link from "next/link";
import { Spotlight } from "@/components/common/spotlight";
import { TextGenerateEffect } from "@/components/common/text-generate-effect";
import MagicButton from "@/components/common/magic-button";
import { Badge } from "@/components/ui/badge";
import { MoveRight, MapPin, Mail } from "@/lib/icons";
import { FadeUp, StaggerContainer, staggerItem, motion } from "@/components/motion";

const ROLES = [
  "Senior Frontend Engineer",
  "Frontend Lead",
  "React / Next.js Architect",
  "Micro-frontend Specialist",
];

const BADGES = [
  { icon: "💼", label: "Safaricom PLC" },
  { icon: "📍", label: "Nairobi, Kenya" },
  { icon: "⭐", label: "5+ Years Experience" },
  { icon: "🎓", label: "First Class Honours, JKUAT" },
];

export default function Hero() {
  return (
    <div className="min-h-screen pb-20 pt-32" id="home">
      {/* Spotlights */}
      <div>
        <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen" fill="white" />
        <Spotlight className="h-[80vh] w-[50vw] top-10 left-full" fill="purple" />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      {/* Background grid */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2] absolute top-0 left-0 flex items-center justify-center">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20 min-h-[calc(100vh-8rem)]">
        {/* Text content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl">
          <FadeUp delay={0.1}>
            <div className="flex items-center gap-2 mb-4 text-blue-100 text-xs uppercase tracking-widest font-medium">
              <MapPin className="h-3.5 w-3.5" />
              <span>Nairobi, Kenya</span>
              <span className="mx-2 opacity-40">·</span>
              <span>Open to global opportunities</span>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-2">
              <span className="text-white">Hi, I&apos;m </span>
              <span className="text-purple">Mavene Omondi</span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.3}>
            <TextGenerateEffect
              words="Senior Frontend Engineer · React / Next.js · Frontend Lead · Micro-frontends"
              className="text-base md:text-lg lg:text-xl text-white-200 mb-6 font-normal"
            />
          </FadeUp>

          <FadeUp delay={0.4}>
            <p className="text-white-100 text-sm md:text-base leading-relaxed mb-8 max-w-xl">
              Frontend Engineer and Lead with <strong className="text-white">5+ years at Safaricom PLC</strong> —
              architecting scalable IoT platforms, micro-frontend shells, and high-performance
              full-stack applications across Africa&apos;s largest telco.
            </p>
          </FadeUp>

          {/* CTAs */}
          <FadeUp delay={0.5}>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8">
              <Link href="/projects">
                <MagicButton
                  title="View Projects"
                  icon={<MoveRight className="h-4 w-4" />}
                  position="right"
                />
              </Link>
              <Link href="/contact">
                <MagicButton
                  title="Let's Talk"
                  icon={<Mail className="h-4 w-4" />}
                  position="right"
                  otherClasses="!bg-[#161A31]"
                />
              </Link>
            </div>
          </FadeUp>

          {/* Badges */}
          <StaggerContainer staggerDelay={0.06} className="flex flex-wrap gap-2 justify-center lg:justify-start">
            {BADGES.map((badge) => (
              <motion.div key={badge.label} variants={staggerItem}>
                <Badge
                  variant="outline"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#10132E] border-white/[0.06] text-white-200 text-xs"
                >
                  <span>{badge.icon}</span>
                  <span>{badge.label}</span>
                </Badge>
              </motion.div>
            ))}
          </StaggerContainer>
        </div>

        {/* Photo */}
        <FadeUp delay={0.3} className="flex-shrink-0">
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-purple/20 to-blue-100/10 blur-2xl scale-110" />
            <img
              src="/photo4min.jpg"
              alt="Mavene Omondi"
              className="relative lg:w-72 md:w-56 w-44 rounded-2xl shadow-2xl border border-white/[0.08] object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
            />
            {/* Status badge */}
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full bg-[#0a0d1f] border border-white/[0.1] text-xs text-white-200 whitespace-nowrap shadow-xl">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
              </span>
              Available for new roles
            </div>
          </div>
        </FadeUp>
      </div>

      {/* Scroll indicator */}
      <FadeUp delay={0.8} className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2">
        <span className="text-white-200 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent"
        />
      </FadeUp>
    </div>
  );
}
