import React, { useMemo, useRef } from "react";
import { ItemWithCount } from "src/recoil/atoms/item-list";
import { useSelectedTree } from "src/recoil/atoms/selected-tree";
import { styled } from "src/theme";

const TextArea = styled.textarea``;

interface Props {
  onAdd: (item: ItemWithCount) => void;
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

    const result = itemNames.find(
      (name) => name.toLowerCase() === itemNameQuery
    );

    if (result) {
      onAdd({
        name: result,
        item: tree.tree[result],
        count: isNaN(count) ? 1 : count,
      });

      textAreaRef.current.value = "";
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit();
    }
  };

  return <TextArea ref={textAreaRef} onKeyDown={handleKeyDown} />;
};
