import { atom, useRecoilState } from "recoil";
import { builtInTrees, CraftingTree } from "src/trees";
import initialTree from "src/trees/Test.json";

export const selectedTreeAtom = atom<CraftingTree>({
  key: "selectedTree",
  default: initialTree as CraftingTree,
});

export const useSelectedTree = () => {
  const [tree, setSelectedTree] = useRecoilState(selectedTreeAtom);

  const loadNewTree = async (treeName: keyof typeof builtInTrees) => {
    const tree = await import(`src/trees/${encodeURIComponent(treeName)}.json`);
    setSelectedTree(tree);
  };

  return {
    tree,
    loadNewTree,
  };
};
