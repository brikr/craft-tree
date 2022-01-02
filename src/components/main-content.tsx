import { styled } from "src/theme";
import { ItemList } from "./item-list";
import { Requirements } from "./requirements";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const MainContent: React.FC = () => {
  return (
    <Wrapper>
      <ItemList />
      <Requirements />
    </Wrapper>
  );
};
