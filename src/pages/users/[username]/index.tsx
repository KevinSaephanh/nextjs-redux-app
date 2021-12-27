import { FC } from "react";
import { withAuth } from "../../../hoc/withAuth";

const Profile: FC = () => {
  return <>HELLO WORLD!</>;
};

export default withAuth(Profile);
