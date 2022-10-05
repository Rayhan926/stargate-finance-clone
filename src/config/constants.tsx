import TabEmptyBoxRow from "@views/Farm/components/TabEmptyBoxRow";
import { Farm, FarmTab } from "./types";

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
    component: "Top Farms",
  },
];

export const farms: Farm[] = [];
