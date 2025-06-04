"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import classNames from "classnames";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { Link } from "@/i18n/navgation";
import { FiExternalLink } from "react-icons/fi";

export default function NewspapersCarousel() {
  const [slidesPerView, setSlidesPerView] = useState(2);
  const t = useTranslations("NewsFromUs");

  const items = [
    {
      title: t("newspapers.weecoins.title"),
      subtitle: t("newspapers.weecoins.subtitle"),
      image: "newspaper-weecoins.webp",
      url: "https://www.hurriyet.com.tr/weecomi-weecoins-ile-cripto-para-sektorunde-ezberleri-bozdu-41615714",
    },
    {
      title: t("newspapers.cryptoCurrencyExpert.title"),
      subtitle: t("newspapers.cryptoCurrencyExpert.subtitle"),
      image: "kripto-odul.jpeg",
      url: "https://www.analizgazetesi.com.tr/haber/ozkan-cibir-yilin-en-iyi-kripto-para-uzmani-secildi-3618/",
    },
    {
      title: t("newspapers.shopping.title"),
      subtitle: t("newspapers.shopping.subtitle"),
      image: "shopping.webp",
      url: "https://www.haberler.com/guncel/weecoins-ile-alisveriste-yeni-donem-13656945-haberi/",
    },
    {
      title: t("newspapers.kripto.title"),
      subtitle: t("newspapers.kripto.subtitle"),
      image: "kripto-uzmani.webp",
      url: "https://www.sondakika.com/teknoloji/haber-ozkan-cibir-yilin-en-iyi-kripto-para-uzmani-16723229/ ",
    },
    {
      title: t("newspapers.expert.title"),
      subtitle: t("newspapers.expert.subtitle"),
      image: "expert-1.webp",
      url: "https://www.haberler.com/teknoloji/ozkan-cibir-yilin-en-iyi-kripto-para-uzmani-16723228-haberi",
    },
  ];

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth > 1280) {
        setSlidesPerView(4);
      } else if (window.innerWidth > 900) {
        setSlidesPerView(4);
      } else if (window.innerWidth > 700) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(2);
      }
    };

    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);

    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  return (
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.7, ease: "easeOut" }}>
      <Swiper
        spaceBetween={slidesPerView === 2 ? 20 : 50}
        slidesPerView={slidesPerView}
        autoplay={{ delay: 3000, pauseOnMouseEnter: true }}
        loop={true}
        modules={[Navigation, Pagination, Autoplay]}
        className={classNames("w-full", {
          "h-[250px]": slidesPerView !== 2,
          "h-[180px]": slidesPerView === 2,
        })}
      >
        {items.map((item) => {
          return (
            <SwiperSlide key={item.title} className="group relative cursor-pointer overflow-hidden rounded-xl border-2 border-zinc-800 bg-black">
              <Link href={item.url} target="_blank" className="group flex h-full w-full flex-col items-center justify-center gap-3 bg-black">
                <div className="relative h-full w-full overflow-hidden">
                  <Image src={`/images/${item.image}`} alt={item.title} width={400} height={360} className="h-full w-full object-cover absolute inset-0 blur-xs" />
                  <Image
                    src={`/images/${item.image}`}
                    alt={item.title}
                    width={400}
                    height={360}
                    className="relative z-10 h-full w-full object-contain object-center transition-all duration-300 group-hover:scale-110"
                  />
                </div>
                <div className="absolute z-20 inset-0 opacity-75 group-hover:opacity-95 transition-all duration-300 w-full bg-main-black/80 px-2 pb-3 pt-10 mobileL:px-3 sm:pb-5 sm:pt-14 xl:px-5 flex flex-col items-center justify-center gap-2 text-center">
                  <Image
                    src="/images/weecoins-icon.png"
                    alt="weecoins premium logo"
                    width={70}
                    height={70}
                    quality={40}
                    className="absolute top-6 right-4 h-10 w-10 drop-shadow-[0_0_5px_#ffc107] transition-all duration-1000 group-hover:rotate-[360deg] sm:top-9 sm:right-5 sm:h-12 sm:w-12 lg:top-4 xl:h-12 xl:w-12"
                  />
                  <h5 className="line-clamp-1 text-center text-xs font-semibold capitalize text-zinc-200 md:text-sm lg:text-base">{item.title}</h5>
                  <div className="mb-1 mt-1 line-clamp-2 w-full text-center text-xs sm:text-sm lowercase text-zinc-300 sm:mb-0">
                    {item.subtitle.length > 80
                      ? item.subtitle.charAt(0).toUpperCase() + item.subtitle.substring(1, 80).toLowerCase() + "..."
                      : item.subtitle.charAt(0).toUpperCase() + item.subtitle.substring(1).toLowerCase()}
                  </div>
                  <FiExternalLink className="text-white text-3xl opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300" />
                </div>
              </Link>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
}
