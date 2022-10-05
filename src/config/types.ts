import { ReactNode } from "react";

export type FarmTab = {
  title: string;
  component: ReactNode;
};

export type Netoworks =
  | "optimism"
  | "avalanche"
  | "bnb"
  | "arbitrum"
  | "ethereum"
  | "fantom";

export type Farm = {
  logo: ReactNode;
  logoSml: ReactNode;
  network: Netoworks;
  farmName: string;
  apy: string;
  lpt: string;
  liquidity: string;
};

export type Network = {
  key: Netoworks;
  name: string;
  icon: ReactNode;
  bgColor: string;
  color: string;
};
export type HeaderNavigationItems = {
  text: string;
  url: string;
};
