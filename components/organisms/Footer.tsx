import React from "react";
import { RxGithubLogo, RxInstagramLogo } from "react-icons/rx";

import { FaYoutube, FaLinkedin, FaLink, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] relative bottom-0 left-0">
      <div className="flex flex-col items-center justify-center w-full m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap z-[20]">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start ">
            <div className="font-bold text-[16px]">Himpunan</div>
            <a
              href="https://youtube.com/@hmiffasilkomunsri6922"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </a>
            <a
              href="https://github.com/zildjianvitoo"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/zildjianvito/"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaLinkedin />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start ">
            <div className="font-bold text-[16px]">Social Media</div>
            <a
              href="https://youtube.com/@hmiffasilkomunsri6922"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaYoutube />
              <span className="text-[15px] ml-[6px]">Youtube</span>
            </a>
            <a
              href="https://www.instagram.com/hmif.unsri"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/in/zildjianvito/"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <FaLinkedin />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </a>
          </div>
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Kerjasama</span>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">Hubungi kami</span>
            </p>
            <a
              href="mailto:akademik.hmifunsri@gmail.com"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <span className="text-[15px] ml-[6px]">
                akademik.hmifunsri@gmail.com
              </span>
            </a>
          </div>
        </div>

        <div className="my-[10px] text-[15px] text-center">
          &copy; Dinas Akademik HMIF 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
