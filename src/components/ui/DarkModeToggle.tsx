import { FC } from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { lighten } from "@chakra-ui/theme-tools";

interface DarkModeToggleProps {
  isAuth: boolean;
  darkMode: boolean;
}

export const DarkModeToggle: FC<DarkModeToggleProps> = ({ isAuth, darkMode }) => {
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
