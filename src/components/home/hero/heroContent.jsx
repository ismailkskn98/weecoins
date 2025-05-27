import React from "react";
import HeroAnimateIcons from "./heroAnimateIcons";
import { Link } from "@/i18n/navgation";
import { FaFileDownload } from "react-icons/fa";

export default function HeroContent() {
  return (
    <article className="relative max-w-6xl mx-auto flex flex-col items-center justify-center gap-2 text-center -mt-24">
      <HeroAnimateIcons />
      <h1 className="text-7xl font-bold capitalize">Dijital Geleceğin Anahtarı: Weecoins</h1>
      <p className="text-2xl">Weecoins ile kripto varlıklarınızı yönetin, kazanç fırsatlarını değerlendirin ve dijital ekonomide yerinizi alın.</p>
      <div className="flex items-center gap-4 mt-4">
        <Link
          href="/ecosystem"
          className="relative group overflow-hidden bg-textBlack text-background px-3 py-2 text-sm xl:text-base rounded-sm before:absolute before:content-['Ekosistem'] before:top-1/2 before:-translate-y-12 before:left-1/2 before:-translate-x-1/2 before:transition-all before:duration-300 hover:before:-translate-y-1/2 before:transform"
        >
          <span className="inline-block bg-background absolute -left-[1.5px] top-1/2 -translate-y-1/2 w-[3px] h-4"></span>
          <span className="inline-block bg-background absolute -right-[1.5px] top-1/2 -translate-y-1/2 w-[3px] h-4"></span>
          <span className="inline-block bg-background absolute left-1/2 top-[-1.5px] -translate-x-1/2 w-4 h-[3px]"></span>
          <span className="inline-block bg-background absolute left-1/2 bottom-[-1.5px] -translate-x-1/2 w-4 h-[3px]"></span>
          <span className="translate-y-0 group-hover:translate-y-12 transition-all duration-300 relative z-20 inline-block transform capitalize">Ekosistem</span>
        </Link>
        <Link
          href="/whitepaper.pdf"
          className="relative group overflow-hidden flex items-center gap-1 bg-[#FDC739] text-textBlack px-3 py-2 text-sm xl:text-base rounded-sm before:absolute before:content-['Whitepaper'] before:top-1/2 before:-translate-y-12 before:left-1/2 before:-translate-x-1/2 before:transition-all before:duration-300 hover:before:-translate-y-1/2 before:transform"
        >
          <span className="inline-block bg-background absolute -left-[1.5px] top-1/2 -translate-y-1/2 w-[3px] h-4"></span>
          <span className="inline-block bg-background absolute -right-[1.5px] top-1/2 -translate-y-1/2 w-[3px] h-4"></span>
          <span className="inline-block bg-background absolute left-1/2 top-[-1.5px] -translate-x-1/2 w-4 h-[3px]"></span>
          <span className="inline-block bg-background absolute left-1/2 bottom-[-1.5px] -translate-x-1/2 w-4 h-[3px]"></span>
          <span className="translate-y-0 group-hover:translate-y-12 transition-all duration-300 relative z-20 inline-block transform capitalize">Whitepaper</span>
          <FaFileDownload className="translate-y-0 group-hover:translate-y-12 transition-all duration-300 relative z-20 inline-block transform" />
        </Link>
      </div>
    </article>
  );
}
