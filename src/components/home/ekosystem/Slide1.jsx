import { DotBackgroundDemo } from "@/components/ui/dot-background";
import Image from "next/image";
import { HiShieldCheck } from "react-icons/hi";
import { MdTrendingUp } from "react-icons/md";
import Slide1Swiper from "./Slide1Swiper";
import { useTranslations } from "next-intl";

export default function Slide1({ classNames, index }) {
  const t = useTranslations("HomePage.ecosystem");
  return (
    <article
      className={`w-full max-w-[98%] lg:max-w-[1100px] mx-5 h-[65vh] rounded-2xl sticky flex flex-col lg:flex-row items-start justify-center gap-4 md:gap-8 bg-zinc-900 p-3 overflow-hidden ${classNames}`}
      style={{
        top: `calc(${index} * 1.5rem + 4rem)`,
      }}
    >
      <span className="inline-block bg-main-black absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-1/6 rounded-2xl"></span>
      <span className="inline-block bg-main-black absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-1/6 rounded-2xl"></span>
      <span className="inline-block bg-main-black absolute left-1/2 -top-1.5 -translate-x-1/2 w-1/6 h-3 rounded-2xl"></span>
      <span className="inline-block bg-main-black absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-1/6 h-3 rounded-2xl"></span>
      <div className="w-full h-full max-w-full lg:max-w-[50%] flex flex-row lg:flex-col items-start justify-between gap-16 lg:gap-2 p-5 md:p-9 text-main-white">
        <div className="w-full flex flex-col items-start gap-2">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium mb-1 lg:mb-4">WeeCoins</h2>
          <p className="text-[clamp(12px,1.05vw,17px)] text-main-white/70 tracking-wide">{t("slide1.subtitle")}</p>
          <div className="flex items-center gap-4 mt-6">
            <span className="p-3 rounded-xl bg-main-black text-main-white text-2xl tracking-widest font-semibold [font-feature-settings:'zero']">
              <Image src={"/images/weecoins-logo-white.png"} alt="WeeCoins" width={40} height={40} className="object-center max-w-[24px] object-contain" />
            </span>
            <span className="p-3 rounded-xl bg-main-black text-main-white text-2xl tracking-widest font-semibold [font-feature-settings:'zero']">
              <HiShieldCheck title="Güvenlik" />
            </span>
            <span className="p-3 rounded-xl bg-main-black text-main-white text-2xl tracking-widest font-semibold [font-feature-settings:'zero']">
              <MdTrendingUp title="Gelişim" />
            </span>
          </div>
        </div>
        <div className="md:block hidden mt-6 text-2xl font-semibold tracking-widest text-main-white [font-feature-settings:'zero'] p-2 rounded-xl bg-main-black">01</div>
      </div>
      <div className="relative flex-1 w-full lg:w-auto min-h-[8rem] lg:min-h-auto h-full rounded-xl overflow-hidden py-2 sm:py-4 lg:pb-0 lg:pt-12">
        <DotBackgroundDemo />
        <Slide1Swiper />
      </div>
    </article>
  );
}
