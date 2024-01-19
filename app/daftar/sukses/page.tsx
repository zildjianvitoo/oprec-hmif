import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";
import React from "react";

type Props = {};

export default function Sukses({}: Props) {
  return (
    <>
      <Navbar />
      <main className="relative z-30 w-full h-full lg:px-10 my-20">
        <div className="flex flex-col w-full px-6 mt-24 sm:px-10 lg:px-20 md:mt-28 lg:mt-32">
          <div className="flex flex-col ">
            <div className="px-3 py-10 rounded-lg lg:px-6 form-pendaftaran-box ">
              <p className="my-1 text-xl text-gray-400 ">
                Terimakasih telah mendaftar pada Open Recruitment Staff HMIF
                UNSRI 2024.
              </p>
              <br />
              <p className="my-1 text-xl text-gray-400 ">
                Calon staff wajib join grub whatsapp global, dinas pilihan 1,
                dan dinas pilihan 2. Silahkan bergabung pada group Whatsapp pada
                link berikut.
              </p>
              <br />
              <p className="my-1 text-xl text-gray-400 ">
                Link :{" "}
                <a
                  href="https://linktr.ee/OPREC_HMIF2024"
                  className="underline text-sky-400"
                >
                  Group Whatsapp
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
