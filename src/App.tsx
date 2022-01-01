import React from "react";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { AppBar } from "./components/app-bar";
import { theme } from "./theme";
import GlobalStyle from "./theme/global-style";

const App: React.FC = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AppBar />
        <h1>Hello!</h1>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
