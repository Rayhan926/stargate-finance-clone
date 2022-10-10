import { useHeaderHeight } from "@atoms";
import ETH from "@components/Svgs/ETH";
import React from "react";
import { MdChevronRight } from "react-icons/md";

type VotingPower = {
  text: string;
  icon?: React.ReactNode;
};

const votingPower: VotingPower[] = [
  {
    text: "My STG Locked",
    icon: <ETH />,
  },
  {
    text: "My veSTG Balance",
    icon: <ETH />,
  },
  {
    text: "Average Lock",
  },
];

function Stake() {
  const [headerHeight] = useHeaderHeight();

  return (
    <div
      className="strokes_bg mb-[124px]"
      style={{ backgroundPositionY: "-200px", marginTop: headerHeight }}
    >
      {/** Top section --Start-- */}
      <section className="pt-14">
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

      {/* Overview section --Start-- */}
      <div className="container my-[120px]">
        <div className="max-w-[552px] w-full mx-auto">
          <h5 className="text-base text-white font-roc-grotesk font-semibold mb-2">
            Staking Overview
          </h5>

          <div className="w-full rounded-lg bg-[#31333C] p-[1.2rem] space-y-24">
            <div className="space-y-2.5">
              <h2 className="font-roc-grotesk text-2xl leading-[28px] font-medium">
                My Voting power
              </h2>
              <p className="text-xs text-white/50 flex items-end">
                Learn more on Stargate Dao governance <MdChevronRight />
              </p>
            </div>

            <div className="flex items-center gap-6">
              {votingPower.map(({ icon, text }, i) => (
                <div key={i} className="space-y-2">
                  <p className="text-xs text-white/50">{text}</p>
                  <div className="flex items-center gap-1">
                    {icon && <div className="w-4">{icon}</div>}
                    <span>-</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 mt-6">
            <button className="bg-transparent border-2 border-primary duration-200 font-poppins text-white py-3.5 w-full rounded-xl flex justify-center items-center gap-2">
              Connect Wallet
            </button>
            <button className="bg-primary border-2 border-primary duration-200 font-poppins text-white py-3.5 w-full rounded-xl flex justify-center items-center gap-2">
              Connect Wallet
            </button>
          </div>

          <div className="flex justify-center">
            <p className="text-sm text-white/50 flex items-end mt-10">
              Learn more on Stargate Dao governance <MdChevronRight />
            </p>
          </div>
        </div>
      </div>
      {/* Overview section --End-- */}
    </div>
  );
}

export default Stake;
