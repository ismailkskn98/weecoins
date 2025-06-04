import { DotBackgroundDemo } from "@/components/ui/dot-background";
import Slide2Rive from "./Slide2Rive";

export default function Slide2({ classNames, index }) {
  return (
    <article
      className={`w-full max-w-[98%] lg:max-w-[1100px] mx-5 h-[65vh] rounded-2xl sticky flex flex-col lg:flex-row justify-center gap-4 md:gap-8 bg-logo-button p-3 overflow-hidden ${classNames}`}
      style={{
        top: `calc(${index} * 1.5rem + 4rem)`,
      }}
    >
      <span className="inline-block bg-main-black absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-1/6 rounded-2xl"></span>
      <span className="inline-block bg-main-black absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-1/6 rounded-2xl"></span>
      <span className="inline-block bg-main-black absolute left-1/2 -top-1.5 -translate-x-1/2 w-1/6 h-3 rounded-2xl"></span>
      <span className="inline-block bg-main-black absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-1/6 h-3 rounded-2xl"></span>
      <div className="order-2 md:order-1 relative flex-1 w-full min-h-[42%] sm:min-h-[50%] lg:min-h-auto h-full rounded-xl overflow-hidden lg:pt-12">
        <Slide2Rive />
        <DotBackgroundDemo />
      </div>
      <div className="order-1 md:order-2 w-full h-full max-w-full lg:max-w-[42%] flex flex-col items-start justify-between gap-2 p-5 md:p-10 text-text-black">
        <div className="w-full flex flex-col items-start gap-2">
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-medium mb-1 lg:mb-4">WeeGold Network Nedir?</h2>
          <p className="text-[clamp(12px,1.05vw,17px)] text-text-black/70 tracking-wide">
            WeeGold ağı, WeeComi International tarafından işletilen, kripto para dünyasında geniş kullanım alanlarına sahip bir ağdır. 2020 yılında piyasaya sürülen WeeCoins Premium (WCP) ve WeeCoins (WCS) kripto
            paralarını destekler ve çeşitli uluslararası platformlarda aktif olarak işlem görür.
          </p>
        </div>
        <div className="md:block hidden self-end mt-6 text-2xl font-semibold tracking-widest text-logo-button [font-feature-settings:'zero'] p-2 rounded-xl bg-main-black">02</div>
      </div>
    </article>
  );
}
