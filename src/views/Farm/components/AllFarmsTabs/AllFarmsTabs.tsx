import React, { useState } from "react";
import { cx } from "@utils";
import Select from "@components/Select";

import { allFarmsTabs, chainsOptions, tokensOptions } from "@config/constants";

const AllFarmsTabs = () => {
  const [activeChain, setActiveChain] = useState(chainsOptions[0]);
  const [activeToken, setActiveToken] = useState(tokensOptions[0]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activeTabBody = allFarmsTabs[activeTabIndex].component;

  return (
    <section className="mt-[64px]">
      <div className="container">
        {/** Tabs And Select Dropdown --Start-- */}
        <div className="flex items-center flex-col md:flex-row justify-between">
          <div className="flex items-center gap-7 mb-6">
            {allFarmsTabs.map((tab, i) => {
              const isActive = i === activeTabIndex;
              return (
                <button
                  onClick={() => setActiveTabIndex(i)}
                  key={i}
                  className={cx(
                    "font-roc-grotesk text-base",
                    isActive
                      ? "underline text-white"
                      : "text-[#999999] hover:text-white",
                  )}
                >
                  {tab.title}
                </button>
              );
            })}
          </div>

          <div className="flex items-center flex-wrap gap-4 md:gap-6">
            <Select
              label="Token"
              onChange={(opt) => setActiveToken(opt)}
              options={tokensOptions}
              value={activeToken}
            />
            <Select
              label="Network"
              onChange={(opt) => setActiveChain(opt)}
              options={chainsOptions}
              value={activeChain}
            />
          </div>
        </div>
        {/** Tabs And Select Dropdown --End-- */}

        {activeTabBody}
      </div>
    </section>
  );
};

export default AllFarmsTabs;