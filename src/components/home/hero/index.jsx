import React from "react";
import HeroContent from "./heroContent";
import HeroBackground from "./HeroBackground";

export default function Hero() {
  return (
    <main className="relative h-[75vh] md:h-screen w-full fluid gridContainer overflow-hidden">
      <HeroBackground />
      <HeroContent />
    </main>
  );
}
