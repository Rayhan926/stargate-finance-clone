import { ReactNode } from "react";

export type FarmTab = {
  title: string;
  component: ReactNode;
};

export type Farm = {
  logo: ReactNode;
  logoSml: ReactNode;
  network: string;
  farmName: string;
  apy: string;
  lpt: string;
  liquidity: string;
};
