import { CloseIcon } from "src/components/icons/close";
import { TreeItem } from "src/types/items";
import styled from "styled-components";
import { IconButton } from "./icon-button";
import { Item } from "./item";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  const handleRemove = () => {
    onRemove?.(name);
  };

  return (
    <Wrapper>
      <Item name={name} item={item} count={count} />
      <IconButton icon={CloseIcon} onClick={handleRemove}></IconButton>
    </Wrapper>
  );
};
