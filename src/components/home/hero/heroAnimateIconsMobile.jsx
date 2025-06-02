import Image from "next/image";
import React from "react";

import "./hero.css";

export default function HeroAnimateIconsMobile() {
  return (
    <div className="w-full flex md:hidden justify-center items-center gap-3 px-2 mt-2">
      <Image src="/images/weezard.png" alt="Hero Icon 2" width={100} height={100} className="object-center object-contain w-16" />
      <Image src="/images/weecomi.png" alt="Hero Icon 4" width={100} height={100} className="object-center object-contain w-16" />
      <Image src="/images/weesale.png" alt="Hero Icon 3" width={100} height={100} className="object-center object-contain w-20" />
      <Image src="/images/weecard.png" alt="Hero Icon 1" width={100} height={100} className="object-center object-contain w-20" />
    </div>
  );
}
