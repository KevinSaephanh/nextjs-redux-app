import { AspectRatio, Heading, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import { ContentList } from "../../../components/ui/ContentList";
import { mockCourses } from "../../../mocks/courses";
import { Course } from "../../../models/Course";
import { useAppSelector } from "../../../store/hooks";

const CourseDetails: FC = (props) => {
  const { user } = useAppSelector((state) => state.auth);
  const router = useRouter();
  const course = props as Course;

  useEffect(() => {
    if (course.students.includes(+user!.id))
      router.push(`/${course.title}/${course.sections[0].title}`);
  });

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
