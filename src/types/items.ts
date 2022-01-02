export interface TreeBaseItem {
  url?: string;
  image?: string;
}

export interface TreeCraftedItem extends TreeBaseItem {
  madeAt: string | string[];
  ingredients: Array<{
    name: string;
    count: number;
  }>;
}

export interface TreeFoundItem extends TreeBaseItem {
  source: string;
}

export type TreeItem = TreeFoundItem | TreeCraftedItem;

export interface TreeItemWithCount {
  item: TreeItem;
  count: number;
}

export interface ItemList {
  [name: string]: TreeItemWithCount;
}

export function isFoundItem(item: TreeItem): item is TreeFoundItem {
  return Boolean((item as TreeFoundItem).source);
}

export function isCraftedItem(item: TreeItem): item is TreeCraftedItem {
  return !isFoundItem(item);
}
