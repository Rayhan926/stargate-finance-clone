import AirbitrumChain from "@components/Svgs/AirbitrumChain";
import Arbitrum from "@components/Svgs/Arbitrum";
import Avalanche from "@components/Svgs/Avalanche";
import AvalancheChain from "@components/Svgs/AvalancheChain";
import BNB from "@components/Svgs/BNB";
import BUSD from "@components/Svgs/BUSD";
import ETH from "@components/Svgs/ETH";
import Ethereum from "@components/Svgs/Ethereum";
import Fantom from "@components/Svgs/Fantom";
import FantomChain from "@components/Svgs/FantomChain";
import FantomCircular from "@components/Svgs/FantomCircular";
import Matic from "@components/Svgs/Matic";
import MaticTransparent from "@components/Svgs/MaticTransparent";
import OP from "@components/Svgs/OP";
import Optimism from "@components/Svgs/Optimism";
import OptimismChain from "@components/Svgs/OptimismChain";
import SmlLogo from "@components/Svgs/SmlLogo";
import USDC from "@components/Svgs/USDC";
import USDT from "@components/Svgs/USDT";
import AllFarmsTable from "@views/Farm/components/AllFarmsTable";
import TabEmptyBoxRow from "@views/Farm/components/TabEmptyBoxRow";

import TopFarms from "@views/Farm/components/TopFarms";
import YourFarmsTable from "@views/Farm/components/YourFarmsTable";

import {
  AllFarm,
  Farm,
  FarmTab,
  HeaderNavigationItems,
  Network,
  SelectOption,
} from "./types";

export const farmTabs: FarmTab[] = [
  {
    title: "Your Farms",
    component: <TabEmptyBoxRow />,
  },
  {
    title: "Pending rewards",
    component: <TabEmptyBoxRow />,
  },
  {
    title: "Available",
    component: <TabEmptyBoxRow />,
  },
  {
    title: "Top Farms",
    component: <TopFarms />,
  },
];

export const allFarmsTabs: FarmTab[] = [
  {
    title: "All Farms",
    component: <AllFarmsTable />,
  },
  {
    title: "Your Farms",
    component: <YourFarmsTable />,
  },
];

export const topFarms: Farm[] = [
  {
    logo: <USDC />,
    logoSml: <OP />,
    network: "optimism",
    farmName: "USDC",
    apy: "6.72%",
    lpt: "0.00",
    liquidity: "$10.1M",
  },
  {
    logo: <USDT />,
    logoSml: <SmlLogo />,
    network: "avalanche",
    farmName: "USDT",
    apy: "6.72%",
    lpt: "0.00",
    liquidity: "$10.1M",
  },
  {
    logo: <USDT />,
    logoSml: <SmlLogo />,
    network: "bnb",
    farmName: "USDT",
    apy: "6.72%",
    lpt: "0.00",
    liquidity: "$10.1M",
  },
  {
    logo: <USDT />,
    logoSml: <SmlLogo />,
    network: "arbitrum",
    farmName: "USDT",
    apy: "6.72%",
    lpt: "0.00",
    liquidity: "$10.1M",
  },
  {
    logo: <USDT />,
    logoSml: <SmlLogo />,
    network: "ethereum",
    farmName: "USDT",
    apy: "6.72%",
    lpt: "0.00",
    liquidity: "$10.1M",
  },
  {
    logo: <FantomCircular />,
    logoSml: <OP />,
    network: "optimism",
    farmName: "ETH",
    apy: "6.72%",
    lpt: "0.00",
    liquidity: "$10.1M",
  },
  {
    logo: <USDC />,
    logoSml: <SmlLogo />,
    network: "fantom",
    farmName: "USDC",
    apy: "6.72%",
    lpt: "0.00",
    liquidity: "$10.1M",
  },
  {
    logo: <USDC />,
    logoSml: <SmlLogo />,
    network: "avalanche",
    farmName: "USDC",
    apy: "6.72%",
    lpt: "0.00",
    liquidity: "$10.1M",
  },
];

export const networks: Network[] = [
  {
    key: "optimism",
    bgColor: "rgb(255, 196, 203)",
    color: "rgb(141, 22, 23)",
    icon: <Optimism />,
    name: "Optimism",
  },
  {
    key: "avalanche",
    bgColor: "rgb(255, 196, 203)",
    color: "rgb(141, 22, 23)",
    icon: <Avalanche />,
    name: "Avalanche",
  },
  {
    key: "bnb",
    bgColor: "rgb(242, 225, 185)",
    color: "rgb(137, 97, 0)",
    icon: <BNB />,
    name: "BNB",
  },
  {
    key: "arbitrum",
    bgColor: "rgb(192, 195, 201)",
    color: "rgb(14, 24, 44)",
    icon: <Arbitrum />,
    name: "Arbitrum",
  },
  {
    key: "ethereum",
    bgColor: "rgb(208, 216, 249)",
    color: "rgb(52, 70, 139)",
    icon: <Ethereum />,
    name: "Ethereum",
  },
  {
    key: "fantom",
    bgColor: "rgb(186, 210, 255)",
    color: "rgb(52, 70, 139)",
    icon: <Fantom />,
    name: "Fantom",
  },
  {
    key: "matic",
    bgColor: "rgb(218, 200, 247)",
    color: "rgb(75, 43, 129)",
    icon: <MaticTransparent />,
    name: "Matic",
  },
];
export const farms: Farm[] = [];

