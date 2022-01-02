import React from "react";
import { TreeItem } from "src/types/items";
import styled from "styled-components";
import { Text } from "./text";

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 5px;

  height: 30px;
`;

const Image = styled.img`
  height: 24px;
  image-rendering: pixelated;
`;

interface Props {
  name: string;
  item: TreeItem;
  count: number;
  onRemove?: (name: string) => void;
}

export const Item: React.FC<Props> = ({ name, item, count }) => {
  return (
    <Wrapper>
      <Text>
        {count} {name}
      </Text>
      {item.image && <Image src={item.image} />}
    </Wrapper>
  );
};
