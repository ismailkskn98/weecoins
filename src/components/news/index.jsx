import React from "react";
import NewspapersCarousel from "./NewspapersCarousel";
import { useTranslations } from "next-intl";

export default function NewsMain({ children }) {
  const t = useTranslations("NewsPage");
  return (
    <main className="w-full fluid gridContainer pt-44 pb-10">
      <article className="w-11/12 3xl:w-10/12 mx-auto pb-28">
        <h1 className="text-lg md:text-5xl mb-4 text-main-white font-medium max-w-4xl">{t("h1")}</h1>
        <p className="text-main-white/80 text-sm lg:text-base w-full">{t("subtitle")}</p>
      </article>
      <NewspapersCarousel />
      {children}
    </main>
  );
}
