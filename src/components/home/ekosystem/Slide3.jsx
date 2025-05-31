import { DotBackgroundDemo } from "@/components/ui/dot-background";
import { Link } from "@/i18n/navgation";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Slide3({ classNames, index }) {
  return (
    <article
      className={`w-full max-w-[1100px] mx-5 h-[65vh] rounded-2xl sticky flex items-start justify-center gap-8 bg-zinc-900 p-3 overflow-hidden ${classNames}`}
      style={{
        top: `calc(${index} * 1.5rem + 4rem)`,
      }}
    >
      <span className="inline-block bg-main-black absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-1/6"></span>
      <span className="inline-block bg-main-black absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-1/6"></span>
      <span className="inline-block bg-main-black absolute left-1/2 -top-1.5 -translate-x-1/2 w-1/6 h-3"></span>
      <span className="inline-block bg-main-black absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-1/6 h-3"></span>
      <div className="w-full h-full max-w-[50%] flex flex-col items-start gap-2 justify-between p-9 text-main-white">
        <div className="w-full flex flex-col items-start gap-2">
          <h2 className="text-5xl font-medium mb-4">WeeZard</h2>
          <p className="text-[clamp(12px,1.05vw,17px)] text-main-white/70 tracking-wide">
            WeeZard ile eğlenceyi kazanca dönüştür! Jackpot, kazı kazan gibi oyunlarla vakit geçirirken WCP kazanırsın. Kazandığın WCP'leri çeşitli avantajlar için kullanabilir, daha fazlasını keşfettikçe keyfini
            katlayabilirsin. Her oyunda şansını dene, her kazançta heyecanı ikiye katla!
          </p>
          <div className="flex items-center gap-4 mt-3">
            <Link
              href="https://weezard.org"
              target="_blank"
              className="relative group overflow-hidden flex items-center gap-2 bg-main-black text-main-white px-3 py-2 text-sm xl:text-base rounded-sm before:absolute before:content-['WeeZard'] before:top-1/2 before:-translate-y-12 before:left-1/2 before:-translate-x-1/2 before:transition-all before:duration-300 hover:before:-translate-y-1/2 before:transform"
            >
              <span className="inline-block bg-zinc-900 absolute -left-[1.5px] top-1/2 -translate-y-1/2 w-[3px] h-4"></span>
              <span className="inline-block bg-zinc-900 absolute -right-[1.5px] top-1/2 -translate-y-1/2 w-[3px] h-4"></span>
              <span className="inline-block bg-zinc-900 absolute left-1/2 top-[-1.5px] -translate-x-1/2 w-4 h-[3px]"></span>
              <span className="inline-block bg-zinc-900 absolute left-1/2 bottom-[-1.5px] -translate-x-1/2 w-4 h-[3px]"></span>
              <span className="translate-y-0 group-hover:translate-y-12 transition-all duration-300 relative z-20 inline-block transform capitalize">WeeZard</span>
              <FaExternalLinkAlt className="text-sm translate-y-0 group-hover:translate-y-12 transition-all duration-300 relative z-20 inline-block transform" />
            </Link>
          </div>
        </div>
        <div className="mt-6 text-2xl font-semibold tracking-widest text-main-white [font-feature-settings:'zero'] p-2 rounded-xl bg-main-black">03</div>
      </div>
      <div className="relative flex-1 h-full rounded-xl overflow-hidden pt-12">
        <Image src={"/images/weezard-card.webp"} alt="weezard" width={400} height={800} className="absolute z-10 left-1/2 -translate-x-1/2 top-12 object-contain object-center" />
        <DotBackgroundDemo />
      </div>
    </article>
  );
}
