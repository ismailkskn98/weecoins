import Ecosystem from "@/components/home/ekosystem";
import Hero from "@/components/home/hero";
import LogoCarousel from "@/components/home/logoCarousel";
import VideoContainer from "@/components/home/videoContainer";
import WeeLife from "@/components/home/weelife";
import YoutubeCarousel from "@/components/home/youtubeCarousel";

export default function Home() {
  return (
    <>
      <Hero />
      <LogoCarousel />
      <VideoContainer />
      <Ecosystem />
      <WeeLife />
      <YoutubeCarousel />
    </>
  );
}
