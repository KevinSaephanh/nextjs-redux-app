import {
  Box,
  useColorModeValue,
  Avatar,
  Heading,
  Stack,
  Badge,
  Button,
  Text,
  Container,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { FC } from "react";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";
import { SocialIcon } from "../../components/ui/SocialIcon";
import { mockCourses } from "../../mocks/courses";
import { mockUsers, mockUser } from "../../mocks/users";
import { User } from "../../models/User";
import { getCourseCreator } from "../../utils/getCourseCreator";
import {
  badgeDarkValue,
  badgeLightValue,
  headingsFontSizes,
  textDarkValue,
  textLightValue,
} from "../../constants";
import { CourseCard } from "../../components/ui/Course/CourseCard";

interface ProfileCardProps {
  user: User;
}

const ProfileCard: FC<ProfileCardProps> = ({ user }) => {
  return (
    <Box
      maxW={"330px"}
      w={"full"}
      bg={useColorModeValue("white", "gray.900")}
      boxShadow={"2xl"}
      rounded={"lg"}
      p={8}
      textAlign={"center"}
      className="profile-card card"
    >
      <Avatar size={"xl"} src={user.avatar} alt={"Avatar Alt"} mb={4} pos={"relative"} />
      <Heading fontSize={"2xl"} fontFamily={"body"} pb={"10px"}>
        {user.username}
      </Heading>
      <Text textAlign={"center"} color={useColorModeValue(textLightValue, textDarkValue)} px={3}>
        I am very cool beans, trust trust. I like to do stonks and play videogames.
      </Text>

      <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
        <Badge
          px={2}
          py={1}
          bg={useColorModeValue(badgeLightValue, badgeDarkValue)}
          fontWeight={"400"}
        >
          #art
        </Badge>
        <Badge
          px={2}
          py={1}
          bg={useColorModeValue(badgeLightValue, badgeDarkValue)}
          fontWeight={"400"}
        >
          #awesomepossum
        </Badge>
        <Badge
          px={2}
          py={1}
          bg={useColorModeValue(badgeLightValue, badgeDarkValue)}
          fontWeight={"400"}
        >
          #bombdotcom
        </Badge>
      </Stack>

      <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
        <SocialIcon label="LinkedIn" href="https://www.linkedin.com/in/kevin-saephanh/">
          <FaLinkedin />
        </SocialIcon>
        <SocialIcon label="Github" href="https://github.com/KevinSaephanh">
          <FaGithub />
        </SocialIcon>
        <SocialIcon label="Portfolio" href="https://kevinsaephanh.com">
          <FaGlobe />
        </SocialIcon>
      </Stack>

      <Stack mt={8} direction={"row"} spacing={4}>
        <Button
          flex={1}
          fontSize={"sm"}
          rounded={"full"}
          _focus={{
            bg: "gray.200",
          }}
        >
          Message
        </Button>
        <Button
          flex={1}
          fontSize={"sm"}
          rounded={"full"}
          bg={"blue.400"}
          color={"white"}
          boxShadow={
            "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
          }
          _hover={{
            bg: "blue.500",
          }}
          _focus={{
            bg: "blue.500",
          }}
        >
          Follow
        </Button>
      </Stack>
    </Box>
  );
};

const Profile: FC = (props) => {
  const user = props as User;
  const courses = mockCourses.sort(() => Math.random() - Math.random()).slice(0, 3);

  return (
    <>
      <Stack
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
        alignItems={"top"}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          {user ? <ProfileCard user={user} /> : null}
        </Stack>

        <Flex flex={1} justify={"center"} align={"center"} position={"relative"}>
          <VStack spacing={4} align="stretch">
            <Text fontSize={headingsFontSizes}>Courses Enrolled</Text>
            {courses.map((course, key) => {
              const creator = getCourseCreator(course);
              return <CourseCard course={course} creator={creator} key={key} />;
            })}
          </VStack>
        </Flex>
      </Stack>
    </>
  );
};

export async function getServerSideProps(ctx: any) {
  const username = ctx.params.username as string;
  let user = mockUser;
  mockUsers.forEach((u) => {
    if (u.username.toUpperCase().includes(username.toUpperCase())) user = u;
  });
  return { props: user };
}

export default Profile;
