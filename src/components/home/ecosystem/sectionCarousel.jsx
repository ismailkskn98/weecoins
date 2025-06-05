import React from "react";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import Slide5 from "./Slide5";
import { useLocale } from "next-intl";

export default function StackedScroll() {
  const locale = useLocale();
  return (
    <div className={`relative fluid w-full flex flex-col items-center ${locale == "ru" ? "h-[calc(80vh*5)]" : "h-[calc(70vh*5)]"} gap-y-[4vw]`}>
      <Slide1 index={1} classNames={`z-10 ${locale == "ru" ? "h-[75vh]" : "h-[65vh]"}`} />
      <Slide2 index={2} classNames={`z-20 ${locale == "ru" ? "h-[75vh]" : "h-[65vh]"}`} />
      <Slide3 index={3} classNames={`z-30 ${locale == "ru" ? "h-[75vh]" : "h-[65vh]"}`} />
      <Slide4 index={4} classNames={`z-40 ${locale == "ru" ? "h-[75vh]" : "h-[65vh]"}`} />
      <Slide5 index={5} classNames={`z-50 ${locale == "ru" ? "h-[75vh]" : "h-[65vh]"}`} />
    </div>
  );
}
