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

  for (const [name, { item, count }] of Object.entries(itemList)) {
    if (isFoundItem(item)) {
      // item has no ingredients, so just add it
      final[name] = { item, count };
    } else {
      // item has ingredients. build their requirements, multiply by this item's count, and add
      const ingredientItemList: ItemList = {};
      for (const ingredient of item.ingredients) {
        ingredientItemList[ingredient.name] = {
          item: tree.tree[ingredient.name],
          count: ingredient.count,
        };
      }
      const requirements = multiplyRequirements(
        buildRequirements(ingredientItemList, tree),
        count
      );
      final = mergeRequirements(final, requirements);
    }
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

function multiplyRequirements(
  list: RequirementsList,
  multiplicant: number
): RequirementsList {
  const final: RequirementsList = {};

  for (const [name, itemWithCount] of Object.entries(list)) {
    final[name] = {
      ...itemWithCount,
      count: itemWithCount.count * multiplicant,
    };
  }

  return final;
}
