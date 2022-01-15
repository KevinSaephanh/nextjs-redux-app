import { AspectRatio } from "@chakra-ui/react";
import { FC } from "react";

const Course: FC = (props) => {
  console.log(props);

  return (
    <>
      <AspectRatio className="video-wrapper" ratio={1}>
        <iframe title="naruto" src="https://www.youtube.com/embed/QhBnZ6NPOY0" allowFullScreen />
      </AspectRatio>
      COURSE HERE
    </>
  );
};

// export const getServerSideProps = async (ctx) => {
//   return {};
// };

export default Course;
