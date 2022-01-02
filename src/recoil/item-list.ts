import { cloneDeep } from "lodash";
import { atom, useRecoilState } from "recoil";
import { Item, ItemList } from "src/types/items";

export const itemListAtom = atom<ItemList>({
  key: "itemList",
  default: {},
});

export const useItemList = () => {
  const [items, setItems] = useRecoilState(itemListAtom);

  const addItem = (name: string, item: Item, count: number) => {
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

  const removeItem = (name: string) => {
    setItems((prev) => {
      const newItems = cloneDeep(prev);
      delete newItems[name];
      return newItems;
    });
  };

  return { items, addItem, removeItem };
};
