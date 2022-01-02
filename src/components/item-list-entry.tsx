import { isArray } from "lodash";
import { useMemo, useState } from "react";
import { CloseIcon } from "src/components/icons/close";
import { useSelectedTree } from "src/recoil/selected-tree";
import { isCraftedItem, isFoundItem, TreeItem } from "src/types/items";
import styled, { css } from "styled-components";
import { IconButton } from "./icon-button";
import { CollapseIcon } from "./icons/collapse";
import { ExpandIcon } from "./icons/expand";
import { Item } from "./item";
import { Text } from "./text";

const MainRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

const ExpandedSection = styled.div`
  ${({ theme }) => css`
    border-left: 1px solid ${theme.colors.accent};
  `}
`;

const Metadata = styled(Text)`
  text-align: center;
`;

const Children = styled.div`
  padding-left: 10px;
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
  const { tree } = useSelectedTree();
  const [expanded, setExpanded] = useState(false);

  const metadataContent = useMemo(() => {
    if (isFoundItem(item)) {
      return `Source: ${item.source}`;
    } else {
      const madeAtText = isArray(item.madeAt)
        ? item.madeAt.join(", ")
        : item.madeAt;
      return `Made at: ${madeAtText}`;
    }
  }, [item]);

  const handleRemove = () => {
    onRemove?.(name);
  };

  const toggleExpand = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <>
      <MainRow>
        <Item name={name} item={item} count={count} />
        <Buttons>
          <IconButton
            icon={expanded ? CollapseIcon : ExpandIcon}
            onClick={toggleExpand}
          />
          {onRemove && <IconButton icon={CloseIcon} onClick={handleRemove} />}
        </Buttons>
      </MainRow>
      {expanded && (
        <ExpandedSection>
          <Metadata>{metadataContent}</Metadata>
          {isCraftedItem(item) && (
            <Children>
              {item.ingredients.map((ingredient) => (
                <ItemListEntry
                  key={ingredient.name}
                  name={ingredient.name}
                  item={tree.tree[ingredient.name]}
                  count={ingredient.count}
                />
              ))}
            </Children>
          )}
        </ExpandedSection>
      )}
    </>
  );
};
