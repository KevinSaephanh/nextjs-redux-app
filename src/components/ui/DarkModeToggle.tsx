import { FC, useEffect } from "react";
import { IconButton, useColorMode } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";
import { Themes } from "../../models/User";

interface DarkModeToggleProps {
  theme: Themes | undefined;
}

export const DarkModeToggle: FC<DarkModeToggleProps> = ({ theme }) => {
  const { colorMode, toggleColorMode } = useColorMode();

  useEffect(() => {
    if (theme === Themes.Dark) toggleColorMode();
  }, []);

  return (
    <IconButton
      className="theme-toggle-btn"
      aria-label="Toggle dark mode"
      icon={colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
      onClick={toggleColorMode}
      color={colorMode}
    />
  );
};
