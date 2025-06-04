import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import ScrollBackSave from "./scrollBackSave";
import { textLimitCharecter } from "@/utils/textLimitCharecter";
import Image from "next/image";

export default function SuccessStoriesCards({ data }) {
  const sortedData = [...data].sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
  return (
    <section className="w-11/12 3xl:w-10/12 mx-auto grid grid-cols-4 gap-10">
      {sortedData.map(
        (item) =>
          item.image && (
            <BackgroundGradient key={item.id} className="rounded-[22px] bg-white dark:bg-zinc-900 h-full w-full group">
              <span className="inline-block bg-main-black absolute left-1/2 -top-1.5 -translate-x-1/2 w-1/6 h-2 rounded-2xl"></span>
              <div className="relative w-full max-h-[215px] h-full overflow-hidden flex items-center justify-center rounded-t-[22px]">
                <Image src={item.image} alt={item.name} height="400" width="400" className="object-contain object-center w-min h-full" />
                <Image src={item.image} alt={item.name} height="400" width="400" className="absolute inset-0 w-full -z-10 object-cover blur-lg h-full object-center" />
              </div>
              <div className="w-full flex flex-col items-start justify-between gap-3 p-4 sm:p-9 min-h-[230px]">
                <div className="w-full flex-col items-start gap-2">
                  <p className="text-base sm:text-xl text-black dark:text-neutral-200">{item.name}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">{textLimitCharecter(item.body, 80)}</p>
                </div>
                <ScrollBackSave id={item.id} />
              </div>
            </BackgroundGradient>
          )
      )}
    </section>
  );
}
