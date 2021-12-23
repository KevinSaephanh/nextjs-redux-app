import { Container, Heading, Text, Stack } from "@chakra-ui/react";
import { FC } from "react";

const About: FC = () => {
  return (
    <Container>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}>
          <Text
            as={"span"}
            position={"relative"}
            _after={{
              content: "''",
              width: "full",
              height: "30%",
              position: "absolute",
              bottom: 1,
              left: 0,
              bg: "teal.400",
              zIndex: -1,
            }}
          >
            Write once,
          </Text>
          <br />
          <Text as={"span"} color={"teal.400"}>
            use everywhere!
          </Text>
        </Heading>
      </Stack>
    </Container>
  );
};

export default About;
