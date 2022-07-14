// 1. Import `extendTheme`
import { extendTheme, colors } from "@vechaiui/react";

// 2.Define new color scheme
const dark = {
  id: "dark",
  type: "dark",
  colors: {
    bg: {
      base: colors.coolGray["900"],
      fill: colors.coolGray["900"]
    },
    text: {
      foreground: colors.coolGray["100"],
      muted: colors.coolGray["300"]
    },
    primary: colors.cyan,
    neutral: colors.coolGray
  }
};

// or custom default color scheme
const light = {
  id: "light",
  type: "light",
  colors: {
    bg: {
      base: colors.blue["500"],
      fill: colors.blue["500"]
    },
    text: {
      foreground: colors.blue["500"],
      muted: colors.blue["500"]
    },
    primary: colors.lightBlue,
    neutral: colors.gray
  }
};

// 3. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  cursor: "pointer",
  colorSchemes: {
    light,
    dark
  }
});

// 4. Pass the new theme to `VechaiProvider`
