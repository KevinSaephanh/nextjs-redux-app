import { Container, Box, Heading, Stack, VStack } from "@chakra-ui/react";
import { FC, useState } from "react";
import { CourseCard } from "../../components/ui/CourseCard";
import { mockCourses } from "../../mocks/courses";
import { getCourseCreator } from "../../utils/getCourseCreator";
import { Course } from "../../models/Course";
import { FilterTerm } from "../../models/FilterTerm";
import { filterCourses } from "../../utils/filterCourses";
import { FilterSideBar } from "../../components/ui/FilterSideBar";

interface CoursesProps {
  courseList: Course[];
}

const Courses: FC<CoursesProps> = ({ courseList }) => {
  const [courses, setCourses] = useState<Course[]>(courseList);

  const updateCoursesWithFilters = (filters: FilterTerm[]) => {
    // Use filters on course list
    const filteredCourses = filterCourses(filters, courses);
    setCourses(filteredCourses);
  };

  return (
    <Container maxW={"7xl"} p={{ base: 6, md: 16 }}>
      <Heading as="h1" textAlign={"center"} mb={10}>
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
          <FilterSideBar updateCoursesWithFilters={updateCoursesWithFilters} />
        </Box>
        <VStack>
          {courses.map((course, key) => {
            const creator = getCourseCreator(course);
            return <CourseCard course={course} creator={creator} key={key} />;
          })}
        </VStack>
      </Stack>
    </Container>
  );
};

export async function getServerSideProps(ctx: any) {
  return { props: { courseList: mockCourses } };
}

export default Courses;
