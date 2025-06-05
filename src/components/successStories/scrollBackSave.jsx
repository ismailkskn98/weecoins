"use client";
import { useRouter } from "@/i18n/navgation";
import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { useTranslations } from "use-intl";

export default function ScrollBackSave({ id }) {
  const t = useTranslations("SuccessStoriesPage");
  const router = useRouter();
  const handleCardClick = () => {
    sessionStorage.setItem("scrollPos", window.scrollY.toString());
    router.push(`/success-stories/${id}`);
  };
  return (
    <button onClick={handleCardClick} className="w-fit rounded-full px-3 py-2 text-white flex items-center space-x-1 cursor-pointer bg-black text-xs font-bold dark:bg-zinc-800">
      <span>{t("readMore")}</span>
      <IoIosArrowForward className="group-hover:-rotate-45 transition-all duration-200" />
    </button>
  );
}
