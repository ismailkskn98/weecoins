"use client";
import React from "react";
import classNames from "classnames";
import { Link, usePathname } from "@/i18n/navgation";
import { motion } from "motion/react";

export default function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Ekosystem", href: "/ekosystem" },
    { name: "News", href: "/news" },
    { name: "WeeLife", href: "/weelife" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="w-full h-full hidden md:flex items-center justify-end lg:justify-center gap-1.5">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className={classNames("relative mx-2 cursor-pointer font-semibold py-3 px-1.5 text-background/70 uppercase text-xs lg:text-sm z-20 hover:text-background transition-all duration-200", {
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
