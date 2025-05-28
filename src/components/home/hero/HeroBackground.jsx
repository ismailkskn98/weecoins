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
    src: "/rive/hero-bg-2.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Cover,
      alignment: Alignment.Center,
    }),
  });
  return shouldRender ? <RiveComponent className="opacity-50 fluid absolute inset-0 -z-20 h-full w-full" /> : null;
}
