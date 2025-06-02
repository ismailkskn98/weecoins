import React from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { FaPlay } from "react-icons/fa6";

export default function OpenVideo({ title, description, videoSrc }) {
  return (
    <Dialog>
      <DialogTrigger className="absolute z-50 left-1/2 top-1/2 -translate-1/2 w-[50px] h-[50px] rounded-full group-hover:scale-110 transition-transform duration-200 grid place-content-center overflow-hidden cursor-pointer">
        <div className="absolute inset-0 w-full h-full bg-main-black/80 blur-md"></div>
        <FaPlay className="absolute left-1/2 top-1/2 -translate-1/2 text-main-white mt-[1px] z-10 text-lg" />
      </DialogTrigger>
      <DialogContent className={"h-full max-h-[60vh] w-full max-w-[50vw] overflow-hidden flex flex-col items-start gap-2 rounded-md text-main-black px-8 pt-12 pb-8 2xl bg-main-white border-none"}>
        <span className="inline-block bg-main-black absolute -left-1.5 top-1/2 -translate-y-1/2 w-3 h-1/6 rounded-2xl"></span>
        <span className="inline-block bg-main-black absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-1/6 rounded-2xl"></span>
        <span className="inline-block bg-main-black absolute left-1/2 -top-1.5 -translate-x-1/2 w-1/6 h-3 rounded-2xl"></span>
        <span className="inline-block bg-main-black absolute left-1/2 -bottom-1.5 -translate-x-1/2 w-1/6 h-3 rounded-2xl"></span>
        <div className="relative overflow-hidden w-full h-full">
          <iframe src={videoSrc} className="size-full rounded-lg" allowFullScreen allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
        <DialogHeader className={"text-text-black flex flex-col items-start gap-1"}>
          <DialogTitle className={"text-sm xl:text-base font-medium"}>{title}</DialogTitle>
          <DialogDescription className={"text-xs xl:text-sm font-normal text-text-black/80"}>{description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
