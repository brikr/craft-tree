import React, { useMemo, useRef } from "react";
import { useSelectedTree } from "src/recoil/selected-tree";
import { Item } from "src/types/items";
import styled, { css } from "styled-components";

const TextArea = styled.textarea`
  ${({ theme }) => css`
    box-sizing: border-box;

    width: 100%;
    height: 30px;

    font-size: 16px;

    border-top: none;
    border-right: none;
    border-bottom: 1px solid ${theme.colors.accent};
    border-left: none;
    resize: none;

    background: rgba(0, 0, 0, 0);
    color: ${theme.colors.onSurface};

    &:focus {
      outline: none;
      background: ${theme.colors.surface};
    }
  `}
`;

interface Props {
  onAdd: (name: string, item: Item, count: number) => void;
}

export const ItemEntry: React.FC<Props> = ({ onAdd }) => {
  const { tree } = useSelectedTree();
  const itemNames = useMemo(() => Object.keys(tree.tree), [tree]);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = () => {
    const search = textAreaRef.current?.value;

    if (!search) {
      // ignore empty
      return;
    }

    const match = search.match(/(\d+ )?(.*)/);

    if (!match) {
      // TODO: handle error
      return;
    }

    const count = parseInt(match[1]);
    const itemNameQuery = match[2].trim().toLowerCase();

    if (count === 0) {
      // ignore zeroes
      return;
    }

    const result = itemNames.find(
      (name) => name.toLowerCase() === itemNameQuery
    );

    if (result) {
      onAdd(result, tree.tree[result], isNaN(count) ? 1 : count);

      textAreaRef.current.value = "";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <TextArea
      ref={textAreaRef}
      onKeyDown={handleKeyDown}
      placeholder="Add an item..."
    />
  );
};
