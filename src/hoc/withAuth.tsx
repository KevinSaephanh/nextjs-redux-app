import { useEffect } from "react";
import { useRouter } from "next/router";
import { mockToken } from "../mocks/tokens";

export const withAuth = (Component: any) => {
  const AuthComponent = (props: any): JSX.Element | null => {
    const router = useRouter();
    const { user, token } = props;

    useEffect(() => {
      if (!token || !user) router.push("/login");
    });

    return token ? <Component {...props} /> : null;
  };

  AuthComponent.getInitialProps = async (ctx: {}) => {
    let token = null;
    const user = JSON.parse(localStorage.getItem("user") as string);

    // Set mock token if user is set in localstorage
    if (user) token = mockToken;

    return { user, token };
  };

  return AuthComponent;
};
