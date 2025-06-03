import React from "react";
import { Timeline } from "@/components/ui/timeline";
import Image from "next/image";
import { Link } from "@/i18n/navgation";
import { IoIosLink } from "react-icons/io";
import WeeComiGlobal from "./weeComiGlobal";

export function TimelineDemo() {
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
      title: "WeeGold Network Nedir?",
      content: (
        <div>
          <p className="mb-12 text-xs md:text-sm lg:text-base font-normal text-main-white/90">
            WeeGold ağı, WeeComi International tarafından işletilen, kripto para dünyasında geniş kullanım alanlarına sahip bir ağdır. 2020 yılında piyasaya sürülen WeeCoins Premium (WCP) ve WeeCoins (WCS) kripto
            paralarını destekler ve çeşitli uluslararası platformlarda aktif olarak işlem görür.
          </p>
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
      title: "Blockchain Nedir?",
      content: (
        <div>
          <p className="mb-12 text-xs md:text-sm lg:text-base font-normal text-main-white/90">
            Blockchain, verilerin güvenli ve şeffaf bir şekilde saklanmasını sağlayan dağıtık bir defter teknolojisidir. Her veri parçası, zincirde bir blok olarak yer alır ve bu bloklar kriptografik olarak
            birbirine bağlıdır.
          </p>
          <div className="">
            <Image src="/images/blockchain.png" alt="blockchain" width={500} height={500} className="h-40 w-full rounded-lg object-contain md:h-60 lg:h-96" />
          </div>
          <p className="mb-12 text-xs md:text-sm lg:text-base font-normal text-main-white/90">
            Bu teknoloji, özellikle kripto paralar için kullanılır, ancak finans, tedarik zinciri, dijital kimlik gibi birçok alanda da uygulanır. Blockchain’in merkezi olmayan yapısı, aracıları ortadan kaldırarak
            maliyetleri düşürür ve işlemleri hızlandırır.
          </p>
        </div>
      ),
    },
    {
      title: "WeeComi International",
      content: (
        <div>
          <p className="mb-12 text-xs md:text-sm lg:text-base font-normal text-main-white/90">
            2013 yılında kurulan WeeComi International, yapay zeka tabanlı kripto para borsalarında işlem gören projelere sahip bir yazılım şirketidir. Dünya genelinde 10 ülkede yatırımcısı bulunan şirketin, 40'a
            yakın iş ortağı ile global bir marka konumundadır.
          </p>
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
          <p className="mb-4 text-xs md:text-sm font-normal text-main-white/90">
            WeeLife, WeeComi International tarafından Afrika'da, özellikle Tanzanya'da yaşam kalitesini artırmak amacıyla başlatılan bir yardım projesidir.
          </p>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">Proje, dünya çapında yardım zinciri oluşturmayı ve sosyal sorumluluk projelerini teşvik etmeyi hedefler.</p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/images/bagiss.jpg"
              alt="hero template"
              width={500}
              height={500}
              className="h-40 w-full rounded-lg object-cover object-top shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-60 lg:h-96"
            />
            <Image
              src="/images/weeLife-logolar-2.png"
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
      <Timeline data={data} />
    </div>
  );
}

export default TimelineDemo;
