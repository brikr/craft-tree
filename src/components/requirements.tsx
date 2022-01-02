import React, { useMemo } from "react";
import { useItemList } from "src/recoil/item-list";
import { useSelectedTree } from "src/recoil/selected-tree";
import { buildRequirements } from "src/util/build-requirements";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 300px;
`;

export const Requirements: React.FC = () => {
  const { tree } = useSelectedTree();
  const { items } = useItemList();
  const requirements = useMemo(
    () => buildRequirements(items, tree),
    [items, tree]
  );

  return (
    <Wrapper>
      <h2>Requirements</h2>
      {Object.entries(requirements).map(([name, { item, count }]) => (
        <div key={name}>
          {count} {name}
        </div>
      ))}
    </Wrapper>
  );
};
