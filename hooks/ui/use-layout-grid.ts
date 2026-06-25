"use client";

import { useState } from "react";
import type { ReactNode } from "react";

type Card = {
  id: number;
  content: ReactNode;
  className: string;
  thumbnail: string;
};

export function useLayoutGrid() {
  const [selected, setSelected] = useState<Card | null>(null);
  const [lastSelected, setLastSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setLastSelected(selected);
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setLastSelected(selected);
    setSelected(null);
  };

  return { selected, lastSelected, handleClick, handleOutsideClick };
}
