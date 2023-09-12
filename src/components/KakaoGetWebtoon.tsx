/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import MonData from "../../public/fakeData/kakao/mon1.json";
import TueData from "../../public/fakeData/kakao/tue1.json";
import WedData from "../../public/fakeData/kakao/wed1.json";
import ThuData from "../../public/fakeData/kakao/thu1.json";
import FriData from "../../public/fakeData/kakao/fri1.json";
import SatData from "../../public/fakeData/kakao/sat1.json";
import SunData from "../../public/fakeData/kakao/sun1.json";

type GetDataType = {
  author: string;
  title: string;
  url: string;
  img: string;
};

const DATE = [
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

export default function KakaoGetWebtoon() {
  const current = new Date();
  const week = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
  const [todayDate, setTodayDate] = useState<string>(
    `${week[current.getDay()]}`
  );
  const [kakaoGetData, setKakaoGetData] = useState<GetDataType[]>([]);
  const dateChange = (selected: string) => {
    setTodayDate(selected);
    if (selected === "mon") {
      setKakaoGetData(MonData.webtoons);
    } else if (selected === "tue") {
      setKakaoGetData(TueData.webtoons);
    } else if (selected === "wed") {
      setKakaoGetData(WedData.webtoons);
    } else if (selected === "thu") {
      setKakaoGetData(ThuData.webtoons);
    } else if (selected === "fri") {
      setKakaoGetData(FriData.webtoons);
    } else if (selected === "sat") {
      setKakaoGetData(SatData.webtoons);
    } else if (selected === "sun") {
      setKakaoGetData(SunData.webtoons);
    }
  };

  useEffect(() => {
    if (todayDate === "mon") {
      setKakaoGetData(MonData.webtoons);
    } else if (todayDate === "tue") {
      setKakaoGetData(TueData.webtoons);
    } else if (todayDate === "wed") {
      setKakaoGetData(WedData.webtoons);
    } else if (todayDate === "thu") {
      setKakaoGetData(ThuData.webtoons);
    } else if (todayDate === "fri") {
      setKakaoGetData(FriData.webtoons);
    } else if (todayDate === "sat") {
      setKakaoGetData(SatData.webtoons);
    } else if (todayDate === "sun") {
      setKakaoGetData(SunData.webtoons);
    }
  }, [todayDate]);
  return (
    <>
      <div className="mb-3 border-b-2 border-gray-300/50">
        {DATE.map((item) => (
          <button
            key={item.date}
            className={`${
              item.date === todayDate ? "bg-green-500 text-white" : ""
            } mx-2 items-center justify-center w-[30px] h-[60px] font-bold md:text-xl md:px-3 md:py-2 md:w-[50px] sm:text-base sm:px-2 sm:w-[40px]`}
            onClick={() => {
              dateChange(item.date);
            }}
          >
            {item.name}
          </button>
        ))}
      </div>
      <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {kakaoGetData.map((card, key) => (
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
                  window.location.href = card.url;
                }}
              />
            </div>
            <div className=" w-full h-[20%] md:h-[30%]">
              <div className="w-full h-full flex items-center">
                <h3
                  className="pl-3 font-bold text-slate-700 truncate cursor-pointer"
                  onClick={() => {
                    window.location.href = card.url;
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
