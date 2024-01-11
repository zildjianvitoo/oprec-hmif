import React from "react";
import HeroContent from "../molecules/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col w-full h-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 hidden lg:flex absolute top-[-440px] lg:top-[-340px]  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
