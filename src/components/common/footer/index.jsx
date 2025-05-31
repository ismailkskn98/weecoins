import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaExternalLinkAlt, FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { Link } from "@/i18n/navgation";

export default function Footer() {
  const navItems = [
    { name: "About", href: "/about" },
    { name: "Ekosystem", href: "/ekosystem" },
    { name: "News", href: "/news" },
    { name: "WeeLife", href: "/weelife" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer id="footer" className="pb-10 pt-20 w-full fluid gridContainer bg-black/10 border-t !border-white/10 mt-8">
      <main className="w-full">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 justify-items-start md:justify-items-center">
          <article className="space-y-6">
            <h3 className="text-lg font-bold text-white/90 mb-4 uppercase">Contact</h3>
            <div className="text-gray-400 space-y-4">
              <p className="flex items-center gap-6 text-sm">
                <span>Write to Us</span>
              </p>
              <p className="mb-4 text-sm">We carefully follow and implement your technical support requests, inquiries, and suggestions.</p>
              <Link
                href="mailto:info@criptoswaps.com"
                className="relative w-min text-nowrap group overflow-hidden flex items-center gap-1 bg-[#FDC739] text-text-black px-3 py-2 text-sm rounded-sm before:absolute before:content-['Send_an_Email'] before:top-1/2 before:-translate-y-12 before:left-1/2 before:-translate-x-1/2 before:transition-all before:duration-300 hover:before:-translate-y-1/2 before:transform before:text-text-black"
              >
                <span className="inline-block bg-main-black absolute -left-[1.5px] top-1/2 -translate-y-1/2 w-[3px] h-4"></span>
                <span className="inline-block bg-main-black absolute -right-[1.5px] top-1/2 -translate-y-1/2 w-[3px] h-4"></span>
                <span className="inline-block bg-main-black absolute left-1/2 top-[-1.5px] -translate-x-1/2 w-4 h-[3px]"></span>
                <span className="inline-block bg-main-black absolute left-1/2 bottom-[-1.5px] -translate-x-1/2 w-4 h-[3px]"></span>
                <span className="translate-y-0 group-hover:translate-y-12 transition-all duration-300 relative z-20 inline-block transform capitalize">Send an Email</span>
              </Link>
            </div>
          </article>

          <article className="space-y-4">
            <h3 className="text-lg font-bold text-white/90 uppercase">Hızlı Bağlantılar</h3>
            <nav className="flex flex-col items-start gap-4 text-sm capitalize">
              {navItems.map((item, i) => (
                <Link key={i} href={item.href} className="!text-gray-400 hover:!text-[#FCD535] transition-colors">
                  {item.name}
                </Link>
              ))}
            </nav>
          </article>

          <div className="space-y-4">
            <div className="flex items-center gap-1.5">
              <h3 className="text-lg font-bold !text-white/90 uppercase">hizmetlerimiz</h3>
              <FaExternalLinkAlt className="text-base translate-y-0 group-hover:translate-y-12 transition-all duration-300 relative z-20 inline-block transform" />
            </div>
            <nav className="flex flex-col items-start gap-4 text-sm capitalize">
              <Link href="https://www.criptoswaps.com/" target="_blank" className="!text-gray-400 hover:!text-[#FCD535] transition-colors">
                Criptoswaps
              </Link>
              <Link href="https://weezard.org" target="_blank" className="!text-gray-400 hover:!text-[#FCD535] transition-colors">
                WeeZard
              </Link>
              <Link href="https://weecard.org" target="_blank" className="!text-gray-400 hover:!text-[#FCD535] transition-colors">
                WeeCard
              </Link>
              <Link href="https://kobi.weecomi.com/" target="_blank" className="!text-gray-400 hover:!text-[#FCD535] transition-colors">
                WeeKobi
              </Link>
              <Link href="https://weesale.shop/" target="_blank" className="!text-gray-400 hover:!text-[#FCD535] transition-colors">
                WeeSale
              </Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold !text-white/90 uppercase">SOCIAL MEDIA</h3>
            <div className="!flex items-center gap-4 text-base">
              <Link
                href="https://x.com/criptoswapstr"
                target="_blank"
                className="!text-white/90 hover:!text-black hover:!bg-[#FCD535] hover:!no-underline w-10 h-10 rounded-[50%] !flex items-center justify-center border !border-white/10 transition-all duration-150"
              >
                <FaXTwitter />
              </Link>
              <Link
                href="https://www.facebook.com/weecomiinternational"
                target="_blank"
                className="!text-white/90 hover:!text-black hover:!bg-[#FCD535] hover:!no-underline w-10 h-10 rounded-[50%] !flex items-center justify-center border !border-white/10 transition-all duration-150"
              >
                <FaFacebookF />
              </Link>
              <Link
                href="https://tr.linkedin.com/company/criptoswaps-tr"
                target="_blank"
                className="!text-white/90 hover:!text-black hover:!bg-[#FCD535] hover:!no-underline w-10 h-10 rounded-[50%] !flex items-center justify-center border !border-white/10 transition-all duration-150"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href="https://t.me/criptoswaps"
                target="_blank"
                className="!text-white/90 hover:!text-black hover:!bg-[#FCD535] hover:!no-underline w-10 h-10 rounded-[50%] !flex items-center justify-center border !border-white/10 transition-all duration-150"
              >
                <FaTelegramPlane />
              </Link>
            </div>
          </div>
        </section>

        <section className="pt-8 border-t border-white/10 w-full flex items-center justify-center">
          <p className="text-gray-400 text-xs">© 2025 WeeCoins. All rights reserved.</p>
        </section>
      </main>
    </footer>
  );
}
