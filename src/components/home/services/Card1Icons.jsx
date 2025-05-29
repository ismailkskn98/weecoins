"use client";
import React from "react";
import { useRive, Layout, Fit, Alignment, Cover } from "@rive-app/react-canvas";

export default function CardIcon({ src, stateMachines, classNames }) {
  const { rive, RiveComponent } = useRive({
    src: src,
    stateMachines: stateMachines,
    autoplay: true,
    layout: new Layout({
      fit: Fit.Contain,
      alignment: Alignment.Center,
    }),
  });
  return <RiveComponent className={`fluid absolute inset-0 z-10 h-full w-full ${classNames}`} />;
}
