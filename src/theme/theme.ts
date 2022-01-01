import originalStyled, { ThemedStyledInterface } from "styled-components";
import { materialPallete } from "./material-pallete";

export const theme = {
  colors: {
    background: materialPallete.grey[900].base,
    onBackground: materialPallete.white,

    accent: materialPallete.amber[700].base,
    onAccent: materialPallete.black,
  },
};

export type Theme = typeof theme;

export const styled = originalStyled as ThemedStyledInterface<typeof theme>;
