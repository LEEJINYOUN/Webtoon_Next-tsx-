import React from "react";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex justify-between">
      <Link href="/">웹툰</Link>
      <div className="flex">
        <Link className="px-2" href="/naver">
          네이버
        </Link>
        <Link className="px-2" href="/kakao">
          카카오
        </Link>
        <Link className="px-2" href="/kakaoPage">
          카카오페이지
        </Link>
      </div>
    </div>
  );
}
