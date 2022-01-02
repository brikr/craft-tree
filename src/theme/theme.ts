// import originalStyled, { ThemedStyledInterface } from "styled-components";
import "styled-components";
import { materialPalette } from "./material-palette";

export const theme = {
  colors: {
    background: materialPalette.grey[900].base,
    onBackground: materialPalette.white,

    surface: materialPalette.grey[800].base,
    onSurface: materialPalette.white,

    accent: materialPalette.amber[700].base,
    onAccent: materialPalette.black,
  },
};

export type Theme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}

// export const styled = originalStyled as ThemedStyledInterface<typeof theme>;
