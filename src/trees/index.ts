import { TreeCraftedItem, TreeFoundItem } from "src/types/items";

export const builtInTrees = {
  Terraria: "Terraria.json",
  Test: "Test.json",
};

export interface CraftingTree {
  name: string;
  version: string;
  tree: { [name: string]: TreeCraftedItem | TreeFoundItem };
}
