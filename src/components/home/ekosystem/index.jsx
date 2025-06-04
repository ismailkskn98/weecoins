import React from "react";
import SectionCarousel from "./sectionCarousel";
import { useTranslations } from "next-intl";

export default function Ecosystem() {
  const t = useTranslations("HomePage.ecosystem");
  return (
    <main className="w-full fluid gridContainer pb-20 mt-24 md:mt-32 xl:mt-40">
      <article className="w-full flex items-center justify-center mb-24 md:mb-32 xl:mb-40">
        <div className="flex flex-col items-center justify-center gap-3 max-w-3xl text-center">
          <h2 className="w-full capitalize text-main-white text-3xl sm:text-4xl lg:text-5xl 3xl:text-6xl font-semibold">{t("h2")}</h2>
          <p className="w-full text-sm sm:text-base lg:text-lg text-main-white/80 font-medium">{t("subtitle")}</p>
        </div>
      </article>
      <SectionCarousel />
    </main>
  );
}
