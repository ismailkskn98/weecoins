"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import criptoswaps from "@/../public/images/carousel-images/criptoswaps.webp";
import coinpaprika from "@/../public/images/carousel-images/Coinpaprika.webp";
import coinmarketcap from "@/../public/images/carousel-images/CoinMarketCap.webp";
import coincostlogo from "@/../public/images/carousel-images/coincostlogo.webp";
import azbit from "@/../public/images/carousel-images/Azbit-AZ.webp";
import coinbase from "@/../public/images/carousel-images/Coinbase-New.webp";
import coingecko from "@/../public/images/carousel-images/coingecko-1.webp";
import { Link } from "@/i18n/navgation";

export default function LogoCarousel() {
  const items = [
    { href: "https://www.criptoswaps.com/trading/wcsusdt", image: criptoswaps, title: "Criptoswaps" },
    {
      href: "https://coinpaprika.com/tr/coin/wcp-weecoins",
      image: coinpaprika,
      title: "Coinpaprika",
    },
    { href: "https://coinmarketcap.com/currencies/weecoins", image: coinmarketcap, title: "CoinMarketCap" },
    { href: "https://coincost.net/en/currency/weecoins", image: coincostlogo, title: "CoinCost" },
    { href: "https://azbit.com/exchange/WCS_USDT", image: azbit, title: "Azbit" },
    { href: "https://www.coinbase.com/price/weecoins", image: coinbase, title: "Coinbase" },
    { href: "https://www.coingecko.com/tr/coins/weecoins", image: coingecko, title: "CoinGecko" },
  ];

  return (
    <section className="fluid gridContainer relative z-50 flex h-36 w-full items-center bg-theme-black my-5">
      <div className="fluid from-bg-hero-bg to-bg-hero-bg absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-l sm:w-36 md:w-52 lg:w-64"></div>
      <div className="fluid from-bg-hero-bg to-bg-hero-bg absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-r sm:w-36 md:w-52 lg:w-64"></div>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={5}
        loop={true}
        speed={6000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
        }}
        allowTouchMove={false}
        breakpoints={{
          300: { slidesPerView: 3 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        className="w-full h-full"
      >
        {items.map((item, index) => (
          <SwiperSlide key={index} className="flex w-auto items-center justify-center">
            <Link href={item.href} target="_blank" className="flex cursor-pointer items-center w-fit">
              <Image src={item.image} className="h-14 object-contain sm:h-20 md:h-20" width={128} height={128} quality={50} alt={item.title} />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
