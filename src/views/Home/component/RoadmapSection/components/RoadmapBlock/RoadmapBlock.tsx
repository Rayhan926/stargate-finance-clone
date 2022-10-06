import { RoadmapBlockProps } from "@config/types";
import { cx } from "@utils";
import Image from "next/image";
import React from "react";
import RoadmapProgressBar from "../RoadmapProgressBar";

const RoadmapBlock = ({
  imgSrc,
  labelText,
  progressPercentage,
  subtitle,
  title,
  layout,
}: RoadmapBlockProps) => {
  const isReversed = layout === "reverse";
  return (
    <div
      className={cx(
        "flex items-start lg:justify-between lg:items-center flex-col gap-y-6",
        isReversed ? "lg:flex-row-reverse" : "lg:flex-row",
      )}
    >
      <div className="max-w-[470px]">
        <RoadmapProgressBar progressPercentage={progressPercentage} />
        <h5 className="mt-5 mb-1.5 text-base">{labelText}</h5>
        <h3 className="text-[20px] leading-[30px] font-semibold text-primary">
          {title}
        </h3>
        <p className="__body_text mt-2">{subtitle}</p>
      </div>
      <div className="[&>span]:!block">
        <Image src={imgSrc} width={354} height={182} alt={labelText} />
      </div>
    </div>
  );
};

export default RoadmapBlock;
