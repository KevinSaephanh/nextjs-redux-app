import { Center, Stack, useColorModeValue, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC } from "react";
import { textDarkValue, textLightValue } from "../../constants";
import { Course } from "../../models/Course";

interface CourseCardProps {
  course: Course;
  creator: string;
}

export const CourseCard: FC<CourseCardProps> = ({ course, creator }) => {
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
        height={{ sm: "500px", md: "17rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        cursor={"pointer"}
        className="card"
      >
        <Flex flex={1} bg="blue.200" maxW={"100%"}>
          <Image objectFit="cover" boxSize="100%" src={course.image} />
        </Flex>
        <Stack flex={1} p={5}>
          <Heading fontSize={"2xl"} mb={"auto"} mt={"0"}>
            {course.title}
          </Heading>
          <Text color={useColorModeValue(textLightValue, textDarkValue)}>{creator}</Text>
          <Text color={useColorModeValue(textLightValue, textDarkValue)}>{course.description}</Text>
        </Stack>
      </Stack>
    </Center>
  );
};
