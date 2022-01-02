import { cloneDeep } from "lodash";
import { atom, useRecoilState } from "recoil";
import { CraftedItem, FoundItem } from "src/trees";

interface ItemList {
  [name: string]: {
    count: number;
    item: FoundItem | CraftedItem;
  };
}

export const itemListAtom = atom<ItemList>({
  key: "itemList",
  default: {},
});

export const useItemList = () => {
  const [items, setItems] = useRecoilState(itemListAtom);

  const addItem = (
    name: string,
    item: FoundItem | CraftedItem,
    count: number
  ) => {
    setItems((prev) => {
      const newItems = cloneDeep(prev);
      if (prev[name] !== undefined) {
        // item already in list, just add to its count
        newItems[name].count = prev[name].count + count;
      } else {
        // new item
        newItems[name] = {
          item,
          count,
        };
      }
      return newItems;
    });
  };

  return { items, addItem };
};
