"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";

export default function Slide5Swiper() {
  return (
    <main className="relative w-full z-10">
      <Swiper direction="vertical" className="w-[350px] h-full max-h-[570px] rounded-xl" modules={[Autoplay]} spaceBetween={50} slidesPerView={1} autoplay={{ disableOnInteraction: false, delay: 2000 }} loop>
        <SwiperSlide className="!flex items-center justify-center h-full">
          <Image src="/images/weecard-theme/theme-1.png" alt="weecard theme " width={350} height={700} className="object-contain object-center w-full max-w-[280px] rounded-xl" />
        </SwiperSlide>
        <SwiperSlide className="!flex items-center justify-center h-full">
          <Image src="/images/weecard-theme/theme-2.png" alt="weecard theme" width={350} height={700} className="object-contain object-center w-full max-w-[280px] rounded-xl" />
        </SwiperSlide>
        <SwiperSlide className="!flex items-center justify-center h-full">
          <Image src="/images/weecard-theme/theme-3.png" alt="weecard theme" width={350} height={700} className="object-contain object-center w-full max-w-[280px] rounded-xl" />
        </SwiperSlide>
        <SwiperSlide className="!flex items-center justify-center h-full">
          <Image src="/images/weecard-theme/theme-4.png" alt="weecard theme" width={350} height={700} className="object-contain object-center w-full max-w-[280px] rounded-xl" />
        </SwiperSlide>
        <SwiperSlide className="!flex items-center justify-center h-full">
          <Image src="/images/weecard-theme/theme-5.png" alt="weecard theme" width={350} height={700} className="object-contain object-center w-full max-w-[280px] rounded-xl" />
        </SwiperSlide>
        <SwiperSlide className="!flex items-center justify-center h-full">
          <Image src="/images/weecard-theme/theme-6.png" alt="weecard theme" width={350} height={700} className="object-contain object-center w-full max-w-[280px] rounded-xl" />
        </SwiperSlide>
      </Swiper>
    </main>
  );
}
