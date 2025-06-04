import SuccessStoriesMain from "@/components/successStories";
import React from "react";
import { data as jsonData } from "./data";
import SuccessStoriesHeader from "@/components/successStories/successStoriesHeader";
import SuccessStoriesCards from "@/components/successStories/successStoriesCards";

const getSuccessStories = async () => {
  try {
    const response = await fetch(
      `https://backoffice.weecoins.org/getWcpStories`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          whoiam: "Wee.Coins!Premium2030",
        }).toString(),
      },
      {
        next: {
          revalidate: 3600 * 24,
        },
      }
    );
    if (!response.ok) {
      throw new Error(`API Hatası: ${response.status}`);
    }

    return response.json();
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default async function SuccessStories() {
  const fetchedData = await getSuccessStories();
  const successStoriesData = fetchedData.data && fetchedData.data.length > 0 ? fetchedData.data : jsonData;
  console.log(successStoriesData);
  return (
    <SuccessStoriesMain>
      <SuccessStoriesHeader />
      <SuccessStoriesCards data={successStoriesData} />
    </SuccessStoriesMain>
  );
}
