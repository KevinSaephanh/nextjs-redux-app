import { FC } from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { DarkModeToggle } from "./DarkModeToggle";
import { NavItem } from "./NavItem";
import { Logo } from "../Logo/Logo";
import pepe from "../../assets/pepe-box.png";

const navs = [
  {
    title: "About",
    to: "/about",
  },
  {
    title: "Explore",
    to: "/explore",
  },
];

const authNavs = [
  {
    title: "Login",
    to: "/login",
  },
  {
    title: "Register",
    to: "/register",
  },
];

export const Navbar: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Box className="image-container" height="100px">
            <Logo />
          </Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {navs.map((nav) => (
              <NavItem title={nav.title} to={nav.to} />
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Menu>
            <DarkModeToggle />

            {/* Avatar with nav items */}
            <MenuButton as={Button} rounded={"full"} variant={"link"} cursor={"pointer"} minW={0}>
              <Avatar size={"sm"} src={pepe}></Avatar>
            </MenuButton>
            <MenuList>
              <MenuItem>Profile</MenuItem>
              <MenuItem>Settings</MenuItem>
              <MenuDivider />
              <MenuItem>Logout</MenuItem>
            </MenuList>
          </Menu>
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: "none" }}>
          <Stack as={"nav"} spacing={4}>
            {navs.map((nav) => (
              <NavItem title={nav.title} to={nav.to} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};
