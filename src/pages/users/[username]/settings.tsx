import { FC } from "react";
import { withAuth } from "../../../hoc/withAuth";

// tabs - account, notifications, privacy,

interface SettingsProps {
  data: any;
}

const Settings: FC<SettingsProps> = ({ data }) => {
  return <>HELLO WORLD!</>;
};

export default withAuth(Settings);
