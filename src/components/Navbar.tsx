"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

const MENU = [
  {
    href: "/naver",
    name: "네이버",
  },
  {
    href: "/kakao",
    name: "카카오",
  },
  {
    href: "/kakaoPage",
    name: "카카오페이지",
  },
];

export default function Navbar() {
  const pathName = usePathname();
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="flex justify-between p-5 items-center border-b-2 border-gray-300/50">
      <Link href="/">
        <h2
          className={`text-2xl font-bold ${
            pathName === "/" && "text-green-500"
          }`}
        >
          웹툰
        </h2>
      </Link>
      <ul className="hidden md:flex gap-6">
        {MENU.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-xl font-bold ${
              pathName === item.href && "text-green-500"
            }`}
          >
            <li>{item.name}</li>
          </Link>
        ))}
      </ul>
      <div
        className="md:hidden z-10 cursor-pointer"
        onClick={() => setNavbar(!navbar)}
      >
        {navbar ? (
          <AiOutlineClose size={25} color="white" />
        ) : (
          <GiHamburgerMenu size={25} />
        )}
      </div>
      <ul
        className={`${
          navbar
            ? "text-white opacity-100 transform translate-x-0"
            : "opacity-0 transform -translate-y-full"
        } transition-transform absolute top-0 left-0 w-full h-screen bg-zinc-800/80 flex flex-col justify-center items-center text-2xl`}
        onClick={() => setNavbar(false)}
      >
        {MENU.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`text-xl font-bold m-2 ${
              pathName === item.href && "text-green-500"
            }`}
          >
            <li>{item.name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
