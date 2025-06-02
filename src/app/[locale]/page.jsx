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
      title: "KOBİ’lerle Güçlü Bağlantılar",
      description: "5600’den fazla küçük ve orta ölçekli işletme, dijital dönüşüm yolculuğunda bizimle ilerliyor. Güvenilir ve ölçeklenebilir çözümler sunuyoruz.",
      count: "5600",
    },
    {
      title: "Genişleyen Müşteri Ekosistemi",
      description: "12000’i aşkın memnun müşterimizle, iş süreçlerini kolaylaştıran ve verimliliği artıran çözümler sunmaya devam ediyoruz.",
      count: "12000",
    },
    {
      title: "Küresel Hizmet Ağı",
      description: "9 farklı ülkede aktif olarak hizmet veriyoruz. Dijital sınırları aşan çözümlerimizle dünya genelinde etki yaratıyoruz.",
      count: "9",
    },
    {
      title: "Stratejik İş Ortaklıkları",
      description: "24 güçlü iş ortağıyla birlikte inovasyonu destekleyen bir ekosistem inşa ediyoruz. Birlikte daha fazlasını başarıyoruz.",
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
