import Image from "next/image";
import React from "react";

import "./hero.css";

export default function HeroAnimateIcons() {
  return (
    <div className="fluid absolute inset-0 w-full h-full pointer-events-none -z-10">
      <Image src="/images/weecard.png" alt="Hero Icon 1" width={100} height={100} className="absolute top-40 left-32 object-center object-contain w-28 hero-float-1" />
      <Image src="/images/weezard.png" alt="Hero Icon 2" width={100} height={100} className="absolute bottom-16 left-28 object-center object-contain w-28 hero-float-2" />
      <Image src="/images/weesale.png" alt="Hero Icon 3" width={100} height={100} className="absolute top-1/4 right-32 object-center object-contain w-28 hero-float-3" />
      <Image src="/images/weecomi.png" alt="Hero Icon 4" width={100} height={100} className="absolute bottom-1/7 -right-8 object-center object-contain w-28 hero-float-4" />
    </div>
  );
}
