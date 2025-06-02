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
    <main className="relative fluid min-h-screen w-full mx-auto bg-main-white rounded-xl py-20 overflow-hidden">
      <span className="inline-block bg-main-black absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-1/6 rounded-2xl"></span>
      <span className="inline-block bg-main-black absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-1/6 rounded-2xl"></span>
      <span className="inline-block bg-main-black absolute left-1/2 -top-1.5 -translate-x-1/2 w-1/6 h-3 rounded-2xl"></span>
      <section className="w-full fluid gridContainer gap-y-16">
        <main className="w-full flex flex-col items-center justify-center gap-16">
          <article className="w-full flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-3 max-w-3xl text-center">
              <h2 className="w-full capitalize text-main-black text-6xl font-semibold">WeeCoins sunum videosu</h2>
              <p className="w-full text-lg text-main-black/80 font-medium">WeeCoins hakkında daha fazla bilgi edinmek ve finans dünyasının geleceğini keşfetmek için bu videoyu izleyin.</p>
            </div>
          </article>
          <article className="relative w-8/12 mx-auto h-[500px]">
            <HeroVideoDialog className="block w-full h-full" animationStyle="top-in-bottom-out" videoSrc={videoLanguage()} thumbnailSrc="/images/video-image.png" thumbnailAlt="weecoins tanıtım" />
          </article>
        </main>
      </section>
    </main>
  );
}
