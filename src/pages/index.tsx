import { Container, Stack, Heading, Button, Text, Box, useColorModeValue } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Index = () => {
  const router = useRouter();

  return (
    <Container maxW={"3xl"}>
      <Stack as={Box} textAlign={"center"} spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
        <Heading
          fontWeight={600}
          fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          Make money from <br />
          <Text as={"span"} color={"green.400"}>
            stonks
          </Text>
        </Heading>
        <Text color={useColorModeValue("gray.900", "gray.400")}>
          Signup for Kevin's awesome possum not-a-scam get-rich-quick courses today! In these
          courses, you'll learn the tips and tricks of getting big gains to make your bank account
          swole! No cheat codes needed, all natty profits, and up arrows galore trust trust!
        </Text>
        <Stack
          direction={"column"}
          spacing={3}
          align={"center"}
          alignSelf={"center"}
          position={"relative"}
        >
          <Button
            colorScheme={"green"}
            bg={"green.400"}
            rounded={"full"}
            px={6}
            _hover={{
              bg: "green.500",
            }}
            onClick={() => router.push("/courses")}
          >
            Get Started
          </Button>
          <Button
            variant={"link"}
            colorScheme={"blue"}
            size={"sm"}
            onClick={() => router.push("/about")}
          >
            Learn more
          </Button>
        </Stack>
      </Stack>
    </Container>
  );
};

export default Index;
