import { Center, Stack, useColorModeValue, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { Course } from "../../models/Course";

interface CourseCardProps {
  course: Course;
}

export const CourseCard: FC<CourseCardProps> = ({ course }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/courses/${course.title}`);
  };

  return (
    <Center py={6} onClick={handleClick}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "550px", lg: "650px" }}
        height={{ sm: "476px", md: "18rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={1} bg="blue.200" maxW={"40%"}>
          <Image objectFit="cover" boxSize="100%" src={course.image} />
        </Flex>
        <Stack flex={1} p={1} pt={2}>
          <Heading fontSize={"2xl"} mb={"auto"} mt={"0"}>
            {course.title}
          </Heading>
          <Text color={useColorModeValue("gray.700", "gray.400")}>{course.author}</Text>
          <Text color={useColorModeValue("gray.700", "gray.400")}>{course.description}</Text>
        </Stack>
      </Stack>
    </Center>
  );
};
