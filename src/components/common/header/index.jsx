"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import HeaderRight from "./headerRight";
import MobileNavbar from "./mobileNavbar";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Link } from "@/i18n/navgation";

export default function Header() {
  const { scrollY, scrollYProgress } = useScroll();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showBorder, setShowBorder] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = Math.abs(current - lastScrollY);
    if (diff < 100) return;

    if (current > 500) {
      setShowHeader(lastScrollY > current ? true : false);
    } else {
      setShowHeader(true);
    }

    setLastScrollY(current);
  });

  useMotionValueEvent(scrollY, "change", (current) => {
    if (current > 50) {
      setShowBorder(true);
    } else {
      setShowBorder(false);
    }
  });

  const yOffset = showHeader ? 0 : windowWidth > 1024 ? -90 : -98;
  return (
    <motion.header
      animate={{ y: yOffset }}
      transition={{ type: "tween", duration: 0.15, ease: "easeInOut" }}
      className={`fluid gridContainer fixed inset-x-0 z-[999] py-3 lg:pb-3.5 lg:pt-4 overflow-hidden ${
        showBorder ? "border-b border-white/10" : "border-b border-transparent"
      } bg-main-black/90 transition-all duration-300 px-2 sm:px-0`}
    >
      <HeaderRight classNames={"flex lg:hidden pb-3 pb-1"} />
      <main className="w-full mx-auto grid grid-cols-2 lg:grid-cols-3 justify-items-center gap-x-2">
        <Link href="/" className="w-full flex items-center justify-start gap-1.5">
          <Image src="/images/weecoins-icon.png" width={100} height={100} alt="weecoins logo" className="object-contain max-w-[35px] lg:max-w-[45px] object-center" />
          <span className="text-lg lg:text-xl font-medium text-background">WeeCoins</span>
        </Link>
        <Navbar />
        <MobileNavbar />
        <HeaderRight classNames={"hidden lg:flex"} />
      </main>
    </motion.header>
  );
}
