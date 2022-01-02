import { atom, useRecoilState } from "recoil";
import { CraftedItem, FoundItem } from "src/trees";

export interface ItemWithCount {
  name: string;
  item: FoundItem | CraftedItem;
  count: number;
}

export const itemListAtom = atom<Array<ItemWithCount>>({
  key: "itemList",
  default: [],
});

export const useItemList = () => {
  const [items, setItems] = useRecoilState(itemListAtom);

  const addItem = (item: ItemWithCount) => {
    setItems((prev) => [...prev, item]);
  };

  return { items, addItem };
};
