import { CloseIcon } from "src/icons/close";
import { CraftedItem, FoundItem } from "src/trees";
import styled from "styled-components";
import { Text } from "./text";

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  gap: 5px;

  height: 30px;
`;

const Space = styled.div`
  flex-grow: 1;
`;

const Image = styled.img`
  height: 24px;
  image-rendering: pixelated;
`;

interface Props {
  name: string;
  item: CraftedItem | FoundItem;
  count: number;
}

export const Item: React.FC<Props> = ({ name, item, count }) => {
  return (
    <Wrapper>
      <Text>
        {count} {name}
      </Text>
      {item.image && <Image src={item.image} />}
      <Space />
      <CloseIcon />
    </Wrapper>
  );
};
