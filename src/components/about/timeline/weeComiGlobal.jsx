"use client";
import React, { useEffect, useState } from "react";
import { useRive, Layout, Fit, Alignment, Cover } from "@rive-app/react-canvas";
export default function WeeComiGlobal() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShouldRender(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  const { rive, RiveComponent } = useRive({
    src: "/rive/weecomi-global.riv",
    stateMachines: "state_main",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });
  return shouldRender ? <RiveComponent className="absolute inset-0 h-full w-full" /> : null;
}
