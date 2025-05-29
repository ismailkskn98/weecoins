import React from "react";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";
import Slide5 from "./Slide5";

export default function StackedScroll() {
  return (
    <div className="relative fluid w-full flex flex-col items-center h-[calc(70vh*5)] gap-[4vw]">
      <Slide1 index={1} classNames={"z-10"} />
      <Slide2 index={2} classNames={"z-20"} />
      <Slide3 index={3} classNames={"z-30"} />
      <Slide4 index={4} classNames={"z-40"} />
      <Slide5 index={5} classNames={"z-50"} />
    </div>
  );
}
