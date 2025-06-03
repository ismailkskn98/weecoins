"use client";
import React, { useEffect, useState } from "react";
import { useRive, Layout, Fit, Alignment, Cover } from "@rive-app/react-canvas";

export default function HandHold() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShouldRender(true), 500);
    return () => clearTimeout(timeout);
  }, []);

  const { rive, RiveComponent } = useRive({
    src: "/rive/hand.riv",
    stateMachines: "State Machine 1",
    autoplay: true,
    layout: new Layout({
      fit: Fit.Fill,
      alignment: Alignment.Center,
    }),
  });
  return shouldRender ? <RiveComponent className="absolute right-0 top-1 h-24 w-24 z-20" /> : null;
}
