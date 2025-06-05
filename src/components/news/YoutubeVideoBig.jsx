"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import htmlEncoderDecoder from "html-encoder-decoder";
import YoutubeVideoCarousel from "./YoutubeVideoCarousel";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

export default function YoutubeVideoBig({ videos }) {
  let encoded = null;

  const [currentVideo, setCurrentVideo] = useState(
    videos && videos.length > 0
      ? {
        videoUrl: `https://youtu.be/${videos[0].id.videoId}`,
        title: videos[0].snippet.title,
        videoData: "",
      }
      : {
        videoUrl: `https://youtu.be/ezTGPkDZTcw`,
        title: "WEECOINS - Hayallerine Aralanan Kapı",
        videoData: "",
      }
  );

  const activeVideo = (videoId, title, videoData) => {
    setCurrentVideo({
      videoUrl: `https://youtu.be/${videoId}`,
      title,
      videoData,
    });
  };

  return (
    <main className="flex w-full flex-col items-start gap-12 rounded-[22px] bg-video-bg py-14 sm:py-28">
      <section className="flex w-full flex-col items-start justify-start gap-12 sm:gap-16 md:flex-row">
        <article className="flex w-full max-w-full flex-1 flex-col items-start gap-4 px-4 lg:max-w-[70%]">
          <div className="h-[420px] w-full overflow-hidden rounded-2xl lg:h-[500px]">
            <ReactPlayer style={{ borderRadius: "16px", overflow: "hidden" }} url={currentVideo.videoUrl} controls width="100%" height="100%" volume={0.4} progressInterval={800} />
          </div>
          <div className="relative flex flex-col items-start gap-4 text-theme-black">
            <h4 className="text-start text-xl font-medium lg:text-2xl">{(encoded = htmlEncoderDecoder.decode(currentVideo.title))}</h4>
            {currentVideo.videoData.length > 0 && <p className="text-sm text-main-white/70">{currentVideo.videoData}</p>}
          </div>
        </article>

        <div className="w-full flex-1 px-4">
          <YoutubeVideoCarousel activeVideo={activeVideo} videos={videos} />
        </div>
      </section>
    </main>
  );
}
