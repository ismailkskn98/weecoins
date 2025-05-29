import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { useLocale } from "next-intl";
import React from "react";
import ServiceCards from "../services";
import CardIcon from "../services/Card1Icons";

export default function VideoContainer() {
  const locale = useLocale();

  const cardsItem = [
    {
      title: "Backoffice",
      description: "Backoffice, WeeGold ağını da destekleyen çeşitli kripto varlık çiftlerinin bulunduğu yönetim platformudur.",
      icon: <CardIcon src={"/rive/card-2.riv"} stateMachines={"state_main"} classNames={"scale-110"} />,
    },
    {
      title: "WeePoint",
      description: "WeePoint, WeeCoins ile alışveriş yapabileceğiniz anlaşmalı mağazaların tümünü kapsar. Bu mağazalarda, kullanıcılar doğrudan ya da para puan olarak WeeCoins kullanabileceklerdir.",
      icon: <CardIcon src={"/rive/card-3.riv"} stateMachines={"state_main"} />,
    },
    {
      title: "WeeRobot",
      description: "WeeRobot, içerisinde bulunan indikatörler ve hesaplama araçları ile anlık alım-satım sinyalleri oluşturan, yapay zeka destekli bir al-sat robotudur.",
      icon: <CardIcon src={"/rive/radar.riv"} stateMachines={"State Machine 1"} />,
    },
    {
      title: "WeeMoney",
      description: "Reklam izleyerek, oyun oynayarak ve bilginizi yarıştırarak çeşitli Weecoins ödülleri kazanabileceğiniz interaktif bir mobil uygulamadır.",
      icon: <CardIcon src={"/rive/card-1.riv"} stateMachines={"state_main"} />,
    },
  ];

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
    <main className="relative fluid min-h-screen w-full mx-auto bg-main-white rounded-xl pt-20">
      <span className="inline-block bg-main-black absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-1/6"></span>
      <span className="inline-block bg-main-black absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-1/6"></span>
      <span className="inline-block bg-main-black absolute left-1/2 -top-1.5 -translate-x-1/2 w-1/6 h-3"></span>
      <section className="w-full fluid gridContainer gap-y-16">
        <main className="w-full flex flex-col items-center justify-center gap-16">
          <article className="w-full flex items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-3 max-w-3xl text-center">
              <h2 className="w-full capitalize text-main-black text-6xl font-semibold">WeeCoins Premium sunum videosu</h2>
              <p className="w-full text-lg text-main-black/80 font-medium">WeeCoins Premium hakkında daha fazla bilgi edinmek ve finans dünyasının geleceğini keşfetmek için bu videoyu izleyin.</p>
            </div>
          </article>
          <article className="relative w-8/12 mx-auto h-[500px]">
            <HeroVideoDialog className="block w-full h-full" animationStyle="top-in-bottom-out" videoSrc={videoLanguage()} thumbnailSrc="/images/video-image.png" thumbnailAlt="weecoins tanıtım" />
          </article>
        </main>
        <ServiceCards cardsItem={cardsItem} />
      </section>
    </main>
  );
}
