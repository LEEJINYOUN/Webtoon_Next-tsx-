/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { PageDataType } from "../types/type";
import { useQuery } from "@tanstack/react-query";
import LoadingScreen from "./LoadingScreen";
import ErrorScreen from "./ErrorScreen";
import { API_KEY, CURRENT, DAY, WEEK } from "@/constants/FetchDataConstant";
import { goToPage } from "@/hooks/hook";

export default function PageData({ page, name }: PageDataType) {
  const [currentDay, setCurrentDay] = useState<string>(
    `${WEEK[CURRENT.getDay()]}`
  );
  const dayChange = async (selected: string) => {
    setCurrentDay(selected);
    await fetch(
      `${API_KEY}?perPage=20&page=1&service=${page}&updateDay=${selected}`
    ).then((response) => response.json());
  };

  const { data, isLoading, isError } = useQuery(
    ["data", page, currentDay],
    async () => {
      const fetchData = await fetch(
        `${API_KEY}?perPage=20&page=1&service=${page}&updateDay=${currentDay}`
      ).then((response) => response.json());
      return fetchData;
    }
  );

  return (
    <>
      <div className="mb-3 border-b-2 border-gray-300/50">
        {DAY.map((item) => (
          <button
            key={item.date}
            className={`${
              item.date === currentDay ? "bg-green-500 text-white" : ""
            } mx-2 items-center justify-center w-[30px] h-[60px] font-bold md:text-xl md:px-3 md:py-2 md:w-[50px] sm:text-base sm:px-2 sm:w-[40px]`}
            onClick={() => {
              dayChange(item.date);
            }}
          >
            {item.name}
          </button>
        ))}
      </div>
      {(isLoading || data === undefined) && <LoadingScreen />}
      {isError && <ErrorScreen />}
      <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {data &&
          data.webtoons.map((card: any, key: any) => (
            <div
              className="shadow-lg rounded-lg h-[450px] lg:h-[350px]"
              key={key}
            >
              <div className="w-full h-[80%] md:h-[70%]">
                <img
                  className=" rounded-t-lg w-full h-full cursor-pointer"
                  src={card.img}
                  alt="card image"
                  onClick={() => {
                    goToPage({ url: card.url, name });
                  }}
                />
              </div>
              <div className=" w-full h-[20%] md:h-[30%]">
                <div className="w-full h-full flex items-center">
                  <h3
                    className="pl-3 font-bold text-slate-700 truncate cursor-pointer"
                    onClick={() => {
                      goToPage({ url: card.url, name });
                    }}
                  >
                    {card.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
