import { DotBackgroundDemo } from "@/components/ui/dot-background";
import Slide2Rive from "./Slide2Rive";

export default function Slide2({ classNames, index }) {
  return (
    <article
      className={`w-full max-w-[1100px] mx-5 h-[65vh] rounded-2xl sticky flex items-start justify-center gap-8 bg-logo-button p-3 overflow-hidden ${classNames}`}
      style={{
        top: `calc(${index} * 1.5rem + 4rem)`,
      }}
    >
      <span className="inline-block bg-main-black absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-1/6"></span>
      <span className="inline-block bg-main-black absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-1/6"></span>
      <span className="inline-block bg-main-black absolute left-1/2 -top-1.5 -translate-x-1/2 w-1/6 h-3"></span>
      <span className="inline-block bg-main-black absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-1/6 h-3"></span>
      <div className="relative flex-1 h-full rounded-xl overflow-hidden pt-12">
        <Slide2Rive />
        <DotBackgroundDemo />
      </div>
      <div className="w-full h-full max-w-[42%] flex flex-col items-start justify-between gap-2 p-10 text-text-black">
        <div className="w-full flex flex-col items-start gap-2">
          <h2 className="text-5xl font-medium mb-4">WeeGold Network Nedir?</h2>
          <p className="text-[clamp(12px,1.05vw,17px)] text-text-black/70 tracking-wide">
            WeeGold ağı, WeeComi International tarafından işletilen, kripto para dünyasında geniş kullanım alanlarına sahip bir ağdır. 2020 yılında piyasaya sürülen WeeCoins Premium (WCP) ve WeeCoins (WCS) kripto
            paralarını destekler ve çeşitli uluslararası platformlarda aktif olarak işlem görür.
          </p>
        </div>
        <div className="self-end mt-6 text-2xl font-semibold tracking-widest text-logo-button [font-feature-settings:'zero'] p-2 rounded-xl bg-main-black">02</div>
      </div>
    </article>
  );
}
