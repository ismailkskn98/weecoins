"use client";

import React, { useEffect, useRef } from "react";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";

export default function StackedScroll() {
  const cardsRef = useRef([]); // {current: []}

  function handleScroll() {
    const cards = cardsRef.current; // [slide1, slide2, slide3, slide4]

    for (let i = 0; i < cards.length - 1; i++) {
      // i en fazla 2 olabilir
      const card = cards[i];
      const nextCard = cards[i + 1];

      if (!card || !nextCard) continue;

      const nextRect = nextCard.getBoundingClientRect(); // HTML elementinin ekrandaki konumunu ve boyutunu verir. { bottom: 1233 height: 500 left: 568.5 right: 1336.5 top: 733 width: 768 x: 568.5 y: 733}
      const screenHeight = window.innerHeight;

      const percentVisible = 1 - Math.min(nextRect.top / screenHeight, 1);
      const scale = 1 - percentVisible * 0.1;
      const brightness = 1 - percentVisible * 0.4;

      const cardInner = card.querySelector(".card-inner");
      if (cardInner) {
        cardInner.style.transform = `scale(${scale})`;
        cardInner.style.filter = `brightness(${brightness})`;
      }
    }
  }
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const slides = [<Slide1 />, <Slide2 />, <Slide3 />, <Slide4 />];

  return (
    <section className="space-y-28">
      {slides.map((content, i) => (
        <main key={i} ref={(el) => (cardsRef.current[i] = el)} className={`sticky w-full max-w-6xl mx-auto h-[75vh] ${i === slides.length - 1 ? "-mt-28" : ""}`} style={{ top: 80 + i * 50 }}>
          <article className="card-inner h-full flex rounded-xl overflow-hidden bg-white shadow-xl transition-all duration-300">{content}</article>
        </main>
      ))}
    </section>
  );
}
