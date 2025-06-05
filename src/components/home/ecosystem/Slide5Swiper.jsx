"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

export default function Slide5Swiper() {
  const [isClient, setIsClient] = useState(false);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    setIsClient(true);
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!isClient) {
    return <div className="w-full h-[250px] lg:h-[570px] rounded-xl" />;
  }

  return (
    <main className="relative w-full z-10 my-auto">
      <Swiper
        direction={windowWidth > 1024 ? "vertical" : "horizontal"}
        className={`w-full lg:w-[350px] h-full max-h-[150px] lg:max-h-[570px] rounded-xl`}
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={windowWidth > 1024 ? 1 : 2}
        autoplay={{ disableOnInteraction: false, delay: 3000 }}
        loop
      >
        <SwiperSlide className="!flex items-center justify-center min-h-full">
          <Image
            src="/images/weecard-theme/theme-1.png"
            alt="weecard theme "
            width={350}
            height={700}
            className="object-fill lg:object-contain object-center w-full max-w-[280px] min-h-[150px] max-h-[150px] lg:max-h-fit rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide className="!flex items-center justify-center min-h-full">
          <Image
            src="/images/weecard-theme/theme-2.png"
            alt="weecard theme"
            width={350}
            height={700}
            className="object-fill lg:object-contain object-center w-full max-w-[280px] min-h-[150px] max-h-[150px] lg:max-h-fit rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide className="!flex items-center justify-center min-h-full">
          <Image
            src="/images/weecard-theme/theme-3.png"
            alt="weecard theme"
            width={350}
            height={700}
            className="object-fill lg:object-contain object-center w-full max-w-[280px] min-h-[150px] max-h-[150px] lg:max-h-fit rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide className="!flex items-center justify-center min-h-full">
          <Image
            src="/images/weecard-theme/theme-4.png"
            alt="weecard theme"
            width={350}
            height={700}
            className="object-fill lg:object-contain object-center w-full max-w-[280px] min-h-[150px] max-h-[150px] lg:max-h-fit rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide className="!flex items-center justify-center min-h-full">
          <Image
            src="/images/weecard-theme/theme-5.png"
            alt="weecard theme"
            width={350}
            height={700}
            className="object-fill lg:object-contain object-center w-full max-w-[280px] min-h-[150px] max-h-[150px] lg:max-h-fit rounded-xl"
          />
        </SwiperSlide>
        <SwiperSlide className="!flex items-center justify-center min-h-full">
          <Image
            src="/images/weecard-theme/theme-6.png"
            alt="weecard theme"
            width={350}
            height={700}
            className="object-fill lg:object-contain object-center w-full max-w-[280px] min-h-[150px] max-h-[150px] lg:max-h-fit rounded-xl"
          />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
