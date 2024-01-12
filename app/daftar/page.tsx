import Footer from "@/components/organisms/Footer";
import PendaftaranForm from "@/components/organisms/PendaftaranForm";
import React from "react";

export default function Daftar() {
  return (
    <>
      <main className="relative z-30 w-full h-full my-20">
        <div className="flex flex-col w-full px-6 mt-24 sm:px-10 lg:px-20 md:mt-28 lg:mt-32">
          <h1 className="text-[42px] lg:text-[52px] leading-[1.1] lg:leading-tight  font-bold text-center bg-clip-text bg-gradient-to-r text-transparent from-indigo-300 to-violet-700 ">
            Lembar Pendaftaran
          </h1>
          <p className="mx-auto my-4 text-lg text-center text-gray-400 ">
            Silahkan isi formulir dengan baik dan benar
          </p>
          <PendaftaranForm />
        </div>
      </main>
      <Footer />
    </>
  );
}
