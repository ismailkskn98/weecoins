"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

export default function Slide1Swiper() {
  return (
    <main className="relative w-full z-10">
      <Swiper direction="vertical" className="w-[150px] h-full max-h-[570px]" modules={[Autoplay]} spaceBetween={20} slidesPerView={4} autoplay={{ disableOnInteraction: false, delay: 2000 }} loop>
        <SwiperSlide className="!flex items-center justify-center h-full">
          <Image src="/images/weecard.png" alt="weecard logo" width={200} height={200} className="object-contain object-center w-full max-w-[100px]" />
        </SwiperSlide>
        <SwiperSlide className="!flex items-center justify-center h-full">
          <Image src="/images/weecomi.png" alt="weecard logo" width={200} height={200} className="object-contain object-center w-full max-w-[100px]" />
        </SwiperSlide>
        <SwiperSlide className="!flex items-center justify-center h-full">
          <Image src="/images/weezard.png" alt="weecard logo" width={200} height={200} className="object-contain object-center w-full max-w-[100px]" />
        </SwiperSlide>
        <SwiperSlide className="!flex items-center justify-center h-full">
          <Image src="/images/weecoins-premium.png" alt="weecard logo" width={200} height={200} className="object-contain object-center w-full max-w-[90px]" />
        </SwiperSlide>
        <SwiperSlide className="!flex items-center justify-center h-full">
          <Image src="/images/weesale.png" alt="weecard logo" width={200} height={200} className="object-contain object-center w-full max-w-[150px]" />
        </SwiperSlide>
        <SwiperSlide className="!flex items-center justify-center h-full">
          <Image src="/images/weecoins-logo.png" alt="weecard logo" width={200} height={200} className="object-contain object-center w-full max-w-[100px]" />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
