import { Link } from "@/i18n/navgation";
import React from "react";
import LanguageChange from "./LanguageChange";

export default function HeaderRight() {
  return (
    <article className="w-full h-full flex items-center justify-end gap-2">
      <Link
        href="https://backoffice.weecoins.org/login"
        className="relative group overflow-hidden flex items-center gap-1 bg-background text-text-black px-3 py-2 text-sm rounded-sm before:absolute before:uppercase before:content-['Backoffıce'] before:top-1/2 before:-translate-y-12 before:left-1/2 before:-translate-x-1/2 before:transition-all before:duration-300 hover:before:-translate-y-1/2 before:transform"
      >
        <span className="inline-block bg-main-black absolute -left-[1.5px] top-1/2 -translate-y-1/2 w-[3px] h-4"></span>
        <span className="inline-block bg-main-black absolute -right-[1.5px] top-1/2 -translate-y-1/2 w-[3px] h-4"></span>
        <span className="inline-block bg-main-black absolute left-1/2 top-[-1.5px] -translate-x-1/2 w-4 h-[3px]"></span>
        <span className="inline-block bg-main-black absolute left-1/2 bottom-[-1.5px] -translate-x-1/2 w-4 h-[3px]"></span>
        <span className="translate-y-0 group-hover:translate-y-12 transition-all duration-300 relative z-20 inline-block transform uppercase">Backoffıce</span>
      </Link>
      <Link target="_blank" className="uppercase text-sm"></Link>
      <LanguageChange />
    </article>
  );
}
