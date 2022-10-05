import { networks } from "@config/constants";
import { Netoworks } from "@config/types";
import { cx } from "@utils";
import React, { useMemo } from "react";

const NetworkLabel = ({
  network,
  size,
}: {
  network: Netoworks;
  size?: "small" | "large";
}) => {
  const isSmall = size === "large" ? false : true;
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
      className={cx(
        "rounded-[0.25rem] font-roboto font-normal inline-flex items-center gap-[3px]",
        isSmall
          ? "text-[12px] leading-[12px] px-1 h-5"
          : "text-[14px] leading-[19px] px-1.5 h-7",
      )}
    >
      <span className={cx("shrink-0", isSmall ? "w-[14px]" : "w-4")}>
        {findNetwork?.icon}
      </span>
      {findNetwork?.name}
    </div>
  );
};

export default NetworkLabel;
