import React, { useMemo, useState } from "react";
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

  const [value, setValue] = useState("");

  const handleSubmit = () => {};

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.endsWith("\n")) {
      console.log("submission");
      handleSubmit();
    } else {
      console.log(e.target.value);
      setValue(e.target.value);
    }
  };

  return <TextArea value={value} onChange={handleChange} />;
};
