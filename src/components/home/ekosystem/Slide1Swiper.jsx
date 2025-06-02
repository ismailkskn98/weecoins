"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

export default function Slide1Swiper() {
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (windowWidth === null) return null;

  const isVertical = windowWidth > 1024;
  const swiperClass = `w-full ${isVertical ? "lg:w-[150px] h-[570px]" : "h-[150px]"}`;

  return (
    <main className={`relative z-10 w-full`}>
      <Swiper
        direction={isVertical > 1024 ? "vertical" : "horizontal"}
        className={swiperClass}
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={isVertical > 1024 ? 4 : 3}
        autoplay={{ disableOnInteraction: false, delay: 2000 }}
        loop
      >
        <SwiperSlide className="!flex items-center justify-center">
          <Image src="/images/weecard.png" alt="weecard logo" width={200} height={200} className="object-contain object-center w-full max-w-[80px] lg:max-w-[100px]" />
        </SwiperSlide>
        <SwiperSlide className="!flex items-center justify-center">
          <Image src="/images/weecomi.png" alt="weecard logo" width={200} height={200} className="object-contain object-center w-full max-w-[80px] lg:max-w-[100px]" />
        </SwiperSlide>
        <SwiperSlide className="!flex items-center justify-center">
          <Image src="/images/weezard.png" alt="weecard logo" width={200} height={200} className="object-contain object-center w-full max-w-[80px] lg:max-w-[100px]" />
        </SwiperSlide>
        <SwiperSlide className="!flex items-center justify-center">
          <Image src="/images/weecoins-premium.png" alt="weecard logo" width={200} height={200} className="object-contain object-center w-full max-w-[70px] lg:max-w-[90px]" />
        </SwiperSlide>
        <SwiperSlide className="!flex items-center justify-center">
          <Image src="/images/weesale.png" alt="weecard logo" width={200} height={200} className="object-contain object-center w-full max-w-[130px] lg:max-w-[150px]" />
        </SwiperSlide>
        <SwiperSlide className="!flex items-center justify-center">
          <Image src="/images/weecoins-logo.png" alt="weecard logo" width={200} height={200} className="object-contain object-center w-full max-w-[80px] lg:max-w-[100px]" />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
