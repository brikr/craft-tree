export const builtInTrees = {
  Terraria: "Terraria.json",
  Test: "Test.json",
};

export interface BaseItem {
  url?: string;
  image?: string;
}

export interface CraftedItem extends BaseItem {
  madeAt: string | string[];
  ingredients: Array<{
    name: string;
    count: number;
  }>;
}

export interface FoundItem extends BaseItem {
  source: string;
}

export interface CraftingTree {
  name: string;
  version: string;
  tree: { [name: string]: CraftedItem | FoundItem };
}
