import React from "react";
import ContactForm from "./ContactForm";
import { useTranslations } from "next-intl";

export default function ContactContent() {
  const t = useTranslations("ContactPage.form");
  return (
    <article className="flex h-full w-full flex-1 flex-col items-start gap-y-6 md:w-10/12 lg:w-full lg:p-6 xl:p-10">
      <div className="flex w-full flex-col items-start gap-2">
        <h3 className="text-xl font-semibold text-theme-black md:text-2xl">{t("title")}</h3>
        <p className="text-sm text-theme-black/90 md:text-base">{t("subtitle")}</p>
      </div>
      <ContactForm />
    </article>
  );
}
