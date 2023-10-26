"use client";
import { useQueries } from "@tanstack/react-query";
import BannerData from "./BannerData";
import LoadingScreen from "./LoadingScreen";
import ErrorScreen from "./ErrorScreen";
import { API_KEY, CURRENT, PAGE, WEEK } from "@/constants/FetchDataConstant";

export default function HomeBanner() {
  const currentDay = WEEK[CURRENT.getDay()];
  const bannerFetchData = useQueries({
    queries: [
      {
        queryKey: ["naver", PAGE[0], currentDay],
        queryFn: async () => {
          const fetchData = await fetch(
            `${API_KEY}?perPage=5&page=1&service=${PAGE[0]}&updateDay=${currentDay}`
          ).then((response) => response.json());
          return fetchData;
        },
      },
      {
        queryKey: ["kakao", PAGE[1], currentDay],
        queryFn: async () => {
          const fetchData = await fetch(
            `${API_KEY}?perPage=5&page=1&service=${PAGE[1]}&updateDay=${currentDay}`
          ).then((response) => response.json());
          return fetchData;
        },
      },
      {
        queryKey: ["kakaoPage", PAGE[2], currentDay],
        queryFn: async () => {
          const fetchData = await fetch(
            `${API_KEY}?perPage=5&page=1&service=${PAGE[2]}&updateDay=${currentDay}`
          ).then((response) => response.json());
          return fetchData;
        },
      },
    ],
  });

  return (
    <>
      {(bannerFetchData[0].isError ||
        bannerFetchData[1].isError ||
        bannerFetchData[2].isError) && <ErrorScreen />}
      {(bannerFetchData[0].isLoading ||
        bannerFetchData[1].isLoading ||
        bannerFetchData[2].isLoading ||
        bannerFetchData[0].data === undefined ||
        bannerFetchData[1].data === undefined ||
        bannerFetchData[2].data === undefined) && <LoadingScreen />}
      {bannerFetchData[0].data && (
        <BannerData
          data={bannerFetchData[0].data.webtoons}
          name={"네이버"}
          linkHref={"/naver"}
        />
      )}
      {bannerFetchData[1].data && (
        <BannerData
          data={bannerFetchData[1].data.webtoons}
          name={"카카오"}
          linkHref={"/kakao"}
        />
      )}
      {bannerFetchData[2].data && (
        <BannerData
          data={bannerFetchData[2].data.webtoons}
          name={"카카이페이지"}
          linkHref={"/kakaoPage"}
        />
      )}
    </>
  );
}
