import Encryption from "@/components/organisms/Pengumuman";
import Hero from "@/components/organisms/Hero";
import Projects from "@/components/organisms/Projects";
import Timeline from "@/components/organisms/Timeline";
import Image from "next/image";
import Faq from "@/components/organisms/Faq";
import Footer from "@/components/organisms/Footer";
import Navbar from "@/components/organisms/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="w-full h-full">
        <div className="flex flex-col gap-20">
          <Hero />
          <Timeline />
          <Faq />
          <Encryption />
          <Projects />
        </div>
      </main>

      <Footer />
    </>
  );
}
