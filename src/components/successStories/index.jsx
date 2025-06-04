"use client";
import React, { useEffect } from "react";

export default function SuccessStoriesMain({ children }) {
  useEffect(() => {
    const savedScroll = sessionStorage.getItem("scrollPos");
    if (savedScroll) {
      window.scrollTo({ top: parseInt(savedScroll), behavior: "smooth" });
      sessionStorage.removeItem("scrollPos");
    }
  }, []);
  return <main className="w-full fluid gridContainer pt-44 pb-10">{children}</main>;
}
