import React from "react";
import HeroContent from "./heroContent";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <main className="relative h-screen w-full fluid gridContainer">
      <HeroBackground />
      <HeroContent />
    </main>
  );
}
