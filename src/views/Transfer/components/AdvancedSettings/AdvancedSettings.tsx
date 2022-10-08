import { AdvancedSettingsProps } from "@config/types";
import { cx } from "@utils";
import React from "react";
import { MdClose } from "react-icons/md";

const AdvancedSettings = ({ onClose, open }: AdvancedSettingsProps) => {
  return (
    <div
      className={cx(
        "absolute top-0 left-0 w-full h-full bg-[#31333C] z-10 duration-300",
        open
          ? "translate-y-0 pointer-events-auto"
          : "translate-y-full pointer-events-none",
      )}
    >
      {/** Header --Start-- */}
      <div className="flex justify-between items-center pt-7 px-7 ">
        <h1 className="text-lg">Advanced Settings</h1>
        <button onClick={onClose}>
          <MdClose size={24} />
        </button>
      </div>

      <div className="px-7 ">
        <div className="border-b border-white/20 flex justify-between text-white/60 text-sm pb-3.5 pt-7">
          <p>Token Name</p>
          <p>Balance</p>
        </div>
      </div>

      {/** Header --End-- */}

      {/** Body --Start-- */}
      <div className="px-3 mt-2">ss</div>
      {/** Body --End-- */}
    </div>
  );
};

export default AdvancedSettings;
