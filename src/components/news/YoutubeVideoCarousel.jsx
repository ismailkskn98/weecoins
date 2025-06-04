"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import classNames from "classnames";
import Image from "next/image";
import { useRouter } from "@/i18n/navgation";
import { useLocale } from "next-intl";

export default function YoutubeVideoCarousel({ activeVideo, videos }) {
  const router = useRouter();
  const locale = useLocale();

  const dateFormat = (date) => {
    const newDate = new Date(date);

    const formatted = new Intl.DateTimeFormat(locale, {
      year: "numeric",
      month: "long",
      day: "numeric",
    }).format(newDate);
    return formatted;
  };

  const handleVideoClick = (videoId, title, videoDate, thumbnail) => {
    activeVideo(videoId, title, dateFormat(videoDate));
    router.push("#mediaVideo");
  };

  return (
    <Swiper
      direction="vertical"
      spaceBetween={10}
      breakpoints={{
        0: {
          slidesPerView: 2,
        },
        700: {
          slidesPerView: 3,
        },
        900: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },
      }}
      autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
      loop={true}
      grabCursor={true}
      modules={[Navigation, Pagination, Autoplay]}
      className={classNames("h-full max-h-[560px] w-full ")}
    >
      {videos &&
        videos.length > 0 &&
        videos.map((item, index) => {
          return (
            <SwiperSlide
              key={index}
              onClick={() => {
                handleVideoClick(item.id.videoId, item.snippet.title, item.snippet.publishedAt, item.snippet.thumbnails.high.url);
              }}
              className="w-full group relative !flex items-start justify-start gap-4 h-full cursor-pointer overflow-hidden"
            >
              <Image src={item.snippet.thumbnails.high.url} alt={item.snippet.title} width={400} height={360} className="h-full w-full max-w-[30%] rounded-lg object-cover object-center" />
              <div className="h-full w-full max-w-[400px] flex-1 flex flex-col items-start gap-2 text-xs sm:text-sm font-medium text-main-white">
                {item.snippet.title}
                <p className="text-xs text-main-white/70">{dateFormat(item.snippet.publishedAt)}</p>
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
}
