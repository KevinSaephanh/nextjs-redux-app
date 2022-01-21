import { Container, Box, Heading, Stack, VStack } from "@chakra-ui/react";
import { FC } from "react";
import { CourseCard } from "../../components/ui/CourseCard";
import { mockCourses } from "../../mocks/courses";

const Courses: FC = (props) => {
  console.log(props);

  return (
    <Container maxW={"7xl"} p="12">
      <Heading as="h1" textAlign={"center"}>
        Stonks Courses
      </Heading>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        direction={{ base: "column", md: "row" }}
        alignItems={"top"}
      >
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-between"
        >
          Side Nav
        </Box>
        <VStack align="stretch">
          {mockCourses.map((course, key) => (
            <CourseCard course={course} key={key} />
          ))}
        </VStack>
      </Stack>
    </Container>
  );
};

// export const getServerSideProps = async (ctx) => {
//   return {};
// };

export default Courses;
