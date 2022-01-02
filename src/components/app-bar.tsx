import React from "react";
import { useSelectedTree } from "src/recoil/selected-tree";
import { builtInTrees } from "src/trees";
import styled, { css } from "styled-components";

const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.accent};
    color: ${theme.colors.onAccent};

    max-width: 100%;
    height: 60px;

    padding: 0 10px;

    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const AppBar: React.FC = () => {
  const { tree, loadNewTree } = useSelectedTree();

  const handleGameChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    loadNewTree(e.target.value as keyof typeof builtInTrees);
  };

  return (
    <Wrapper>
      <h1>Craft Tree</h1>
      <div>
        <label htmlFor="game">Game:</label>
        <select name="game" onChange={handleGameChange} value={tree.name}>
          {Object.keys(builtInTrees).map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </Wrapper>
  );
};
