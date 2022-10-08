import { useHeaderHeight } from "@atoms";
import React from "react";
import { MdOutlineTune } from "react-icons/md";
import TokenSelect from "./components/TokenSelect";

const Transfer = () => {
  const [headerHeight] = useHeaderHeight();
  return (
    <div
      style={{ marginTop: headerHeight }}
      className="py-10 lg:py-20 flex justify-center"
    >
      <div className="w-[545px] bg-[#31333C] border border-white/20 rounded-[30px] h-[754px] overflow-hidden">
        {/** Header --Start-- */}
        <div className="flex justify-between items-center px-8 py-5 border-b border-white/20">
          <h1 className="text-xl font-semibold">Trasfer</h1>
          <button>
            <MdOutlineTune size={24} />
          </button>
        </div>
        {/** Header --End-- */}

        {/** Body --Start-- */}
        <div className="px-[33px] py-9">
          {/** From --Start-- */}
          <div>
            <TokenSelect />
          </div>
          {/** From --End-- */}
        </div>
        {/** Body --End-- */}
      </div>
    </div>
  );
};

export default Transfer;
