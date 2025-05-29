import Ecosystem from "@/components/home/ekosystem";
import Hero from "@/components/home/hero";
import LogoCarousel from "@/components/home/logoCarousel";
import ServiceCards from "@/components/home/services";
import CardIcon from "@/components/home/services/Card1Icons";

export default function Home() {
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
      icon: <CardIcon src={"/rive/card-1.riv"} stateMachines={"state_main"} />,
    },
    {
      title: "WeeMoney",
      description: "Reklam izleyerek, oyun oynayarak ve bilginizi yarıştırarak çeşitli Weecoins ödülleri kazanabileceğiniz interaktif bir mobil uygulamadır.",
      icon: <CardIcon src={"/rive/card-4.riv"} stateMachines={"circle-fill_pulsating"} classNames={"scale-110"} />,
    },
  ];
  return (
    <>
      <Hero />
      <LogoCarousel />
      <Ecosystem />
      <ServiceCards cardsItem={cardsItem} />
    </>
  );
}
