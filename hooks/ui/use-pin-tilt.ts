"use client";

import { useState } from "react";

const TILT_IN = "translate(-50%,-50%) rotateX(40deg) scale(0.8)";
const TILT_OUT = "translate(-50%,-50%) rotateX(0deg) scale(1)";
const TILT_DEFAULT = "translate(-50%,-50%) rotateX(0deg)";

export function usePinTilt() {
  const [transform, setTransform] = useState(TILT_DEFAULT);

  return {
    transform,
    onMouseEnter: () => setTransform(TILT_IN),
    onMouseLeave: () => setTransform(TILT_OUT),
  };
}
