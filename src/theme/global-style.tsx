import { createGlobalStyle, css } from "styled-components";
import { Theme } from "./theme";

const GlobalStyle = createGlobalStyle<{ theme: Theme }>`
  ${({ theme }) => css`
    body {
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      background: ${theme.colors.background};
      color: ${theme.colors.onBackground};
    }

    * {
      font-family: "Poppins", sans-serif;
    }
  `}
`;

export default GlobalStyle;
