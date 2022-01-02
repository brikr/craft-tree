import React from "react";
import { useItemList } from "src/recoil/atoms/item-list";
import styled from "styled-components";
import { Item } from "./item";
import { ItemEntry } from "./item-entry";

export const Wrapper = styled.div`
  width: 300px;
`;

export const ItemList: React.FC = () => {
  const { items, addItem } = useItemList();

  return (
    <Wrapper>
      <h2>Items</h2>
      {Object.entries(items).map(([name, { item, count }]) => (
        <Item key={name} name={name} item={item} count={count} />
      ))}
      <ItemEntry onAdd={addItem} />
    </Wrapper>
  );
};
