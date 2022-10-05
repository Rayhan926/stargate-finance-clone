import React from "react";
import AllFarmsTabs from "./components/AllFarmsTabs";
import FarmTab from "./components/FarmTab";

const Farm = () => {
  return (
    <div className="strokes_bg" style={{ backgroundPositionY: "-200px" }}>
      {/** Top section --Start-- */}
      <section className="mt-[160px]">
        <div className="container">
          <h1 className="text-[24px] leading-[30px] lg:text-[30px] lg:leading-[40px] font-poppins text-primary font-medium">
            Connect your wallet to see your available assets to stake.
          </h1>
          <p className="mt-4 text-base tracking-[0.015625rem] max-w-[950px] text-white font-poppins">
            Stargate liquidity providers can farm their LP tokens in exchange
            for STG rewards. Earn STG and become a member of the Stargate
            community.
          </p>
        </div>
      </section>
      {/** Top section --End-- */}

      <FarmTab />

      <AllFarmsTabs />
    </div>
  );
};

export default Farm;
