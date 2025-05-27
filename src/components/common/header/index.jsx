import Image from "next/image";
import React from "react";
import Navbar from "./navbar";
import HeaderRight from "./headerRight";

export default function Header() {
  return (
    <header className="w-full fluid gridContainer py-3">
      <main className="w-full mx-auto grid grid-cols-3 justify-items-center gap-x-2">
        <article className="w-full flex items-center justify-start gap-1">
          <Image src="/images/weecoins-icon.png" width={100} height={100} alt="weecoins logo" className="object-contain max-w-[50px] object-center" />
          <span className="text-xl font-medium">WeeCoins</span>
        </article>
        <Navbar />
        <HeaderRight />
      </main>
    </header>
  );
}
