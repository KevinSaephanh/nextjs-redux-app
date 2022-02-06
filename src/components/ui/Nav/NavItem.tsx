import { FC } from "react";
import { Link, useColorModeValue } from "@chakra-ui/react";
import NextLink from "next/link";

interface NavItemProps {
  title: string;
  to: string;
}

export const NavItem: FC<NavItemProps> = ({ title, to }) => {
  return (
    <NextLink href={to} passHref>
      <Link
        as="a"
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.200", "gray.700"),
        }}
      >
        {title}
      </Link>
    </NextLink>
  );
};
