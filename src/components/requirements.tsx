import React from "react";
import { styled } from "src/theme";

export const Wrapper = styled.div`
  width: 300px;
`;

export const Requirements: React.FC = () => {
  return (
    <Wrapper>
      <h2>Requirements</h2>
    </Wrapper>
  );
};
