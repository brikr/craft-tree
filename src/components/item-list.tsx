import React from "react";
import { ItemWithCount, useItemList } from "src/recoil/atoms/item-list";
import { useSelectedTree } from "src/recoil/atoms/selected-tree";
import { styled } from "src/theme";
import { ItemEntry } from "./item-entry";

export const Wrapper = styled.div`
  width: 300px;
`;

export const ItemList: React.FC = () => {
  const { tree } = useSelectedTree();
  const { items, addItem } = useItemList();

  const handleAddItem = (item: ItemWithCount) => {
    addItem(item);
  };

  return (
    <Wrapper>
      <h2>Items</h2>
      {items.map(({ name, count }, idx) => (
        <span key={idx}>
          {count} {name}
        </span>
      ))}
      <ItemEntry onAdd={handleAddItem} />
    </Wrapper>
  );
};
