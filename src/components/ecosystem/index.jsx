import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { Link } from "@/i18n/navgation";
import { FaExternalLinkAlt } from "react-icons/fa";
import HandHold from "./handHold";
import { useTranslations } from "next-intl";

export function EcosystemMain() {
  const t = useTranslations("EcosystemPage");
  const weeCardImages = ["/images/weecard-theme/theme-1.png", "/images/weecard-theme/theme-2.png", "/images/weecard-theme/theme-3.png", "/images/weecard-theme/theme-4.png"];

  const data = [
    {
      title: "WeeCard",
      content: (
        <section className="w-full flex flex-col items-start gap-3">
          <div className="w-full flex items-start justify-between gap-4">
            <div className="w-full flex flex-col items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <Image src="/images/weecard.png" alt="weezard" width={50} height={50} className="h-12 w-12 rounded-full object-contain" />
                <h3 className="text-2xl font-medium">{t("weecard.title")}</h3>
              </div>
              <p className="text-xs md:text-sm font-normal text-main-white/90 leading-7">{t("weecard.content")}</p>
              <Link
                href="https://weecard.org"
                target="_blank"
                className="relative group overflow-hidden flex items-center gap-2 bg-logo-button text-text-black mt-3 px-3 py-2 text-sm xl:text-base rounded-sm before:absolute before:content-['WeeCard'] before:top-1/2 before:-translate-y-12 before:left-1/2 before:-translate-x-1/2 before:transition-all before:duration-300 hover:before:-translate-y-1/2 before:transform"
              >
                <span className="inline-block bg-zinc-900 absolute -left-[1.5px] top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-2xl"></span>
                <span className="inline-block bg-zinc-900 absolute -right-[1.5px] top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-2xl"></span>
                <span className="inline-block bg-zinc-900 absolute left-1/2 top-[-1.5px] -translate-x-1/2 w-4 h-[3px] rounded-2xl"></span>
                <span className="inline-block bg-zinc-900 absolute left-1/2 bottom-[-1.5px] -translate-x-1/2 w-4 h-[3px] rounded-2xl"></span>
                <span className="translate-y-0 group-hover:translate-y-12 transition-all duration-300 relative z-20 inline-block transform capitalize">WeeCard</span>
                <FaExternalLinkAlt className="text-sm translate-y-0 group-hover:translate-y-12 transition-all duration-300 relative z-20 inline-block transform" />
              </Link>
            </div>
            <div className="relative w-full max-w-[40%] h-[400px]">
              <HandHold />
              <Image
                src="/images/weecard-dashboard.webp"
                alt="weecard"
                width={1000}
                height={500}
                className="h-40 w-full rounded-lg object-cover object-left hover:object-right transition-all duration-300 md:h-60 lg:h-96"
              />
            </div>
          </div>
          <div className="w-full flex items-start gap-4 mt-4">
            {weeCardImages.map((image, index) => (
              <Image key={index} src={image} alt="weecard" width={500} height={500} className="h-40 w-full rounded-lg object-cover object-top hover:object-bottom transition-all duration-300 md:h-60 lg:h-80" />
            ))}
          </div>
        </section>
      ),
    },
    {
      title: "WeeZard",
      content: (
        <div className="w-full flex items-start justify-between gap-4">
          <div className="w-full flex flex-col items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <Image src="/images/weezard.png" alt="weezard" width={50} height={50} className="h-12 w-12 rounded-full object-contain" />
              <h3 className="text-2xl font-medium">{t("weezard.title")}</h3>
            </div>
            <p className="text-xs md:text-sm font-normal text-main-white/90 leading-7">{t("weezard.content")}</p>
            <Link
              href="https://weezard.org"
              target="_blank"
              className="relative group overflow-hidden flex items-center gap-2 bg-logo-button text-text-black mt-3 px-3 py-2 text-sm xl:text-base rounded-sm before:absolute before:content-['WeeZard'] before:top-1/2 before:-translate-y-12 before:left-1/2 before:-translate-x-1/2 before:transition-all before:duration-300 hover:before:-translate-y-1/2 before:transform"
            >
              <span className="inline-block bg-zinc-900 absolute -left-[1.5px] top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-2xl"></span>
              <span className="inline-block bg-zinc-900 absolute -right-[1.5px] top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-2xl"></span>
              <span className="inline-block bg-zinc-900 absolute left-1/2 top-[-1.5px] -translate-x-1/2 w-4 h-[3px] rounded-2xl"></span>
              <span className="inline-block bg-zinc-900 absolute left-1/2 bottom-[-1.5px] -translate-x-1/2 w-4 h-[3px] rounded-2xl"></span>
              <span className="translate-y-0 group-hover:translate-y-12 transition-all duration-300 relative z-20 inline-block transform capitalize">WeeZard</span>
              <FaExternalLinkAlt className="text-sm translate-y-0 group-hover:translate-y-12 transition-all duration-300 relative z-20 inline-block transform" />
            </Link>
          </div>
          <div className="w-full max-w-[40%] h-[400px]">
            <Image src="/images/weezard-card.webp" alt="weezard" width={500} height={500} className="h-40 w-full rounded-lg object-cover object-top hover:object-bottom transition-all duration-300 md:h-60 lg:h-96" />
          </div>
        </div>
      ),
    },
    {
      title: "WeeKobi",
      content: (
        <section className="w-full flex flex-col items-start gap-16">
          <main className="w-full flex items-start justify-between gap-4">
            <article className="w-full flex flex-col items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <Image src="/images/weecomi.png" alt="weecomi" width={50} height={50} className="h-12 w-12 rounded-full object-contain" />
                <h3 className="text-2xl font-medium">{t("weekobi.title")}</h3>
              </div>
              <p className="text-xs md:text-sm font-normal text-main-white/90 leading-7">{t("weekobi.content")}</p>
              <Link
                href="https://weecomi.com/"
                target="_blank"
                className="relative group overflow-hidden flex items-center gap-2 bg-logo-button text-text-black mt-3 px-3 py-2 text-sm xl:text-base rounded-sm before:absolute before:content-['WeeKobi'] before:top-1/2 before:-translate-y-12 before:left-1/2 before:-translate-x-1/2 before:transition-all before:duration-300 hover:before:-translate-y-1/2 before:transform"
              >
                <span className="inline-block bg-zinc-900 absolute -left-[1.5px] top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-2xl"></span>
                <span className="inline-block bg-zinc-900 absolute -right-[1.5px] top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-2xl"></span>
                <span className="inline-block bg-zinc-900 absolute left-1/2 top-[-1.5px] -translate-x-1/2 w-4 h-[3px] rounded-2xl"></span>
                <span className="inline-block bg-zinc-900 absolute left-1/2 bottom-[-1.5px] -translate-x-1/2 w-4 h-[3px] rounded-2xl"></span>
                <span className="translate-y-0 group-hover:translate-y-12 transition-all duration-300 relative z-20 inline-block transform capitalize">WeeKobi</span>
                <FaExternalLinkAlt className="text-sm translate-y-0 group-hover:translate-y-12 transition-all duration-300 relative z-20 inline-block transform" />
              </Link>
            </article>
            <article className="w-full max-w-[40%] h-[400px]">
              <Image
                src="/images/weecomi-phone.webp"
                alt="weecomi phone"
                width={500}
                height={500}
                className="h-40 w-full rounded-lg object-cover object-top hover:object-bottom transition-all duration-300 md:h-60 lg:h-96"
              />
            </article>
          </main>
          <main className="w-full flex items-start justify-between gap-4">
            <article className="w-full max-w-[40%] h-[320px]">
              <Image src="/images/weecomi-desktop.png" alt="weecomi desktop" width={500} height={500} className="h-40 w-full rounded-lg object-contain object-top md:h-60 lg:h-60" />
            </article>
            <article className="w-full flex flex-col items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <Image src="/images/weecomi.png" alt="weecomi" width={50} height={50} className="h-12 w-12 rounded-full object-contain" />
                <h3 className="text-2xl font-medium capitalize">{t("weekobi.title2")}</h3>
              </div>
              <p className="text-xs md:text-sm font-normal text-main-white/90 leading-7">{t("weekobi.content2")}</p>
            </article>
          </main>
        </section>
      ),
    },
    {
      title: "WeeSale",
      content: (
        <div className="w-full flex items-start justify-between gap-4">
          <div className="w-full flex flex-col items-start justify-between gap-2">
            <div className="flex items-center gap-2">
              <Image src="/images/weesale.png" alt="weesale" width={60} height={60} className="h-14 w-14 rounded-full object-contain" />
              <h3 className="text-2xl font-medium">{t("weesale.title")}</h3>
            </div>
            <p className="text-xs md:text-sm font-normal text-main-white/90 leading-7">{t("weesale.content")}</p>
            <Link
              href="https://weesale.shop"
              target="_blank"
              className="relative group overflow-hidden flex items-center gap-2 bg-logo-button text-text-black mt-3 px-3 py-2 text-sm xl:text-base rounded-sm before:absolute before:content-['WeeSale'] before:top-1/2 before:-translate-y-12 before:left-1/2 before:-translate-x-1/2 before:transition-all before:duration-300 hover:before:-translate-y-1/2 before:transform"
            >
              <span className="inline-block bg-zinc-900 absolute -left-[1.5px] top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-2xl"></span>
              <span className="inline-block bg-zinc-900 absolute -right-[1.5px] top-1/2 -translate-y-1/2 w-[3px] h-4 rounded-2xl"></span>
              <span className="inline-block bg-zinc-900 absolute left-1/2 top-[-1.5px] -translate-x-1/2 w-4 h-[3px] rounded-2xl"></span>
              <span className="inline-block bg-zinc-900 absolute left-1/2 bottom-[-1.5px] -translate-x-1/2 w-4 h-[3px] rounded-2xl"></span>
              <span className="translate-y-0 group-hover:translate-y-12 transition-all duration-300 relative z-20 inline-block transform capitalize">WeeSale</span>
              <FaExternalLinkAlt className="text-sm translate-y-0 group-hover:translate-y-12 transition-all duration-300 relative z-20 inline-block transform" />
            </Link>
          </div>
          <div className="w-full max-w-[40%] h-[400px]">
            <Image
              src="/images/weesale-dessktop.png"
              alt="weesale"
              width={1000}
              height={500}
              className="h-40 w-full rounded-lg object-cover object-left hover:object-right transition-all duration-300 md:h-60 lg:h-96"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={data} title={t("h1")} subtitle={t("subtitle")} />
    </div>
  );
}

export default EcosystemMain;
