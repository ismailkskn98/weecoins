import Ecosystem from "@/components/home/ekosystem";
import Hero from "@/components/home/hero";
import LogoCarousel from "@/components/home/logoCarousel";
import ServiceCards from "@/components/home/services";
import CardIcon from "@/components/home/services/Card1Icons";
import VideoContainer from "@/components/home/videoContainer";
import WeeLife from "@/components/home/weelife";
import YoutubeCarousel from "@/components/home/youtubeCarousel";

const getYoutubeVideos = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/youtube`, {
      next: { revalidate: 86400 },
    });

    if (!res.ok) {
      console.error("yotube video isteği başarısız", res.status);
      return [];
    }

    return res.json();
  } catch (error) {
    console.error("yotube video isteği başarısız error:", error);
    return [];
  }
};

export default async function Home() {
  const videos = await getYoutubeVideos();

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

  return (
    <>
      <Hero />
      <LogoCarousel />
      <VideoContainer />
      <ServiceCards cardsItem={cardsItem} />
      <Ecosystem />
      <WeeLife />
      <YoutubeCarousel videos={videos} />
    </>
  );
}
