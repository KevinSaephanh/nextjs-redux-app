import { StarIcon } from "@chakra-ui/icons";
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

  const convertToTimeFormat = (time: number) => {
    const hrs = time / 60;
    const min = hrs - Math.floor(hrs);
    const roundedHrs = Math.floor(hrs);

    if (min === 0.5) return roundedHrs + 0.5;
    return roundedHrs;
  };

  return (
    <Center py={2} onClick={handleClick}>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: "100%", md: "550px", lg: "650px" }}
        height={{ sm: "500px", md: "17rem" }}
        direction={{ base: "column", md: "row" }}
        bg={useColorModeValue("white", "gray.900")}
        ml={{ base: 0, md: 20 }}
        boxShadow={"2xl"}
        cursor={"pointer"}
        className="card"
      >
        <Flex flex={1} bg="blue.200" maxW={"100%"}>
          <Image objectFit="cover" boxSize="100%" src={course.image} />
        </Flex>
        <Stack flex={1} p={5} mb={"auto"} mt={"0"}>
          <Heading fontSize={"2xl"}>{course.title}</Heading>
          <Text color={useColorModeValue(textLightValue, textDarkValue)}>{creator}</Text>
          <Text color={useColorModeValue(textLightValue, textDarkValue)}>{course.description}</Text>
          <StarIcon color={"gold"} fontSize={18} />
          <Text color={useColorModeValue(textLightValue, textDarkValue)}>
            {convertToTimeFormat(course.totalTime)} hours &emsp; {course.totalLectures} lectures
          </Text>
        </Stack>
      </Stack>
    </Center>
  );
};
