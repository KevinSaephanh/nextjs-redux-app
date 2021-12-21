import { FC } from "react";
import { ProtectedRoute } from "../../../hoc/ProtectedRoute";

interface SettingsProps {
  data: any;
}

const Settings: FC<SettingsProps> = ({ data }) => {
  return <>HELLO WORLD!</>;
};

export default ProtectedRoute(Settings);
