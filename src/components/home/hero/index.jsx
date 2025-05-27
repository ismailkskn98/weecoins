import React from "react";
import HeroContent from "./heroContent";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <main className="relative min-h-[calc(100vh-73px)] w-full fluid gridContainer">
      <HeroBackground />
      <HeroContent />
    </main>
  );
}
