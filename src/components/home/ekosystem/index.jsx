import React from "react";
import SectionCarousel from "./sectionCarousel";

export default function Ecosystem() {
  return (
    <main className="w-full fluid gridContainer pb-20 mt-40">
      <article className="w-full flex items-center justify-center mb-40">
        <div className="flex flex-col items-center justify-center gap-3 max-w-3xl text-center">
          <h2 className="w-full capitalize text-main-white text-6xl font-semibold">WeeCoins Ekosistemi İle Tanışın</h2>
          <p className="w-full text-lg text-main-white/80 font-medium">WeeCoins ekosistemi, iş süreçlerinizi sadeleştirir, gelirlerinizi artırır ve kullanıcılarınıza benzersiz deneyimler sunar.</p>
        </div>
      </article>
      <SectionCarousel />
    </main>
  );
}
