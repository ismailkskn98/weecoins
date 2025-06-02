"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Image from "next/image";
import ToolTip from "./toolTip";
import OpenVideo from "./openVideo";

export default function YoutubeCarousel({ videos = [] }) {
  if (!videos || videos.length === 0) return null;

  // console.log("YoutubeCarousel", videos[1]);

  const textLimitCharecter = (text, maxLenght = 30) => {
    if (text.lenght <= maxLenght) return text;
    return text.slice(0, maxLenght) + "...";
  };

  return (
    <main className="relative fluid gridContainer mt-36 mb-24 overflow-hidden">
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
          delay: 6000,
          disableOnInteraction: false,
        }}
        className="w-full max-w-10/12 h-[240px]"
      >
        {videos.map((item, i) => (
          <SwiperSlide key={i} className="bg-main-black rounded-sm h-full relative group cursor-pointer overflow-hidden">
            <Image
              src={item.snippet.thumbnails.medium.url}
              alt={item.snippet.title}
              width={item.snippet.thumbnails.medium.width}
              height={item.snippet.thumbnails.medium.height}
              className="relative z-10 object-contain object-center w-full h-full"
            />
            <Image
              src={item.snippet.thumbnails.medium.url}
              alt={item.snippet.title}
              width={item.snippet.thumbnails.medium.width}
              height={item.snippet.thumbnails.medium.height}
              className="absolute inset-0 w-full h-full object-cover blur-sm object-center"
            />
            <OpenVideo title={item.snippet.title} description={item.snippet.description} videoSrc={`https://www.youtube.com/embed/${item.id.videoId}?si=oTPj5Q6sfN3Vuxav`} />
            <ToolTip text={item.snippet.title}>
              <div className="absolute w-full inset-x-0 bottom-0 h-[32%] px-2 py-2.5 z-20 bg-gradient-to-t from-main-black via-main-black/80 to-transparent">
                <div className="absolute z-10 inset-0 w-full h-full blur-sm bg-main-black/50"></div>
                <div className="flex flex-col items-start justify-center h-full gap-1 text-start relative z-50">
                  <h4 className="font-medium text-main-white text-sm uppercase"> {textLimitCharecter(item.snippet.title)}</h4>
                  {item.snippet.description.length > 0 && <p className="font-medium text-main-white/80 text-xs lowercase">{textLimitCharecter(item.snippet.description, 70)}</p>}
                </div>
              </div>
            </ToolTip>
          </SwiperSlide>
        ))}
      </Swiper>
    </main>
  );
}
