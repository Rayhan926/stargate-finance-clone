import NetworkLabel from "@components/NetworkLabel";

import { allFarms } from "@config/constants";

import React from "react";

const AllFarmsTable = () => {
  return (
    <>
      {/** Table --Start-- */}
      <div className="w-full overflow-x-auto rounded-[0.75rem] mt-4">
        <table className="w-full bg-[#232323] min-w-[490px]">
          <thead>
            <tr className="[&>th]:px-8 text-[#999] text-sm [&>th]:font-normal font-roboto text-left [&>th]:h-[69px]">
              <th>Name</th>
              <th>Network</th>
              <th>Liquidity</th>
              <th className="text-right lg:w-[203px]">APY</th>
            </tr>
          </thead>

          <tbody>
            {allFarms.map((farm, i) => {
              return (
                <tr key={i} className="hover:bg-[#333233] cursor-pointer">
                  <td className="px-8 h-[76px]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6">{farm.name.icon}</div>
                      <p className="text-[16px] font-roboto leading-[19px]">
                        {farm.name.title}
                      </p>
                    </div>
                  </td>
                  <td className="px-8 h-[76px]">
                    <NetworkLabel network={farm.network} size="large" />
                  </td>
                  <td className="px-8 h-[76px] text-[16px] font-roboto leading-[19px]">
                    {farm.liquidity}
                  </td>
                  <td className="px-8 h-[76px] text-[16px] font-roboto leading-[19px] text-right lg:w-[203px]">
                    {farm.apy}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/** Table --End-- */}
    </>
  );
};

export default AllFarmsTable;
