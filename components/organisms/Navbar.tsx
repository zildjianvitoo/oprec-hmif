import { Socials } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-3 lg:px-10 xl:px-14">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto lg:px-[10px]">
        <a
          href="#about-me"
          className="flex-row items-center hidden w-auto h-auto md:flex"
        >
          <Image
            src="/logo.png"
            alt="logo"
            width={70}
            height={70}
            className="cursor-pointer hover:animate-slowspin"
          />

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            HMIF UNSRI
          </span>
        </a>

        <div className="w-[500px] mx-auto md:mx-0 h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex  items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] px-4  lg:px-[20px] py-[10px] rounded-full text-gray-200">
            <Link href="/" className="cursor-pointer">
              Home
            </Link>
            <Link href="/daftar" className="cursor-pointer">
              Daftar
            </Link>
            <Link href="/#pengumuman" className="cursor-pointer">
              Pengumuman
            </Link>
          </div>
        </div>

        <div className="flex-row hidden gap-5 lg:flex">
          {Socials.map((social) => (
            <a key={social.name} href={social.href}>
              <social.src className="text-3xl text-gray-300" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
