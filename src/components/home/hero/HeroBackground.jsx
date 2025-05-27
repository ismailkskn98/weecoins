"use client";
import React, { useEffect, useState } from "react";
import { useRive, Layout, Fit, Alignment, Cover } from "@rive-app/react-canvas";
export default function HeroBackground() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShouldRender(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  const { rive, RiveComponent } = useRive({
    src: "/rive/hero-bg.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });
  return shouldRender ? <RiveComponent className="fluid absolute inset-0 -z-10 h-full w-full" /> : null;
}
