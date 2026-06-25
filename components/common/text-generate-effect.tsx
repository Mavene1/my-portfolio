"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useTextGenerate } from "@/hooks/ui/use-text-generate";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const { scope, wordsArray } = useTextGenerate(words);

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className=" dark:text-white text-black leading-snug tracking-wide">
          <motion.div ref={scope}>
            {wordsArray.map((word, idx) => (
              <motion.span
                key={word + idx}
                className={` ${idx > 3 ? "text-purple" : "dark:text-white text-black"} opacity-0`}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
