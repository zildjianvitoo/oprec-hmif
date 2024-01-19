"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
import NoSSR from "../atoms/NoSSR";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex gap-y-8 flex-col lg:flex-row items-center justify-center px-6 sm:px-10 lg:px-20 mt-32 lg:mt-40 w-full z-[20]"
    >
      <div className="flex flex-col justify-center w-full h-full gap-3 m-auto lg:gap-5 text-start">
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
          className="mt-6 text-4xl lg:text-6xl font-bold text-white max-w-[600px] "
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
          Himpunan Mahasiswa Informatika alias HMIF adalah sebuah Organisasi
          Kemahasiswaan khusus Jurusan Teknik Informatika yang bergerak dalam
          bidang Akademik maupun Non-Akademik yang dapat menjadi wadah bagi para
          Mahasiswa Jurusan Teknik Informatika
        </motion.p>
        <div className="flex gap-4 text-lg">
          <NoSSR>
            <motion.a
              href="/daftar"
              variants={slideInFromLeft(1)}
              className="py-2 px-4 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
            >
              <Link href="/daftar">Daftar Sekarang!</Link>
            </motion.a>
          </NoSSR>

          <motion.a
            href="https://bit.ly/bgoprechmifunsri2024"
            variants={slideInFromLeft(1)}
            className="py-2 px-4 button-primary-dinas text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            Guidebook
          </motion.a>
        </div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="flex items-center justify-center w-full h-full"
      >
        <Image
          src="/hero-dinas.svg"
          alt="work icons"
          height={600}
          width={600}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
