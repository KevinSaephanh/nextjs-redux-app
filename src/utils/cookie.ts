import { NextApiResponse } from "next";

const cookieOptions = {
  httpOnly: true,
  maxAge: 2592000,
  path: "/",
  sameSite: "Strict",
  secure: process.env.NODE_ENV === "production",
};

export const setCookie = (
  res: any,
  name: string,
  value: string,
  options: Record<string, unknown> = {}
) => {};

export const deleteCookie = (res: NextApiResponse) => {
  setCookie(res, "auth", "0", {
    ...cookieOptions,
    path: "/",
    maxAge: 1,
  });
};
