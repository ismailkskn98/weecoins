import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import WeelifeMain from "@/components/weelife";
import React from "react";

export default async function Weelife() {
  const test = [
    {
      amount: "197.00$",
      name: "Pasha Pashayev",
      date: "16/06/2024 10:47:28",
    },
    {
      amount: "100.00$",
      name: "Cavid Imanov",
      date: "15/06/2024 21:05:13",
    },
    {

      amount: "100.00$",
      name: "Vedat AkgÜl",
      date: "15/06/2024 18:56:34",
    },
    {
      amount: "100.00$",
      name: "Vusal Selimov",
      date: "06/06/2024 13:15:25",
    },
    {
      amount: "300.00$",
      name: "Faiq Meherremli",
      date: "13/06/2024 16:51:25",
    },
    {
      amount: "200.00$",
      name: "Şahsənəm Əliyeva",
      date: "10/06/2024 16:54:25",
    },
  ];
  return (
    <>
      <WeelifeMain>
        <InfiniteMovingCards items={test} direction="right" speed="slow" />
      </WeelifeMain>
    </>
  );
}
