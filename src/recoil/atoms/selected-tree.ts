import { atom } from "recoil";
import { builtInTrees } from "src/trees";

export const selectedTreeAtom = atom<keyof typeof builtInTrees>({
  key: "selectedTreeState",
  default: "Test",
});
