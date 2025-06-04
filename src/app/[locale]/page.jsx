import Ecosystem from "@/components/home/ekosystem";
import Hero from "@/components/home/hero";
import LogoCarousel from "@/components/home/logoCarousel";
import ServiceCards from "@/components/home/services";
import VideoContainer from "@/components/home/videoContainer";
import WeeLife from "@/components/home/weelife";
import YoutubeCarousel from "@/components/home/youtubeCarousel";
import { getTranslations } from "next-intl/server";

const getYoutubeVideos = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/youtube`, {
      cache: "force-cache",
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
  const t = await getTranslations("HomePage.services");

  const cardsItem = [
    {
      title: t("card1.title"),
      description: t("card1.content"),
      count: "5600",
    },
    {
      title: t("card2.title"),
      description: t("card2.content"),
      count: "12000",
    },
    {
      title: t("card3.title"),
      description: t("card3.content"),
      count: "9",
    },
    {
      title: t("card4.title"),
      description: t("card4.content"),
      count: "24",
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
