import styled from "styled-components";
import { ItemList } from "./item-list";
import { Requirements } from "./requirements";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  gap: 50px;
`;

export const MainContent: React.FC = () => {
  return (
    <Wrapper>
      <ItemList />
      <Requirements />
    </Wrapper>
  );
};
