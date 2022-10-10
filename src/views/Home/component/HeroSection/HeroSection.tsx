import React from "react";

function HeroSection() {
  return (
    <section
      style={{
        backgroundImage: 'url("/img/1024 Guennyou_homepage-01.png")',
        backgroundSize: "100%",
      }}
      className="h-screen flex justify-center items-center relative bg-no-repeat bg-center"
    >
      <div className="container">
        <h1 className="text-primary font-poppins font-medium text-[30px] leading-[30px] tracking-[-0.03em] text-center">
          Welcome to the omnichain future
        </h1>

        <div className="flex flex-col w-full items-center mt-10">
          <p className="text-base leading-5 text-white font-poppins mb-[0.75rem]">
            Total Value Locked
          </p>
          <p className="font-poppins text-xl md:text-[30px] font-semibold text-[#fff]">
            $472,744,404.42
          </p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
