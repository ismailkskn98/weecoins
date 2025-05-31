import { Link } from "@/i18n/navgation";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

export default function Slide4({ classNames, index }) {
  return (
    <article
      className={`w-full max-w-[1100px] mx-5 h-[65vh] rounded-2xl sticky flex items-start justify-center gap-8 bg-logo-button p-3 overflow-hidden ${classNames}`}
      style={{
        top: `calc(${index} * 1.5rem + 4rem)`,
      }}
    >
      <span className="inline-block bg-main-black absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-1/6"></span>
      <span className="inline-block bg-main-black absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-1/6"></span>
      <span className="inline-block bg-main-black absolute left-1/2 -top-1.5 -translate-x-1/2 w-1/6 h-3"></span>
      <span className="inline-block bg-main-black absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-1/6 h-3"></span>
      <div className="relative flex-1 h-full rounded-xl overflow-hidden p-2">
        <Image src={"/images/weekobi-card.webp"} alt="weezard" width={1100} height={1100} className="relative z-10 object-cover object-left w-full h-full rounded-xl" />
      </div>
      <div className="w-full h-full max-w-[50%] flex flex-col items-start justify-between gap-2 p-9 text-text-black">
        <div className="w-full flex flex-col items-start gap-2">
          <h2 className="text-5xl font-medium mb-4">WeeKobi</h2>
          <p className="text-[clamp(12px,1.05vw,17px)] text-text-black/70 tracking-wide">
            Weekobi'ye kaydol, satış yaptıkça hem sen hem müşterilerin WCP kazansın. Satışa dayalı reklam modeliyle görünürlüğün artar, kazancın büyür. Kazandığın WCP'yi sistemde tekrar kullan ya da değerlendir.
            Üstelik işletmen, WeeKobi kullanıcıları arasında öncelikli görünürlük kazanır. Müşterilerin seni kolayca keşfederek güvenle alışveriş yapar.
          </p>
          <div className="flex items-center gap-4 mt-3">
            <Link
              href="https://kobi.weecomi.com/"
              target="_blank"
              className="relative group overflow-hidden flex items-center gap-2 bg-main-black text-logo-button px-3 py-2 text-sm xl:text-base rounded-sm before:absolute before:content-['WeeKobi'] before:top-1/2 before:-translate-y-12 before:left-1/2 before:-translate-x-1/2 before:transition-all before:duration-300 hover:before:-translate-y-1/2 before:transform"
            >
              <span className="inline-block bg-logo-button absolute -left-[1.5px] top-1/2 -translate-y-1/2 w-[3px] h-4"></span>
              <span className="inline-block bg-logo-button absolute -right-[1.5px] top-1/2 -translate-y-1/2 w-[3px] h-4"></span>
              <span className="inline-block bg-logo-button absolute left-1/2 top-[-1.5px] -translate-x-1/2 w-4 h-[3px]"></span>
              <span className="inline-block bg-logo-button absolute left-1/2 bottom-[-1.5px] -translate-x-1/2 w-4 h-[3px]"></span>
              <span className="translate-y-0 group-hover:translate-y-12 transition-all duration-300 relative z-20 inline-block transform capitalize">WeeKobi</span>
              <FaExternalLinkAlt className="text-sm translate-y-0 group-hover:translate-y-12 transition-all duration-300 relative z-20 inline-block transform" />
            </Link>
          </div>
        </div>
        <div className="mt-6 text-2xl self-end font-semibold tracking-widest text-logo-button [font-feature-settings:'zero'] p-2 rounded-xl bg-main-black">04</div>
      </div>
    </article>
  );
}
