import Encryption from "@/components/organisms/Encryption";
import Hero from "@/components/organisms/Hero";
import Projects from "@/components/organisms/Projects";
import Skills from "@/components/organisms/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        {/* <Skills /> */}
        <Encryption />
        <Projects />
      </div>
    </main>
  );
}
