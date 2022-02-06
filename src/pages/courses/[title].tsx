import { AspectRatio, Box, Container, Heading, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { ContentList } from "../../components/ui/Course/ContentList";
import { mockCourses } from "../../mocks/courses";
import { Course, Lecture } from "../../models/Course";

const CourseDetails: FC = (props) => {
  const [lecture, setLecture] = useState<Lecture>();
  const router = useRouter();
  const course = props as Course;

  useEffect(() => {
    if (!lecture) setLecture(course.sections[0].lectures[0]);
  }, [lecture]);

  const handleLectureChange = (title: string) => {
    // Finding matching lecture in nested array
    const newLecture = findLecture(title);
    setLecture(newLecture);
  };

  const findLecture = (title: string) => {
    let lec = {} as Lecture;
    course.sections.forEach((s) => {
      lec = s.lectures.find((l) => l.title === title) as Lecture;
    });
    return lec;
  };

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
      <Box display={{ base: "grid", md: "flex" }}>
        <AspectRatio className="video-wrapper" ratio={1}>
          <iframe title="First video" src={lecture?.src} allowFullScreen />
        </AspectRatio>
        <ContentList course={course} handleLectureChange={handleLectureChange} />
      </Box>
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
