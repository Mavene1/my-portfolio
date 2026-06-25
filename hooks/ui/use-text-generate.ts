"use client";

import { useEffect } from "react";
import { stagger, useAnimate } from "framer-motion";

export function useTextGenerate(words: string) {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate("span", { opacity: 1 }, { duration: 2, delay: stagger(0.2) });
  }, [animate]);

  return { scope, wordsArray };
}
