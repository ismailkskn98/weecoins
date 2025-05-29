import React from "react";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";

export default function StackedScroll() {
  return (
    <div className="relative flex flex-col items-center fluid w-full gap-36 h-[calc(80vh*4)]">
      <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
    </div>
  );
}
