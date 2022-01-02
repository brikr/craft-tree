import { CloseIcon } from "src/icons/close";
import { TreeItem } from "src/types/items";
import styled, { useTheme } from "styled-components";
import { IconButton } from "./icon-button";
import { Item } from "./item";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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

export const ItemListEntry: React.FC<Props> = ({
  name,
  item,
  count,
  onRemove,
}) => {
  const theme = useTheme();

  const handleRemove = () => {
    onRemove?.(name);
  };

  return (
    <Wrapper>
      <Item name={name} item={item} count={count} />
      <IconButton
        icon={CloseIcon}
        color={theme.colors.onBackground}
        onClick={handleRemove}
      ></IconButton>
    </Wrapper>
  );
};
