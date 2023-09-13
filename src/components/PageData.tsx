/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import { GetDataType, PageDataType } from "./TypeAlias";

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

export default function PageData({ page, name }: PageDataType) {
  const MonData = require(`../../public/fakeData/${page}/mon1.json`);
  const TueData = require(`../../public/fakeData/${page}/tue1.json`);
  const WedData = require(`../../public/fakeData/${page}/wed1.json`);
  const ThuData = require(`../../public/fakeData/${page}/thu1.json`);
  const FriData = require(`../../public/fakeData/${page}/fri1.json`);
  const SatData = require(`../../public/fakeData/${page}/sat1.json`);
  const SunData = require(`../../public/fakeData/${page}/sun1.json`);

  const [currentDay, setCurrentDay] = useState<string>(
    `${WEEK[CURRENT.getDay()]}`
  );
  const [getDataByDay, setGetDataByDay] = useState<GetDataType[]>([]);
  const dayChange = (selected: string) => {
    setCurrentDay(selected);
    if (selected === "mon") {
      setGetDataByDay(MonData.webtoons);
    } else if (selected === "tue") {
      setGetDataByDay(TueData.webtoons);
    } else if (selected === "wed") {
      setGetDataByDay(WedData.webtoons);
    } else if (selected === "thu") {
      setGetDataByDay(ThuData.webtoons);
    } else if (selected === "fri") {
      setGetDataByDay(FriData.webtoons);
    } else if (selected === "sat") {
      setGetDataByDay(SatData.webtoons);
    } else if (selected === "sun") {
      setGetDataByDay(SunData.webtoons);
    }
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

  useEffect(() => {
    if (currentDay === "mon") {
      setGetDataByDay(MonData.webtoons);
    } else if (currentDay === "tue") {
      setGetDataByDay(TueData.webtoons);
    } else if (currentDay === "wed") {
      setGetDataByDay(WedData.webtoons);
    } else if (currentDay === "thu") {
      setGetDataByDay(ThuData.webtoons);
    } else if (currentDay === "fri") {
      setGetDataByDay(FriData.webtoons);
    } else if (currentDay === "sat") {
      setGetDataByDay(SatData.webtoons);
    } else if (currentDay === "sun") {
      setGetDataByDay(SunData.webtoons);
    }
  }, []);

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
        {getDataByDay.map((card, key) => (
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
