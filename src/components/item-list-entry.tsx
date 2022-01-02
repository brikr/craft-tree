import { useState } from "react";
import { CloseIcon } from "src/components/icons/close";
import { TreeItem } from "src/types/items";
import styled from "styled-components";
import { IconButton } from "./icon-button";
import { CollapseIcon } from "./icons/collapse";
import { ExpandIcon } from "./icons/expand";
import { Item } from "./item";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
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
  const [expanded, setExpanded] = useState(false);

  const handleRemove = () => {
    onRemove?.(name);
  };

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <Wrapper>
      <Item name={name} item={item} count={count} />
      <Buttons>
        <IconButton
          icon={expanded ? CollapseIcon : ExpandIcon}
          onClick={toggleExpand}
        />
        {onRemove && <IconButton icon={CloseIcon} onClick={handleRemove} />}
      </Buttons>
    </Wrapper>
  );
};
