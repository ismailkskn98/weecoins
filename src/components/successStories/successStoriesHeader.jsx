import { useTranslations } from "next-intl";
import React from "react";

export default function SuccessStoriesHeader() {
  const t = useTranslations("SuccessStoriesPage");
  return (
    <article className="w-11/12 3xl:w-10/12 mx-auto pb-28">
      <h1 className="text-lg md:text-5xl mb-4 text-main-white font-medium max-w-4xl capitalize">{t("h1")}</h1>
      <p className="text-main-white/80 text-sm lg:text-base w-full">{t("content")}</p>
    </article>
  );
}
