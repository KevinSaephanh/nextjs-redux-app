import { AspectRatio, Box, Heading, VStack, Text, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { FaPlay } from "react-icons/fa";
import { mockVideos } from "../../mocks/courses";

const ContentList = () => {
  return (
    <VStack spacing="2" alignItems="flex-start">
      {mockVideos.map((video, key) => {
        return (
          <Box key={key}>
            <Heading fontSize={{ base: "xl", md: "2xl" }} pb={"5px"}>
              {key + 1}. {video.title}
            </Heading>
            <Flex pl={"5px"}>
              <FaPlay fontSize={"12px"} style={{ margin: "auto 0" }} />
              <Text pl={"10px"}>{video.time} min</Text>
            </Flex>
          </Box>
        );
      })}
    </VStack>
  );
};

const Course: FC = (props) => {
  console.log(props);

  return (
    <>
      <AspectRatio className="video-wrapper" ratio={1}>
        <iframe title="naruto" src="https://www.youtube.com/embed/if-2M3K1tqk" allowFullScreen />
      </AspectRatio>
      <ContentList />
    </>
  );
};

export default Course;
