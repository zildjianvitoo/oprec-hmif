"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-center px-6 sm:px-10 lg:px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Open Recruitment HMIF UNSRI 2024
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="mt-6 text-3xl md:text-4xl lg:text-6xl font-bold text-white max-w-[600px] "
        >
          <span>
            HMIF
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-violet-700">
              {" "}
              OPEN{" "}
            </span>
            RECRUITMENT
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className=" text-lg text-gray-400 my-4 max-w-[600px]"
        >
          Himpunan Mahasiswa Teknik Informatika alias HMIF adalah sebuah
          Organisasi Kemahasiswaan khusus Jurusan Teknik Informatika yang
          bergerak dalam bidang Akademik maupun Non-Akademik yang dapat menjadi
          wadah bagi para Mahasiswa Jurusan Teknik Informatika
        </motion.p>
        <div className="flex gap-4">
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            Daftar Sekarang!
          </motion.a>
          <motion.a
            variants={slideInFromLeft(1)}
            className="py-2 px-4 button-primary-dinas text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            Lihat Dinas
          </motion.a>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
