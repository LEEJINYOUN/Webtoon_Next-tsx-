/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import { BannerDataType } from "../types/type";
import { goToPage } from "@/hooks/hook";

export default function BannerData({ data, name, linkHref }: BannerDataType) {
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
                  goToPage({ url: card.url, name });
                }}
              />
            </div>
            <div className=" w-full h-[20%] md:h-[30%]">
              <div className="w-full h-[50%] flex items-center">
                <h3
                  className="pl-3 text-xl font-bold text-slate-700 truncate cursor-pointer"
                  onClick={() => {
                    goToPage({ url: card.url, name });
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
