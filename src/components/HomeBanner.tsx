/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

type getDataType = {
  author: string;
  title: string;
  url: string;
  img: string;
};

export default function HomeBanner() {
  const [naverBanner, setNaverBanner] = useState<getDataType[]>([]);
  const [kakaoBanner, setKakaoBanner] = useState<getDataType[]>([]);
  const [kakaoPageBanner, setKakaoPageBanner] = useState<getDataType[]>([]);
  const naverUrlOnClick = (url: string) => {
    const mobileUrl = url;
    const computerUrl = url.substring(0, 8) + url.substring(10, url.length);
    if (window.innerWidth < 1100) {
      window.location.href = mobileUrl;
    } else {
      window.location.href = computerUrl;
    }
  };
  useEffect(() => {
    const naverData = require("../../public/fakeData/homeBanner/naverWebtoon.json");
    const kakaoData = require("../../public/fakeData/homeBanner/kakaoWebtoon.json");
    const kakaoPageData = require("../../public/fakeData/homeBanner/kakaoPageWebtoon.json");

    setNaverBanner(naverData.webtoons);
    setKakaoBanner(kakaoData.webtoons);
    setKakaoPageBanner(kakaoPageData.webtoons);
  }, []);
  return (
    <>
      <div className="container mx-auto pt-10">
        <Link href="/naver">
          <h2 className="inline-block text-2xl font-bold mb-5 hover:text-green-500">
            네이버
          </h2>
        </Link>
        <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {naverBanner.map((card, key) => (
            <div
              className="shadow-lg rounded-lg h-[450px] lg:h-[350px]"
              key={key}
            >
              <div className="w-full h-[80%] md:h-[70%]">
                <img
                  className=" rounded-t-lg w-full h-full cursor-pointer"
                  src={card.img}
                  alt="item image"
                  onClick={() => naverUrlOnClick(card.url)}
                />
              </div>
              <div className=" w-full h-[20%] md:h-[30%]">
                <div className="w-full h-[50%] flex items-center">
                  <h3
                    className="pl-3 text-xl font-bold text-slate-700 truncate cursor-pointer"
                    onClick={() => naverUrlOnClick(card.url)}
                  >
                    {card.title}
                  </h3>
                </div>
                <div className="w-full h-[50%] flex items-center">
                  <p className="pl-3 font-normal text-gray-600 truncate">
                    {card.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto py-10">
        <Link href="/kakao">
          <h2 className="inline-block text-2xl font-bold mb-5 hover:text-green-500">
            카카오
          </h2>
        </Link>
        <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {kakaoBanner.map((card, key) => (
            <div
              className="shadow-lg rounded-lg h-[450px] lg:h-[350px]"
              key={key}
            >
              <div className="w-full h-[80%] md:h-[70%]">
                <img
                  className=" rounded-t-lg w-full h-full cursor-pointer"
                  src={card.img}
                  alt="item image"
                  onClick={() => {
                    window.location.href = card.url;
                  }}
                />
              </div>
              <div className=" w-full h-[20%] md:h-[30%]">
                <div className="w-full h-[50%] flex items-center">
                  <h3
                    className="pl-3 text-xl font-bold text-slate-700 truncate cursor-pointer"
                    onClick={() => {
                      window.location.href = card.url;
                    }}
                  >
                    {card.title}
                  </h3>
                </div>
                <div className="w-full h-[50%] flex items-center">
                  <p className="pl-3 font-normal text-gray-600 truncate">
                    {card.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto pb-10">
        <Link href="/kakaoPage">
          <h2 className="inline-block text-2xl font-bold mb-5 hover:text-green-500">
            카카오페이지
          </h2>
        </Link>
        <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
          {kakaoPageBanner.map((card, key) => (
            <div
              className="shadow-lg rounded-lg h-[450px] lg:h-[350px]"
              key={key}
            >
              <div className="w-full h-[80%] md:h-[70%]">
                <img
                  className=" rounded-t-lg w-full h-full cursor-pointer"
                  src={card.img}
                  alt="item image"
                  onClick={() => {
                    window.location.href = card.url;
                  }}
                />
              </div>
              <div className=" w-full h-[20%] md:h-[30%]">
                <div className="w-full h-[50%] flex items-center">
                  <h3
                    className="pl-3 text-xl font-bold text-slate-700 truncate cursor-pointer"
                    onClick={() => {
                      window.location.href = card.url;
                    }}
                  >
                    {card.title}
                  </h3>
                </div>
                <div className="w-full h-[50%] flex items-center">
                  <p className="pl-3 font-normal text-gray-600 truncate">
                    {card.author}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
