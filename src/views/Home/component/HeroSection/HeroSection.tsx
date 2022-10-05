import React from "react";

function HeroSection() {
  return (
    <section className="h-screen flex justify-center relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div>
          <h1 className="text-primary font-poppins font-medium text-[30px] leading-[30px] tracking-[-0.03em] whitespace-pre">
            Welcome to the omnichain future
          </h1>

          <div className="flex flex-col w-full items-center mt-10">
            <p className="text-base leading-5 text-white font-poppins mb-[0.75rem]">
              Total Value Locked
            </p>
            <p className="font-poppins text-[30px] font-semibold text-[#fff]">
              $472,744,404.42
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
