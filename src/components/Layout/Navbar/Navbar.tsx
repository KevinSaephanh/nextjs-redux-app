import { FC } from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
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
import { DarkModeToggle } from "../../ui/DarkModeToggle";
import { Logo } from "../../ui/Logo";
import { NavItem } from "../../ui/NavItem";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import pepe from "../../../assets/pepe-box.png";

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

export const Navbar: FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isAuth, user } = useAppSelector((state) => state.auth);
  const dispatch = useAppDispatch();

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
        <Flex spacing={8} alignItems={"center"}>
          <Box w={"100%"} h={"30px"} maxH={"30px"}>
            <Logo />
          </Box>
          {navs.map((nav) => (
            <NavItem title={nav.title} to={nav.to} />
          ))}
        </Flex>
        <Flex alignItems={"center"}>
          <Menu>
            <DarkModeToggle />

            {isAuth ? (
              <>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar size={"sm"} src={pepe}></Avatar>
                </MenuButton>
                <MenuList>
                  <MenuItem>{user.username}</MenuItem>
                  <MenuDivider />
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuDivider />
                  <MenuItem>Logout</MenuItem>
                </MenuList>
              </>
            ) : (
              <>
                <NavItem title="Register" to="/register" />
                <NavItem title="Login" to="/login" />
              </>
            )}
          </Menu>
        </Flex>
      </Flex>

      {/* Hamburger menu */}
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
