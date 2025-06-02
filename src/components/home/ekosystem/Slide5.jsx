import { DotBackgroundDemo } from "@/components/ui/dot-background";
import { Link } from "@/i18n/navgation";
import { FaExternalLinkAlt } from "react-icons/fa";
import Slide5Swiper from "./Slide5Swiper";

export default function Slide5({ classNames, index }) {
  return (
    <article
      className={`w-full max-w-[98%] lg:max-w-[1100px] mx-5 h-[65vh] rounded-2xl sticky flex flex-col lg:flex-row items-start justify-center gap-4 md:gap-8 bg-zinc-900 p-3 overflow-hidden ${classNames}`}
      style={{
        top: `calc(${index} * 1.5rem + 4rem)`,
      }}
    >
      <span className="inline-block bg-main-black absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-1/6"></span>
      <span className="inline-block bg-main-black absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-1/6"></span>
      <span className="inline-block bg-main-black absolute left-1/2 -top-1.5 -translate-x-1/2 w-1/6 h-3"></span>
      <span className="inline-block bg-main-black absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-1/6 h-3"></span>
      <div className="w-full h-full max-w-full lg:max-w-[50%] flex flex-col items-start justify-between gap-2 p-5 md:p-9 text-main-white">
        <div className="w-full flex flex-col items-start gap-2">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium mb-4">WeeCard</h2>
          <p className="text-[clamp(12px,1.05vw,17px)] text-main-white/70 tracking-wide">
            WeeCard ile tüm iletişim bilgilerini dijitalleştir, QR kodla anında paylaş! Gelişmiş arayüzü sayesinde sosyal medya, ürünler, kataloglar ve iletişim kanallarını tek bir yerde topla. Her şey profesyonel,
            hızlı ve etkileyici.
          </p>
          <div className="flex items-center gap-4 mt-3">
            <Link
              href="https://weecard.org"
              target="_blank"
              className="relative group overflow-hidden flex items-center gap-2 bg-main-black text-main-white px-3 py-2 text-sm xl:text-base rounded-sm before:absolute before:content-['WeeCard'] before:top-1/2 before:-translate-y-12 before:left-1/2 before:-translate-x-1/2 before:transition-all before:duration-300 hover:before:-translate-y-1/2 before:transform"
            >
              <span className="inline-block bg-zinc-900 absolute -left-[1.5px] top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-2xl"></span>
              <span className="inline-block bg-zinc-900 absolute -right-[1.5px] top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-2xl"></span>
              <span className="inline-block bg-zinc-900 absolute left-1/2 top-[-1.5px] -translate-x-1/2 w-4 h-[3px] rounded-2xl"></span>
              <span className="inline-block bg-zinc-900 absolute left-1/2 bottom-[-1.5px] -translate-x-1/2 w-4 h-[3px] rounded-2xl"></span>
              <span className="translate-y-0 group-hover:translate-y-12 transition-all duration-300 relative z-20 inline-block transform capitalize">WeeCard</span>
              <FaExternalLinkAlt className="text-sm translate-y-0 group-hover:translate-y-12 transition-all duration-300 relative z-20 inline-block transform" />
            </Link>
          </div>
        </div>
        <div className="md:block hidden mt-6 text-2xl font-semibold tracking-widest text-main-white [font-feature-settings:'zero'] p-2 rounded-xl bg-main-black">05</div>
      </div>
      <div className="relative flex-1 w-full min-h-[50%] lg:min-h-auto h-full rounded-xl overflow-hidden lg:pt-12 p-4">
        <Slide5Swiper />
        <DotBackgroundDemo />
      </div>
    </article>
  );
}
