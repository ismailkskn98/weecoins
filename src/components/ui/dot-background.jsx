import React from "react";

export function DotBackgroundDemo() {
  return (
    <div className="absolute inset-0 flex h-full w-full items-center justify-center bg-main-black rounded-xl">
      <div className="absolute inset-0 [background-size:20px_20px] [background-image:radial-gradient(#404040_1px,transparent_1px)]" />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-main-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>
  );
}
