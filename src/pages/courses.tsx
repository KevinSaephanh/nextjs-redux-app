import { FC } from "react";
import { withAuth } from "../hoc/withAuth";

const Courses: FC = (props) => {
  console.log(props);
  return <></>;
};

// export const getServerSideProps = async (ctx) => {
//   return {};
// };

export default withAuth(Courses);
// export default Courses;
