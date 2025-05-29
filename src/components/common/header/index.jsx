import Image from "next/image";
import React from "react";
import Navbar from "./navbar";
import HeaderRight from "./headerRight";

export default function Header() {
  return (
    <header className="fixed z-[9999] w-full fluid gridContainer bg-main-black py-6">
      <main className="w-full mx-auto grid grid-cols-3 justify-items-center gap-x-2">
        <article className="w-full flex items-center justify-start gap-1.5">
          <Image src="/images/weecoins-icon.png" width={100} height={100} alt="weecoins logo" className="object-contain max-w-[45px] object-center" />
          <span className="text-xl font-medium text-background">WeeCoins</span>
        </article>
        <Navbar />
        <HeaderRight />
      </main>
    </header>
  );
}
