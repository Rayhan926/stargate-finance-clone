import React from "react";

const Farm = () => {
  return (
    <>
      {/** Top section --Start-- */}
      <section>
        <div className="container">
          <h1 className="text-[46px] leading-[46px] font-roc-grotesk tracking-[-0.03em] font-medium">
            You don’t have available assets to farm in your wallet.
          </h1>
          <p className="mt-[1.5rem] text-base tracking-[0.015625rem] text-[#999] max-w-[910px] font-roboto">
            Stargate liquidity providers can farm their LP tokens in exchange
            for STG rewards. Earn STG and become a member of the Stargate
            community.
          </p>
        </div>
      </section>
      {/** Top section --End-- */}
    </>
  );
};

export default Farm;
