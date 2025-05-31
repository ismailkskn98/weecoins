"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { FaPlay } from "react-icons/fa";
import Image from "next/image";

export default function YoutubeCarousel() {
  return (
    <main className="relative fluid gridContainer mt-36 mb-24">
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        className="w-full max-w-10/12 h-[250px]"
      >
        <SwiperSlide className="text-main-black bg-amber-100 rounded-sm h-full relative group cursor-pointer">
          <Image src={"/images/bagiss.jpg"} alt="youtube" width={400} height={400} className="relative z-10 object-contain object-center w-full h-full" />
          <Image src={"/images/bagiss.jpg"} alt="youtube" width={400} height={400} className="absolute inset-0 w-full h-full object-cover blur-xs object-center" />
          <div className="absolute z-30 left-1/2 top-1/2 -translate-1/2 w-[50px] h-[50px] rounded-full group-hover:scale-110 transition-transform duration-200 grid place-content-center overflow-hidden">
            <div className="absolute inset-0 w-full h-full bg-main-black/80 blur-xl"></div>
            <FaPlay className="absolute left-1/2 top-1/2 -translate-1/2 text-main-white mt-[1px] z-10 text-lg" />
          </div>
          <div className="absolute w-full inset-x-0 bottom-0 h-[30%] px-2 py-2.5  z-20 bg-gradient-to-t from-main-black via-main-black/50 to-transparent">
            <div className="absolute z-10 inset-0 w-full h-full blur-sm bg-main-black/50"></div>
            <div className="flex flex-col items-start gap-1 relative z-50">
              <h4 className="font-medium text-main-white text-sm capitalize">Burası Başlık Kısmı Olacak</h4>
              <p className="font-medium text-main-white/80 text-xs">Burası Başlık Kısmı Olacak</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="text-main-black bg-amber-400 rounded-sm h-full"></SwiperSlide>
        <SwiperSlide className="text-main-black bg-amber-800 rounded-sm h-full">Slide 3</SwiperSlide>
        <SwiperSlide className="text-main-black bg-amber-200 rounded-sm h-full">Slide 4</SwiperSlide>
      </Swiper>
    </main>
  );
}
