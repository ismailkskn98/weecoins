import React from "react";
import OurDonors from "./ourDonors";
import Image from "next/image";

export default function WeelifeMain({ children }) {

  return (
    <main className="w-full fluid gridContainer pt-44 pb-10">
      <article className="max-w-7xl mx-auto flex items-start gap-10 pb-28">
        <div className="w-full flex flex-col items-start gap-5">
          <h1 className="text-lg md:text-5xl text-black dark:text-white font-medium max-w-4xl">Weecoins Hakkımızda</h1>
          <p className="text-neutral-700 dark:text-neutral-300 text-sm lg:text-base w-full">
            Weecoins, Weegold ağı üzerinde çalışan, çok yönlü ve güçlü bir kripto varlıktır. Alışverişten akıllı sözleşmelere, staking'den yapay zekâ destekli uygulamalara kadar geniş bir kullanım alanıyla, sadece bir
            yatırım aracı değil, dijital ekonominin merkezinde yer alan bir ekosistem bileşenidir.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="relative overflow-hidden rounded-xl border-2 border-zinc-800">
            <Image src="/images/kurban-bagisi-3.jpg" alt="weecoins kurban yardımı" width={600} height={550} className="w-full h-full rounded-xl object-contain object-center" />
          </div>
          <div className="relative">
            <Image src="/images/kurban-bagisi-4.jpg" alt="weecoins kurban yardımı" width={600} height={550} className="w-full h-full rounded-xl object-contain object-center" />
          </div>
        </div>
      </article>
      <section className="w-full max-w-7xl mx-auto flex flex-col items-start gap-24">
        <OurDonors />
        <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          {children}

        </div>
      </section>
    </main>
  );
}
