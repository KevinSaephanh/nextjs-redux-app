import { FC } from "react";
import Link from "next/link";
import logo from "../../assets/logo.png";
import Image from "next/image";

export const Logo: FC = () => {
  return (
    <Link href="/">
      <Image src={logo} layout="responsive" alt="logo" />
    </Link>
  );
};
