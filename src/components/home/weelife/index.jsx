import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

export default function WeeLife() {
  const t = useTranslations("HomePage.weelife");
  const weeLifeItems = [
    {
      title: t("card1.title"),
      content: t("card1.content"),
      classNames: "h-[55vh] md:h-[65vh] mt-6",
    },
    {
      title: t("card2.title"),
      content: t("card2.content"),
      classNames: "h-[55vh] md:h-[65vh]",
    },
    {
      title: t("card3.title"),
      content: t("card3.content"),
      classNames: "h-[55vh] md:h-[65vh]",
    },
    {
      title: t("card4.title"),
      content: t("card4.content"),
      classNames: "h-[60vh] md:h-[50vh] 3xl:h-[40vh]",
    },
  ];

  return (
    <main className="relative w-full rounded-2xl fluid gridContainer text-main-white h-auto gap-y-[4vw] pt-20 md:pt-32">
      <article className="w-full flex items-center justify-center mb-16">
        <div className="flex flex-col items-center justify-center gap-3 max-w-3xl text-center">
          <h2 className="w-full capitalize text-main-white text-3xl sm:text-4xl lg:text-5xl 3xl:text-6xl font-semibold">{t("h2")}</h2>
          <p className="w-full text-sm sm:text-base lg:text-lg text-main-white/80 font-medium">{t("subtitle")}</p>
        </div>
      </article>
      <section className="w-full mx-auto max-w-full xl:max-w-11/12 2xl:max-w-10/12 3xl:max-w-9/12 flex md:flex-row flex-col items-start justify-between gap-6 md:gap-16">
        <main className="order-2 md:order-1 flex-1 flex flex-col items-start gap-16 max-w-2xl">
          {weeLifeItems.map((item, i) => (
            <article key={i} className={`w-full flex flex-col items-start gap-3 ${item.classNames}`}>
              <h3 className="text-4xl font-medium">{item.title}</h3>
              <p className="text-main-white/80 text-sm xl:text-base">{item.content}</p>
            </article>
          ))}
        </main>
        <div className="order-1 md:order-2 sticky top-28 md:top-32 w-full lg:w-[300px] 2xl:w-[450px] max-h-[250px] lg:max-h-[500px] 2xl:max-h-[500px] 3xl:max-h-[550px] overflow-hidden border-2 border-zinc-700 rounded-xl -mt-6">
          <Image src={"/images/bagiss.jpg"} alt="kurban bagisi" width={500} height={800} className="object-cover md:object-fill object-top md:object-center w-full h-full rounded-xl" />
        </div>
      </section>
    </main>
  );
}
