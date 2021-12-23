import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  sm: "40em",
  md: "52em",
  lg: "64em",
  xl: "80em",
});
const colorConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};
const textStyles = {
  p: {
    fontSize: ["12px", "16px"],
    fontWeight: "semibold",
  },
};

export const theme = extendTheme({ breakpoints, colorConfig, textStyles });
