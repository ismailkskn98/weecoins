"use client";
import React from "react";
import classNames from "classnames";
import { Link, usePathname } from "@/i18n/navgation";
import { motion } from "motion/react";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const pathname = usePathname();
  const t = useTranslations("Navbar");

  const navItems = [
    { name: t("home"), href: "/" },
    { name: t("about"), href: "/about" },
    { name: t("ecosystem"), href: "/ecosystem" },
    { name: t("news"), href: "/news" },
    { name: t("weelife"), href: "/weelife" },
    { name: t("successStories"), href: "/success-stories" },
    { name: t("contact"), href: "/contact" },
  ];

  return (
    <nav className="w-full h-full hidden md:flex items-center justify-end lg:justify-center gap-1.5">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={classNames("relative mx-2 cursor-pointer font-semibold text-nowrap py-3 px-1.5 text-background/70 uppercase text-xs lg:text-sm z-20 hover:text-background transition-all duration-200", {
            "text-white hover:text-white": pathname === item.href,
          })}
        >
          {pathname === item.href && (
            <>
              <motion.span
                layoutId="activeNavTop"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                className="inline-block bg-gradient-to-l from-transparent via-white to-transparent absolute left-1/2 top-0 -translate-x-1/2 w-full rounded-xl h-[2px]"
              ></motion.span>
            </>
          )}
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
