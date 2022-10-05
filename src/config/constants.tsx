import Arbitrum from "@components/Svgs/Arbitrum";
import Avalanche from "@components/Svgs/Avalanche";
import BNB from "@components/Svgs/BNB";
import Ethereum from "@components/Svgs/Ethereum";
import Fantom from "@components/Svgs/Fantom";
import FantomCircular from "@components/Svgs/FantomCircular";
import OP from "@components/Svgs/OP";
import Optimism from "@components/Svgs/Optimism";
import SmlLogo from "@components/Svgs/SmlLogo";
import USDC from "@components/Svgs/USDC";
import USDT from "@components/Svgs/USDT";
import TabEmptyBoxRow from "@views/Farm/components/TabEmptyBoxRow";
import TopFarms from "@views/Farm/components/TopFarms";
import { Farm, FarmTab, Network } from "./types";

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
];
