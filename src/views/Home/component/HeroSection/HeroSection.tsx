import React from "react";

function HeroSection() {
  return (
    <section className="h-screen flex justify-center relative">
      <video playsInline loop autoPlay muted className="h-full">
        <source src="/video/home-loop-video.mp4" type="video/mp4" />
      </video>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div>
          <h1 className="text-white font-roc-grotesk font-medium text-[46px] leading-[46px] tracking-[-0.03em] whitespace-pre">
            Welcome to the omnichain future
          </h1>

          <div className="flex flex-col w-full items-center mt-[2.25rem]">
            <p className="text-xs leading-5 text-[#999999] font-roboto mb-[0.75rem]">
              Total Value Locked
            </p>
            <p className="font-roc-grotesk text-2xl leading-5 text-[#fff]">
              $472,744,404.42
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
