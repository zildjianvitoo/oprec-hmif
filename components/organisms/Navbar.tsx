import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        >
          <Image
            src="/NavLogo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            HMIF UNSRI
          </span>
        </a>

        <div className="w-[500px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <Link href="/" className="cursor-pointer">
              Home
            </Link>
            <Link href="/daftar" className="cursor-pointer">
              Daftar
            </Link>
            <Link href="/" className="cursor-pointer">
              Pengumuman
            </Link>
          </div>
        </div>

        <div className="flex-row gap-5 flex">
          {Socials.map((social) => (
            <social.src key={social.name} className="text-white text-3xl" />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
