import { FC } from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export const DarkModeToggle: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      mx={3}
      aria-label="Toggle dark mode"
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
      color={colorMode}
    />
  );
};
