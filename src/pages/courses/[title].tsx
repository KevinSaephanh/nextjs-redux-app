import {
  AspectRatio,
  Box,
  Heading,
  Text,
  Flex,
  Accordion,
  AccordionItem,
  AccordionPanel,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { FaPlay } from "react-icons/fa";
import { mockCourses } from "../../mocks/courses";
import { Course, Video } from "../../models/Course";

interface SectionContentProps {
  video: Video;
  key: number;
}

const ContentList: FC<{ course: Course }> = ({ course }) => {
  const { sections } = course;

  return (
    <Accordion w={"100%"} maxW={"800px"} allowToggle allowMultiple>
      {sections.map((section, key) => {
        const { videos, title } = section;

        return (
          <AccordionItem key={key} p={"10px 0 10px 5px"}>
            <Heading fontSize={"xl"} cursor={"pointer"}>
              Section {key + 1}: {title}
            </Heading>
            <AccordionPanel pb={4}>
              {videos.map((video, index) => (
                <SectionContent video={video} key={index} />
              ))}
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};

const SectionContent: FC<SectionContentProps> = ({ video, key }) => {
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
};

const CourseDetails: FC = (props) => {
  const router = useRouter();
  const course = props as Course;

  return (
    <>
      <Heading
        color={useColorModeValue("white", "white")}
        backgroundColor={useColorModeValue("gray.700", "#181818")}
        fontSize={{ base: "16px", md: "xl" }}
        width={"100vw"}
        height={"50px"}
        lineHeight={"50px"}
        pl={"15px"}
        cursor={"pointer"}
        _hover={{ color: "teal.500" }}
        onClick={() => router.push(`/courses/${course.title}`)}
      >
        {course.title}
      </Heading>
      <AspectRatio className="video-wrapper" ratio={1}>
        <iframe
          title="First video"
          src="https://www.youtube.com/embed/if-2M3K1tqk"
          allowFullScreen
        />
      </AspectRatio>
      <ContentList course={course} />
    </>
  );
};

export async function getServerSideProps(ctx: any) {
  const title = ctx.params.title as string;
  let course = mockCourses[0];
  mockCourses.forEach((c) => {
    if (c.title.toUpperCase().includes(title.toUpperCase())) course = c;
  });
  return { props: course };
}

export default CourseDetails;
