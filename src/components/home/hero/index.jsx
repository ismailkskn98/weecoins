import React from "react";
import HeroContent from "./heroContent";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <main className="relative h-screen w-full fluid gridContainer">
      <HeroBackground />
      <div className="absolute inset-0 fluid w-full h-full blur-sm bg-main-black/40 -z-10"></div>
      <HeroContent />
    </main>
  );
}
