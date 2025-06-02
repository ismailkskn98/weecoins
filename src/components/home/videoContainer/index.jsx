import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { useLocale } from "next-intl";
import React from "react";

export default function VideoContainer() {
  const locale = useLocale();

  const videoLanguage = () => {
    switch (locale) {
      case "tr":
        return "https://www.youtube-nocookie.com/embed/HMaECBWoMYQ?si=Ga7WOii-P__dLmQL";
      case "en":
        return "https://www.youtube-nocookie.com/embed/QiGK2NL6i0I?si=HmVeS2LDHIlObKmB";
      case "ru":
        return "https://www.youtube-nocookie.com/embed/B4fLCwE30sI?si=mYjcbseQHunxHXO1";
      case "az":
        return "https://www.youtube-nocookie.com/embed/HnYK8dgSsO4?si=BJp22ddd_E6U6FdV";
      default:
        return "https://www.youtube-nocookie.com/embed/QiGK2NL6i0I?si=HmVeS2LDHIlObKmB";
    }
  };

  return (
    <main className="relative fluid w-full mx-auto bg-main-white rounded-xl py-16 sm:py-20 overflow-hidden">
      <span className="inline-block bg-main-black absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-1/6 rounded-2xl"></span>
      <span className="inline-block bg-main-black absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-1/6 rounded-2xl"></span>
      <span className="inline-block bg-main-black absolute left-1/2 -top-1.5 -translate-x-1/2 w-1/6 h-3 rounded-2xl"></span>
      <section className="w-full fluid gridContainer gap-y-16">
        <main className="w-full flex flex-col items-center justify-center gap-10 sm:gap-16">
          <article className="w-full flex items-center justify-center px-3">
            <div className="flex flex-col items-center justify-center gap-3 max-w-3xl text-center">
              <h2 className="w-full capitalize text-main-black text-3xl sm:text-4xl lg:text-5xl 3xl:text-6xl font-medium sm:font-semibold">WeeCoins sunum videosu</h2>
              <p className="w-full text-sm sm:text-base lg:text-lg text-main-black/80 font-medium">WeeCoins hakkında daha fazla bilgi edinmek ve finans dünyasının geleceğini keşfetmek için bu videoyu izleyin.</p>
            </div>
          </article>
          <article className="relative w-full max-w-[95%] sm:max-w-3xl lg:max-w-4xl 2xl:max-w-5xl mx-auto">
            <HeroVideoDialog className="block w-full h-full" animationStyle="top-in-bottom-out" videoSrc={videoLanguage()} thumbnailSrc="/images/video-image.png" thumbnailAlt="weecoins tanıtım" />
          </article>
        </main>
      </section>
    </main>
  );
}