export const headerNavigationItems: HeaderNavigationItems[] = [
  {
    text: "Transfer",
    url: "#",
  },
  {
    text: "Pool",
    url: "#",
  },
  {
    text: "Farming",
    url: "/farm",
  },
  {
    text: "Stake",
    url: "#",
  },
  {
    text: "Overview",
    url: "#",
  },
];

export const tokensOptions: SelectOption[] = [
  {
    label: "All Tokens",
    value: "all",
  },
  {
    label: "USDC",
    value: "usdc",
    icon: <USDC />,
  },
  {
    label: "USDT",
    value: "usdt",
    icon: <USDT />,
  },
  {
    label: "ETH",
    value: "eth",
    icon: <ETH />,
  },
  {
    label: "BUSD",
    value: "busd",
    icon: <BUSD />,
  },
];

export const chainsOptions: SelectOption[] = [
  {
    label: "All Chains",
    value: "all",
  },
  {
    label: "Ethereum",
    value: "ethereum",
    icon: <ETH />,
  },
  {
    label: "BNB Chain",
    value: "bnb",
    icon: <BNB />,
  },
  {
    label: "Avalanche",
    value: "avalanche",
    icon: <AvalancheChain />,
  },
  {
    label: "Matic",
    value: "matic",
    icon: <Matic />,
  },
  {
    label: "Arbitrum",
    value: "arbitrum",
    icon: <AirbitrumChain />,
  },
  {
    label: "Optimism",
    value: "optimism",
    icon: <OptimismChain />,
  },
  {
    label: "Fantom",
    value: "fantom",
    icon: <FantomChain />,
  },
];

export const allFarms: AllFarm[] = [
  {
    name: {
      title: "USDC",
      icon: <USDC />,
    },
    network: "ethereum",
    liquidity: "$90,482,975.07",
    apy: "4.11%",
  },
  {
    name: {
      title: "USDT",
      icon: <USDT />,
    },
    network: "ethereum",
    liquidity: "$90,482,975.07",
    apy: "4.11%",
  },
  {
    name: {
      title: "ETH",
      icon: <ETH />,
    },
    network: "ethereum",
    liquidity: "$22,439,267.39",
    apy: "4.43%",
  },
  {
    name: {
      title: "USDT",
      icon: <USDT />,
    },
    network: "bnb",
    liquidity: "$34,558,726.87",
    apy: "5.41%",
  },
  {
    name: {
      title: "BUSD",
      icon: <BUSD />,
    },
    network: "bnb",
    liquidity: "$39,274,392.06",
    apy: "4.24%",
  },
  {
    name: {
      title: "USDC",
      icon: <USDC />,
    },
    network: "avalanche",
    liquidity: "$56,697,899.56",
    apy: "4.51%",
  },
  {
    name: {
      title: "USDT",
      icon: <USDT />,
    },
    network: "avalanche",
    liquidity: "$44,507,384.31",
    apy: "6.29%",
  },
  {
    name: {
      title: "USDC",
      icon: <USDC />,
    },
    network: "matic",
    liquidity: "$18,329,205.78",
    apy: "3.47%",
  },
  {
    name: {
      title: "USDT",
      icon: <USDT />,
    },
    network: "matic",
    liquidity: "$19,406,942.99",
    apy: "3.22%",
  },
  {
    name: {
      title: "USDC",
      icon: <USDC />,
    },
    network: "arbitrum",
    liquidity: "$42,814,735.95",
    apy: "4.11%",
  },
  {
    name: {
      title: "USDT",
      icon: <USDT />,
    },
    network: "arbitrum",
    liquidity: "$12,366,697.77",
    apy: "5.76%",
  },
  {
    name: {
      title: "ETH",
      icon: <ETH />,
    },
    network: "arbitrum",
    liquidity: "$2,758,725.42",
    apy: "2.15%",
  },
  {
    name: {
      title: "USDC",
      icon: <USDC />,
    },
    network: "fantom",
    liquidity: "$21,692,964.17",
    apy: "4.73%",
  },
  {
    name: {
      title: "USDC",
      icon: <USDC />,
    },
    network: "optimism",
    liquidity: "$10,201,660.86",
    apy: "6.57%",
  },
  {
    name: {
      title: "ETH",
      icon: <ETH />,
    },
    network: "optimism",
    liquidity: "$1,174,941.75",
    apy: "5.05%",
  },
];
