"use client";
import React from "react";
import { useQueries } from "@tanstack/react-query";
import BannerData from "./BannerData";
import LoadingScreen from "./LoadingScreen";
import ErrorScreen from "./ErrorScreen";
import { API_KEY, CURRENT, PAGE, WEEK } from "@/constants/constant";

export default function HomeBanner() {
  const currentDay = WEEK[CURRENT.getDay()];
  const bannerGetData = useQueries({
    queries: [
      {
        queryKey: ["naver", PAGE[0], currentDay],
        queryFn: async () => {
          const getData = await fetch(
            `${API_KEY}?perPage=5&page=1&service=${PAGE[0]}&updateDay=${currentDay}`
          ).then((response) => response.json());
          return getData;
        },
      },
      {
        queryKey: ["kakao", PAGE[1], currentDay],
        queryFn: async () => {
          const getData = await fetch(
            `${API_KEY}?perPage=5&page=1&service=${PAGE[1]}&updateDay=${currentDay}`
          ).then((response) => response.json());
          return getData;
        },
      },
      {
        queryKey: ["kakaoPage", PAGE[2], currentDay],
        queryFn: async () => {
          const getData = await fetch(
            `${API_KEY}?perPage=5&page=1&service=${PAGE[2]}&updateDay=${currentDay}`
          ).then((response) => response.json());
          return getData;
        },
      },
    ],
  });

  return (
    <>
      {(bannerGetData[0].isError ||
        bannerGetData[1].isError ||
        bannerGetData[2].isError) && <ErrorScreen />}
      {(bannerGetData[0].isLoading ||
        bannerGetData[1].isLoading ||
        bannerGetData[2].isLoading ||
        bannerGetData[0].data === undefined ||
        bannerGetData[1].data === undefined ||
        bannerGetData[2].data === undefined) && <LoadingScreen />}
      {bannerGetData[0].data && (
        <BannerData
          data={bannerGetData[0].data.webtoons}
          name={"네이버"}
          linkHref={"/naver"}
        />
      )}
      {bannerGetData[1].data && (
        <BannerData
          data={bannerGetData[1].data.webtoons}
          name={"카카오"}
          linkHref={"/kakao"}
        />
      )}
      {bannerGetData[2].data && (
        <BannerData
          data={bannerGetData[2].data.webtoons}
          name={"카카이페이지"}
          linkHref={"/kakaoPage"}
        />
      )}
    </>
  );
}
