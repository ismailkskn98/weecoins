"use client";
import React from "react";
import { motion } from "motion/react";
import CountUp from "react-countup";

export default function ServiceCards({ cardsItem }) {
  return (
    <main className="fluid gridContainer w-full bg-zinc-900 py-16">
      <article className="grid w-full grid-cols-1 justify-items-center gap-10 2xl:gap-16 3xl:gap-20 sm:grid-cols-2 lg:grid-cols-4">
        {cardsItem.map((card, index) => (
          <motion.div key={index} className="relative flex flex-col items-center gap-8 overflow-hidden rounded-lg border border-white/10 pb-6 pt-5 text-theme-white sm:items-start">
            <div className="relative h-36 w-full pt-8 flex items-center justify-center gap-1 font-semibold text-5xl">
              +<CountUp end={parseInt(card.count)} duration={5} enableScrollSpy scrollSpyOnce />
            </div>
            <div className="flex w-full flex-col items-center gap-1 px-6 sm:items-start">
              <h4 className="text-center text-base font-medium sm:text-start">{card.title}</h4>
              <p className="text-center text-xs leading-6 text-theme-white/80 sm:text-start">{card.description}</p>
            </div>
          </motion.div>
        ))}
      </article>
    </main>
  );
}
