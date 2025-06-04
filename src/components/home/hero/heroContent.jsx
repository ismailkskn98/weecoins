import React from "react";
import { Link } from "@/i18n/navgation";
import { FaFileDownload } from "react-icons/fa";
import HeroAnimateIconsMobile from "./heroAnimateIconsMobile";
import { useTranslations } from "next-intl";

export default function HeroContent() {
  const t = useTranslations("HomePage.hero");
  return (
    <article className="relative max-w-4xl 3xl:max-w-6xl mx-auto flex flex-col items-center justify-center gap-2 text-center px-2 mt-14 md:mt-0">
      <h1 className="text-4xl sm:text-5xl xl:text-6xl 3xl:text-7xl font-bold capitalize">{t("h1")}</h1>
      <p className="text-base sm:text-xl mt-2">{t("subtitle")}</p>
      <HeroAnimateIconsMobile />
      <div className="flex items-center gap-4 mt-10 2xl:mt-12 3xl:mt-14">
        <Link
          href="/ecosystem"
          className="relative group overflow-hidden bg-main-white text-text-black px-3 py-2 text-sm xl:text-base rounded-sm"
        >
          <span className="inline-block bg-main-black absolute -left-[1.5px] top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-2xl"></span>
          <span className="inline-block bg-main-black absolute -right-[1.5px] top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-2xl"></span>
          <span className="inline-block bg-main-black absolute left-1/2 top-[-1.5px] -translate-x-1/2 w-4 h-[3px] rounded-2xl"></span>
          <span className="inline-block bg-main-black absolute left-1/2 bottom-[-1.5px] -translate-x-1/2 w-4 h-[3px] rounded-2xl"></span>
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-12 transition-all duration-300 group-hover:-translate-y-1/2">{t("ecosystem")}</span>
          <span className="translate-y-0 group-hover:translate-y-12 transition-all duration-300 relative z-20 inline-block transform capitalize">{t("ecosystem")}</span>
        </Link>
        <Link
          href="/whitepaper.pdf"
          className="relative group overflow-hidden flex items-center gap-1 bg-[#FDC739] text-text-black px-3 py-2 text-sm xl:text-base rounded-sm before:absolute before:content-['Whitepaper'] before:top-1/2 before:-translate-y-12 before:left-1/2 before:-translate-x-1/2 before:transition-all before:duration-300 hover:before:-translate-y-1/2 before:transform"
        >
          <span className="inline-block bg-main-black absolute -left-[1.5px] top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-2xl"></span>
          <span className="inline-block bg-main-black absolute -right-[1.5px] top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-2xl"></span>
          <span className="inline-block bg-main-black absolute left-1/2 top-[-1.5px] -translate-x-1/2 w-4 h-[3px] rounded-2xl"></span>
          <span className="inline-block bg-main-black absolute left-1/2 bottom-[-1.5px] -translate-x-1/2 w-4 h-[3px] rounded-2xl"></span>
          <span className="translate-y-0 group-hover:translate-y-12 transition-all duration-300 relative z-20 inline-block transform capitalize">Whitepaper</span>
          <FaFileDownload className="translate-y-0 group-hover:translate-y-12 transition-all duration-300 relative z-20 inline-block transform" />
        </Link>
      </div>
    </article>
  );
}
