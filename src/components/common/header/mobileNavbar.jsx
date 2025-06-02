"use client";
import React, { useState } from "react";
import { SlMenu } from "react-icons/sl";

import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Link, usePathname } from "@/i18n/navgation";
import classNames from "classnames";
import { motion } from "motion/react";

export default function MobileNavbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "WeeGold", href: "/weegold" },
    { name: "Ekosystem", href: "/ekosystem" },
    { name: "News", href: "/news" },
    { name: "WeeLife", href: "/weelife" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="block md:hidden justify-self-end">
        <SlMenu className="text-main-white text-lg" />
      </SheetTrigger>
      <SheetContent className={"z-[99999] bg-main-black border-none h-screen overflow-x-hidden overflow-y-auto py-10"}>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col items-start gap-4 px-0">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className={classNames(
                "relative flex items-center gap-2 mx-2 cursor-pointer font-semibold py-4 px-5 text-background/70 uppercase text-[13px] z-20 hover:text-background transition-all duration-200 w-full",
                {
                  "text-white hover:text-white bg-gradient-to-r from-main-white/5 to-transparent": pathname === item.href,
                }
              )}
            >
              {pathname === item.href && (
                <motion.span
                  layoutId="activeNavTop"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  className="inline-block bg-gradient-to-t from-transparent via-white to-transparent absolute top-1/2 left-0 -translate-y-1/2 h-full rounded-xl w-[2px]"
                ></motion.span>
              )}
              {item.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
