import { networks } from "@config/constants";
import { Netoworks } from "@config/types";
import React, { useMemo } from "react";

const NetworkLabel = ({ network }: { network: Netoworks }) => {
  const findNetwork = useMemo(
    () => networks.find((n) => n.key === network),
    [network],
  );

  if (!findNetwork) return <div>N</div>;
  return (
    <div
      style={{
        background: findNetwork?.bgColor,
        color: findNetwork?.color,
      }}
      className="h-5 px-1 rounded-[0.25rem] text-[12px] leading-[12px] font-roboto font-normal flex items-center gap-[3px]"
    >
      <span className="shrink-0 w-[14px]">{findNetwork?.icon}</span>
      {findNetwork?.name}
    </div>
  );
};

export default NetworkLabel;
