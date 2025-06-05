import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { Link } from "@/i18n/navgation";
import { IoIosLink } from "react-icons/io";
import WeeComiGlobal from "./weeComiGlobal";
import { useTranslations } from "next-intl";

export function TimelineDemo() {
  const t = useTranslations("AboutPage");

  const weeGoldImages = [
    {
      link: "https://weecoinspremium.com",
      src: "/images/weecoins-premium-site.png",
      alt: "WeeCoins Premium",
      width: 500,
      height: 500,
    },
    {
      link: "https://weecoins.com",
      src: "/images/weecoins-site.png",
      alt: "WeeCoins",
      width: 500,
      height: 500,
    },
    {
      link: "https://weecomi.com",
      src: "/images/weecomi-site.png",
      alt: "WeeComi",
      width: 500,
      height: 500,
    },
    {
      link: "https://www.criptoswaps.com",
      src: "/images/criptoswaps-site.png",
      alt: "Criptoswaps",
      width: 500,
      height: 500,
    },
  ];

  const data = [
    {
      title: t("weegold.title"),
      content: (
        <div>
          <p className="mb-12 text-xs md:text-sm lg:text-base font-normal text-main-white/90 leading-7">{t("weegold.content")}</p>
          <div className="grid grid-cols-2 gap-4">
            {weeGoldImages.map((item, index) => (
              <Link href={item.link} key={index} target="_blank" className="relative group">
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-logo-button text-center">{item.alt}</p>
                  <IoIosLink className="text-logo-button" />
                </div>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.width}
                  height={item.height}
                  className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                />
              </Link>
            ))}
          </div>
        </div>
      ),
    },
    {
      title: t("blockchain.title"),
      content: (
        <div>
          <p className="mb-12 text-xs md:text-sm lg:text-base font-normal text-main-white/90 leading-7">{t("blockchain.content")}</p>
          <div className="">
            <Image src="/images/blockchain.png" alt="blockchain" width={500} height={500} className="h-40 w-full rounded-lg object-contain md:h-60 lg:h-96" />
          </div>
          <p className="mb-12 text-xs md:text-sm lg:text-base font-normal text-main-white/90 leading-7">{t("blockchain.content2")}</p>
        </div>
      ),
    },
    {
      title: "WeeComi International",
      content: (
        <div>
          <p className="mb-12 text-xs md:text-sm lg:text-base font-normal text-main-white/90 leading-7">{t("weecomi.content")}</p>
          <div className="relative h-40 w-full md:h-60 lg:h-96 2xl:h-[30rem]">
            <WeeComiGlobal />
          </div>
        </div>
      ),
    },
    {
      title: "WeeLife",
      content: (
        <div>
          <p className="mb-1 text-xs md:text-sm lg:text-base font-normal text-main-white/90 leading-7">{t("weelife.content")} </p>
          <p className="mb-12 text-xs md:text-sm lg:text-base font-normal text-main-white/90 leading-7">{t("weelife.content2")}</p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/bagiss.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="h-40 w-full rounded-lg object-cover object-top shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-60 lg:h-96"
            />
            <Image
              src="/images/weelife-logolar-2.png"
              alt="hero template"
              width={500}
              height={500}
              className="h-40 w-full rounded-lg object-cover object-top shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-60 lg:h-96"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} isAbout={true} title={t("h1")} subtitle={t("subtitle")} />
    </div>
  );
}

export default TimelineDemo;
