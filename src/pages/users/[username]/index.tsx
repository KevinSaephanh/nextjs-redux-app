import {
  Center,
  Box,
  useColorModeValue,
  Avatar,
  Heading,
  Stack,
  Badge,
  Button,
  Text,
  Link,
  Container,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";
import { SocialIcon } from "../../../components/ui/SocialIcon";
import { mockUsers, mockUser } from "../../../mocks/users";
import { User } from "../../../models/User";

interface ProfileCardProps {
  user: User;
}

const ProfileCard: FC<ProfileCardProps> = ({ user }) => {
  return (
    <Center py={6}>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar size={"xl"} src={user.avatar} alt={"Avatar Alt"} mb={4} pos={"relative"} />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {user.username}
        </Heading>
        <Text textAlign={"center"} color={useColorModeValue("gray.700", "gray.400")} px={3}>
          I am very cool beans, trust trust. I like to do stonks and play videogames.
        </Text>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Badge px={2} py={1} bg={useColorModeValue("gray.50", "gray.800")} fontWeight={"400"}>
            #art
          </Badge>
          <Badge px={2} py={1} bg={useColorModeValue("gray.50", "gray.800")} fontWeight={"400"}>
            #awesomepossum
          </Badge>
          <Badge px={2} py={1} bg={useColorModeValue("gray.50", "gray.800")} fontWeight={"400"}>
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
    </Center>
  );
};

const Profile: FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const username = router.query.username.toString();
    mockUsers.forEach((u) => {
      if (u.username.toUpperCase() === username.toUpperCase()) setUser(u);
    });
    setUser(mockUser);
  }, []);

  return <Container maxW={"7xl"}>{user ? <ProfileCard user={user} /> : null}</Container>;
};

export default Profile;
