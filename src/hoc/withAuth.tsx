import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAppSelector } from "../store/hooks";
import { GetServerSidePropsContext } from "next";

export const withAuth = (Component: any) => {
  const AuthComponent = (props): JSX.Element | null => {
    const { isAuth } = useAppSelector((state) => state.auth);
    const router = useRouter();

    useEffect(() => {
      if (!isAuth) router.push("/login");
    });

    return isAuth ? <Component {...props} /> : null;
  };

  AuthComponent.getInitialProps = async (ctx: GetServerSidePropsContext) => {
    console.log(ctx);
    // ctx.req.headers.cookie = "";
    return { context: ctx };
  };

  return AuthComponent;
};
