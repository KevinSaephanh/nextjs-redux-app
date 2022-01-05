import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const textStyles = {
  h1: {
    fontSize: ["48px", "72px"],
    fontWeight: "bold",
    lineHeight: "110%",
    letterSpacing: "-2%",
  },
  p: {
    fontSize: ["12px", "16px"],
    fontWeight: "semibold",
  },
};

export const theme = extendTheme({ breakpoints, config, textStyles });
