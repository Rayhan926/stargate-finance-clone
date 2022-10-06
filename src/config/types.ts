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
  | "fantom"
  | "matic";

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
  icon?: ReactNode;
};

export type SelectOption = {
  label: string;
  icon?: ReactNode;
  value: string;
};
export type SelectProps = {
  options: SelectOption[];
  value: SelectOption;
  onChange: (option: SelectOption) => void;
  label: string;
};

export type AllFarm = {
  name: {
    title: string;
    icon: ReactNode;
  };
  network: Netoworks;
  liquidity: string;
  apy: string;
};

export type RoadmapBlockProps = {
  progressPercentage: number;
  labelText: string;
  title: string;
  subtitle: string;
  imgSrc: string;
  layout?: "reverse";
};

export type FooterLinks = {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
};
