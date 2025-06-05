import React from "react";
import OurDonors from "./ourDonors";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function WeelifeMain({ children }) {
  const t = useTranslations("WeelifePage");

  return (
    <main className="w-full fluid gridContainer pt-44 pb-10">
      <article className="max-w-7xl mx-auto flex items-start gap-10 pb-28">
        <div className="w-full flex flex-col items-start gap-5">
          <h1 className="text-lg md:text-5xl text-main-white font-medium max-w-4xl capitalize">{t("h1")}</h1>
          <p className="text-main-white/80 text-sm lg:text-base w-full">{t("content")}</p>
          <p className="text-main-white/80 text-sm lg:text-base w-full">{t("content2")}</p>
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
          {children}

        </div>
      </section>
    </main>
  );
}
