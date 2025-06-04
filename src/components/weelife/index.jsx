import React from "react";
import OurDonors from "./ourDonors";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import Image from "next/image";

export default function WeelifeMain() {
  const testimonials = [
    {
      quote:
        "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
    },
    {
      quote:
        "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
      name: "William Shakespeare",
      title: "Hamlet",
    },
    {
      quote: "All that we see or seem is but a dream within a dream.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
    },
    {
      quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
    },
    {
      quote:
        "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
      name: "Herman Melville",
      title: "Moby-Dick",
    },
  ];
  return (
    <main className="w-full fluid gridContainer pt-44 pb-10">
      <article className="max-w-7xl mx-auto flex items-start gap-10 pb-28">
        <div className="w-full flex flex-col items-start gap-5">
          <h1 className="text-lg md:text-5xl text-black dark:text-white font-medium max-w-4xl">Weecoins Hakkımızda</h1>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm lg:text-base w-full">
            Weecoins, Weegold ağı üzerinde çalışan, çok yönlü ve güçlü bir kripto varlıktır. Alışverişten akıllı sözleşmelere, staking'den yapay zekâ destekli uygulamalara kadar geniş bir kullanım alanıyla, sadece bir
            yatırım aracı değil, dijital ekonominin merkezinde yer alan bir ekosistem bileşenidir.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative overflow-hidden rounded-xl border-2 border-zinc-800">
            <Image src="/images/kurban-bagisi-3.jpg" alt="weecoins kurban yardımı" width={600} height={550} className="w-full h-full rounded-xl object-contain object-center" />
          </div>
          <div className="relative">
            <Image src="/images/kurban-bagisi-4.jpg" alt="weecoins kurban yardımı" width={600} height={550} className="w-full h-full rounded-xl object-contain object-center" />
          </div>
        </div>
      </article>
      <section className="w-full max-w-7xl mx-auto flex flex-col items-start gap-24">
        <OurDonors />
        <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards items={testimonials} direction="right" speed="slow" />
        </div>
      </section>
    </main>
  );
}
