import NewsMain from "@/components/news";
import YoutubeVideoBig from "@/components/news/YoutubeVideoBig";
import React from "react";

const getYoutubeVideos = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/youtube`, {
      cache: "force-cache",
      next: { revalidate: 86400 },
    });

    if (!res.ok) {
      console.error("yotube video isteği başarısız", res.status);
      return [];
    }

    return res.json();
  } catch (error) {
    console.error("yotube video isteği başarısız error:", error);
    return [];
  }
};

export default async function News() {
  const videos = await getYoutubeVideos();
  return <NewsMain>{videos.length > 0 && <YoutubeVideoBig videos={videos} />}</NewsMain>;
}
