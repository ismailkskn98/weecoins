import { DotBackgroundDemo } from "@/components/ui/dot-background";
import Image from "next/image";
import { HiShieldCheck } from "react-icons/hi";
import { MdTrendingUp } from "react-icons/md";
import Slide1Swiper from "./Slide1Swiper";

export default function Slide1() {
  return (
    <article className="w-[70%] mx-5 min-h-[70vh] rounded-2xl sticky flex items-start justify-center gap-8 bg-white top-[130px] p-3 overflow-hidden">
      <span className="inline-block bg-main-black absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-1/6"></span>
      <span className="inline-block bg-main-black absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-1/6"></span>
      <span className="inline-block bg-main-black absolute left-1/2 -top-1.5 -translate-x-1/2 w-1/6 h-3"></span>
      <span className="inline-block bg-main-black absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-1/6 h-3"></span>
      <div className="w-full max-w-[50%] flex flex-col items-start gap-2 p-10 text-text-black">
        <h2 className="text-5xl font-medium mb-4">WeeCoins</h2>
        <p className="text-[clamp(12px,1.05vw,18px)] text-text-black/70 tracking-wide">
          WeeCoins International, değerli iş ortaklarımıza kendi sosyal ticaret işlerini kurmaları için en iyi fırsatları sunar. WeeCoins, güçlü ve güvenli altyapısı ile kullanıcılarına benzersiz bir deneyim
          yaşatırken, aynı zamanda kripto para birimlerinin geleceğine dair güvenilir ve yenilikçi çözümler sunar.
        </p>
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
      <div className="relative flex-1 h-full rounded-xl overflow-hidden pt-12">
        <DotBackgroundDemo />
        <Slide1Swiper />
      </div>
      <span className="absolute bottom-12 left-12 text-2xl font-semibold tracking-widest text-main-white [font-feature-settings:'zero'] p-2 rounded-xl bg-main-black">01</span>
    </article>
  );
}
