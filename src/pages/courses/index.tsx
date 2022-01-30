import { Container, Box, Heading, Stack, VStack } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { CourseCard } from "../../components/ui/CourseCard";
import { mockCourses } from "../../mocks/courses";
import { getCourseCreator } from "../../utils/getCourseCreator";
import { Course } from "../../models/Course";
import { updateFilters } from "../../utils/updateFilters";
import { FilterNames, FilterTerm } from "../../models/FilterTerm";
import { filterExists } from "../../utils/filterExists";
import { filterCourses } from "../../utils/filterCourses";

interface CoursesProps {
  courseList: Course[];
}

const Courses: FC<CoursesProps> = ({ courseList }) => {
  const [courses, setCourses] = useState<Course[]>(courseList);
  const [filters, setFilters] = useState<FilterTerm[]>([]);

  useEffect(() => {
    if (filters.length > 0) updateCoursesWithFilters();
  }, [filters]);

  const handleFilterChange = (property: FilterNames, values: string[]) => {
    // Add new filter if it doesn't exist
    if (!filterExists(property, filters)) {
      setFilters([...filters, { name: property, value: values }]);
      return;
    }

    const updatedFilters = updateFilters(property, values, filters);
    setFilters(updatedFilters);
  };

  const updateCoursesWithFilters = () => {
    // Use filters on course list
    const filteredCourses = filterCourses(filters, courses);
    setCourses(filteredCourses);
  };

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
