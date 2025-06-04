import SuccessStoryById from "@/components/successStories/successStoryById";
import React from "react";

const getSuccessStoryById = async (id) => {
  try {
    const response = await fetch("https://backoffice.weecoins.org/getWcpStories", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({
        whoiam: "Wee.Coins!Premium2030",
      }).toString(),
    });
    if (!response.ok) {
      throw new Error(`API Hatası: ${response.status}`);
    }
    const data = await response.json();
    if (!data.status) {
      throw notFound();
    }
    const successStory = data.data.find((item) => Number(item.id) === Number(id));
    if (!successStory) {
      throw notFound();
    }

    return successStory;
  } catch (error) {
    console.log(error);
    throw notFound();
  }
};

export default async function SuccessStory({ params }) {
  const { id } = await params;
  const data = await getSuccessStoryById(id);

  return <SuccessStoryById data={data} />;
}
