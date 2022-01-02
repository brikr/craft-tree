import React from "react";
import { useItemList } from "src/recoil/item-list";
import styled from "styled-components";
import { ItemInput } from "./item-input";
import { ItemListEntry } from "./item-list-entry";

export const Wrapper = styled.div`
  width: 300px;
`;

export const ItemList: React.FC = () => {
  const { items, addItem, removeItem } = useItemList();

  const handleRemove = (name: string) => {
    removeItem(name);
  };

  return (
    <Wrapper>
      <h2>Items</h2>
      {Object.entries(items).map(([name, { item, count }]) => (
        <ItemListEntry
          key={name}
          name={name}
          item={item}
          count={count}
          onRemove={handleRemove}
        />
      ))}
      <ItemInput onAdd={addItem} />
    </Wrapper>
  );
};
