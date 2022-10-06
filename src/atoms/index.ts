import { atom } from "jotai";

export const selectedTokenAtom = atom<string | null>(null);
export const selectedNetworkAtom = atom<string | null>(null);
