import Encryption from "@/components/organisms/Pengumuman";
import Hero from "@/components/organisms/Hero";
import Projects from "@/components/organisms/Projects";
import Timeline from "@/components/organisms/Timeline";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Timeline />
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
