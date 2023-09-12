"use client";
import React, { useEffect, useState } from "react";
import NaverData from "../../public/fakeData/homeBanner/naverWebtoon.json";
import KakaoData from "../../public/fakeData/homeBanner/kakaoWebtoon.json";
import KakaoPageData from "../../public/fakeData/homeBanner/kakaoPageWebtoon.json";
import BannerData from "./BannerData";
import { GetDataType } from "./TypeAlias";

export default function HomeBanner() {
  const [naverBanner, setNaverBanner] = useState<GetDataType[]>([]);
  const [kakaoBanner, setKakaoBanner] = useState<GetDataType[]>([]);
  const [kakaoPageBanner, setKakaoPageBanner] = useState<GetDataType[]>([]);
  useEffect(() => {
    setNaverBanner(NaverData.webtoons);
    setKakaoBanner(KakaoData.webtoons);
    setKakaoPageBanner(KakaoPageData.webtoons);
  }, []);
  return (
    <>
      <BannerData data={naverBanner} name={"네이버"} linkHref={"/naver"} />
      <BannerData data={kakaoBanner} name={"카카오"} linkHref={"/kakao"} />
      <BannerData
        data={kakaoPageBanner}
        name={"카카오페이지"}
        linkHref={"/kakaoPage"}
      />
    </>
  );
}
