import { FC } from "react";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";

export const Logo: FC = () => {
  return (
    <Link href="/">
      <Box h={100} minW={100}>
        <a href="/">
          <Image src={logo} alt="logo" layout="responsive" height={50} width={50} />
        </a>
      </Box>
    </Link>
  );
};
