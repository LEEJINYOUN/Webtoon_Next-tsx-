/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { PageDataType } from "./TypeAlias";
import { useQuery } from "@tanstack/react-query";

const DAY = [
  {
    name: "월",
    date: "mon",
  },
  {
    name: "화",
    date: "tue",
  },
  {
    name: "수",
    date: "wed",
  },
  {
    name: "목",
    date: "thu",
  },
  {
    name: "금",
    date: "fri",
  },
  {
    name: "토",
    date: "sat",
  },
  {
    name: "일",
    date: "sun",
  },
];
const CURRENT = new Date();
const WEEK = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

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

  const goToPage = (url: string, name: string) => {
    const mobileUrl = url;
    const computerUrl = url.substring(0, 8) + url.substring(10, url.length);
    if (name === "네이버") {
      if (window.innerWidth < 1100) {
        window.location.href = mobileUrl;
      } else {
        window.location.href = computerUrl;
      }
    } else {
      window.location.href = url;
    }
  };

  const { data } = useQuery(["data", page, currentDay], async () => {
    const getData = await fetch(
      `${API_KEY}?perPage=20&page=1&service=${page}&updateDay=${currentDay}`
    ).then((response) => response.json());
    return getData;
  });

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
                    goToPage(card.url, name);
                  }}
                />
              </div>
              <div className=" w-full h-[20%] md:h-[30%]">
                <div className="w-full h-full flex items-center">
                  <h3
                    className="pl-3 font-bold text-slate-700 truncate cursor-pointer"
                    onClick={() => {
                      goToPage(card.url, name);
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
