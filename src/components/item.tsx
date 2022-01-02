import { CloseIcon } from "src/icons/close";
import { Item as TItem } from "src/types/items";
import styled, { useTheme } from "styled-components";
import { IconButton } from "./icon-button";
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
  item: TItem;
  count: number;
  onRemove?: (name: string) => void;
}

export const Item: React.FC<Props> = ({ name, item, count, onRemove }) => {
  const theme = useTheme();

  const handleRemove = () => {
    onRemove?.(name);
  };

  return (
    <Wrapper>
      <Text>
        {count} {name}
      </Text>
      {item.image && <Image src={item.image} />}
      <Space />
      <IconButton
        icon={CloseIcon}
        color={theme.colors.onBackground}
        onClick={handleRemove}
      ></IconButton>
    </Wrapper>
  );
};
