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

export type Item = FoundItem | CraftedItem;

export interface ItemWithCount {
  item: Item;
  count: number;
}

export interface ItemList {
  [name: string]: ItemWithCount;
}

export function isFoundItem(item: Item): item is FoundItem {
  return Boolean((item as FoundItem).source);
}

export function isCraftedItem(item: Item): item is CraftedItem {
  return !isFoundItem(item);
}
