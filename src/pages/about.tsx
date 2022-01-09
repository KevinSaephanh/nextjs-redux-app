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
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Text color={"gray.500"}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In non ex est. Quisque rhoncus
            ut ipsum quis porta. Vivamus a est vel ipsum mattis posuere et vitae erat. Class aptent
            taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed metus tellus, blandit et
            malesuada a, rhoncus sit amet nibh. Suspendisse vitae luctus erat. Cras tincidunt nisl
            nisl, nec ultrices nisl pretium vitae. Donec convallis aliquam nibh quis efficitur.
            Morbi quam mi, venenatis non mauris sed, congue auctor turpis. Sed quis lorem vel nulla
            sagittis mollis. Donec lorem tortor, facilisis in neque a, suscipit scelerisque elit.
            <br />
            <br />
            Nulla commodo neque ac mollis condimentum. Integer vitae dapibus odio. Pellentesque a
            vestibulum dolor, ac fermentum leo. Nulla molestie eleifend magna, a consectetur dolor
            pulvinar sit amet. Nam suscipit venenatis leo consectetur iaculis. Mauris placerat id
            enim nec ornare. Morbi aliquet maximus porttitor. Nullam nec condimentum tortor, eu
            tincidunt diam. Maecenas id malesuada arcu, vel mattis tortor.
          </Text>
        </Stack>
      </Stack>
    </Container>
  );
};

export default About;
