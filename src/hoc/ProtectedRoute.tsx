import { FC } from "react";
import Login from "../pages/login";

export const ProtectedRoute = (Component: FC<any>) => {
  const Route = (props: any) => {
    if (typeof window !== "undefined") {
      if (!props.isAuth) return <Login />;
      return <Component {...props} />;
    }
  };
  return Route;
};
