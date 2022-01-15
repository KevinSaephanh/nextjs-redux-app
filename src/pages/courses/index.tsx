import { Container, Flex, Heading, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { CourseCard } from "../../components/ui/CourseCard";
import { mockCourses } from "../../mocks/courses";

const Courses: FC = (props) => {
  console.log(props);

  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1">Stonks Courses</Heading>
      <Flex flex={1} position={"relative"} w={"full"}>
        <VStack spacing={4} align="stretch">
          {mockCourses.map((course, key) => (
            <CourseCard course={course} key={key} />
          ))}
        </VStack>
      </Flex>
    </Container>
  );
};

// export const getServerSideProps = async (ctx) => {
//   return {};
// };

export default Courses;
