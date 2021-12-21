import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../assets/logo.png";

export const Logo: FC = () => {
  return (
    <Link href="/">
      <a href="/">
        <Image src={logo} layout="responsive" alt="logo" />
      </a>
    </Link>
  );
};
