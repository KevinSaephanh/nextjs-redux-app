import { FC } from "react";
import { ProtectedRoute } from "../../../hoc/ProtectedRoute";

const Profile: FC = () => {
  return <>HELLO WORLD!</>;
};

export default ProtectedRoute(Profile);
