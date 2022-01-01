import { styled } from "src/theme";

const Wrapper = styled.div``;

export const Select: React.FC = ({ children }) => {
  return <select>{children}</select>;
};
