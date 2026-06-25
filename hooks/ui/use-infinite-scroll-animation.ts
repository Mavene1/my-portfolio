"use client";

import { useEffect, useRef, useState } from "react";

type Direction = "left" | "right";
type Speed = "fast" | "normal" | "slow";

const SPEED_MAP: Record<Speed, string> = {
  fast: "20s",
  normal: "40s",
  slow: "80s",
};

export function useInfiniteScrollAnimation(direction: Direction, speed: Speed) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !scrollerRef.current) return;

    const scrollerContent = Array.from(scrollerRef.current.children);
    scrollerContent.forEach((item) => {
      scrollerRef.current!.appendChild(item.cloneNode(true));
    });

    containerRef.current.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
    containerRef.current.style.setProperty("--animation-duration", SPEED_MAP[speed]);

    setStart(true);
  }, [direction, speed]);

  return { containerRef, scrollerRef, start };
}
