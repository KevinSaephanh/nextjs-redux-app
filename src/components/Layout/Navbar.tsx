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
import { DarkModeToggle } from "../ui/DarkModeToggle";
import { Logo } from "../ui/Logo";
import { NavItem } from "../ui/NavItem";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { logout } from "../../store/auth/asyncThunk";
import { useRouter } from "next/router";
import pepe from "../../assets/pepe-box.png";

const navs = [
  {
    title: "Docs",
    to: "/docs/getting-started",
  },
  {
    title: "Courses",
    to: "/courses",
  },
  {
    title: "About",
    to: "/about",
  },
];

const authNavs = [
  {
    title: "Register",
    to: "/register",
  },
  {
    title: "Login",
    to: "/login",
  },
];

export const Navbar: FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isAuth, user } = useAppSelector((state) => state.auth);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleLogout = async () => {
    await dispatch(logout());
    router.push("/");
  };

  return (
    <Box bg={useColorModeValue("gray.500", "gray.900")} px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <IconButton
          size={"md"}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={"Open Menu"}
          display={{ md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        />
        <HStack spacing={8} alignItems={"center"}>
          <Box>
            <Logo />
          </Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            {navs.map((nav, key) => (
              <NavItem title={nav.title} to={nav.to} key={key} />
            ))}
          </HStack>
        </HStack>
        <Flex alignItems={"center"}>
          <Menu>
            <DarkModeToggle isAuth={isAuth} darkMode={user.darkMode} />

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
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
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
            {navs.map((nav, key) => (
              <NavItem title={nav.title} to={nav.to} key={key} />
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};
