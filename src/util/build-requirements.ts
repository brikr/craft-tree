import { cloneDeep } from "lodash";
import { CraftingTree } from "src/trees";
import { isFoundItem, ItemList, ItemWithCount } from "src/types/items";

// TODO: support crafting paths
// type CraftingPath = Item[];

// interface ItemWithCountAndPaths extends ItemWithCount {
//   paths: CraftingPath[];
// }

interface RequirementsList {
  [name: string]: ItemWithCount;
}

export function buildRequirements(
  itemList: ItemList,
  tree: CraftingTree
): RequirementsList {
  let final: RequirementsList = {};

  for (const [name, itemAndCount] of Object.entries(itemList)) {
    const next = buildRequirementsForItem(name, itemAndCount, tree);
    final = mergeRequirements(final, next);
  }

  return final;
}

function mergeRequirements(
  l1: RequirementsList,
  l2: RequirementsList
): RequirementsList {
  const final: RequirementsList = cloneDeep(l1);

  for (const [name, value] of Object.entries(l2)) {
    if (final[name] !== undefined) {
      // merge
      final[name].count += value.count;
      // final[name].paths = final[name].paths.concat(value.paths);
    } else {
      // no merge needed
      final[name] = value;
    }
  }

  return final;
}

function buildRequirementsForItem(
  name: string,
  { item, count }: ItemWithCount,
  tree: CraftingTree
): RequirementsList {
  if (isFoundItem(item)) {
    return {
      [name]: {
        item,
        count,
      },
    };
  }
  return {};
}
