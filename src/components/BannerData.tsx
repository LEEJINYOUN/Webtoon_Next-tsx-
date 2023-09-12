/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { BannerDataType } from "./TypeAlias";

export default function BannerData({ data, name, linkHref }: BannerDataType) {
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
  return (
    <div className="container mx-auto pt-10">
      <Link href={linkHref}>
        <h2 className="inline-block text-2xl font-bold mb-5 hover:text-green-500">
          {name}
        </h2>
      </Link>
      <div className="grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
        {data.map((card, key) => (
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
                  goToPage(card.url, name);
                }}
              />
            </div>
            <div className=" w-full h-[20%] md:h-[30%]">
              <div className="w-full h-[50%] flex items-center">
                <h3
                  className="pl-3 text-xl font-bold text-slate-700 truncate cursor-pointer"
                  onClick={() => {
                    goToPage(card.url, name);
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
  );
}
