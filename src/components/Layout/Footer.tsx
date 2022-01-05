import { FC } from "react";
import { Box, Container, Link, Stack, useColorModeValue, Text } from "@chakra-ui/react";
import { FaDiscord, FaFacebook, FaTwitch, FaTwitter } from "react-icons/fa";
import { SocialIcon } from "../ui/SocialIcon";

export const Footer: FC = () => {
  return (
    <Box as="footer" bg={useColorModeValue("gray.500", "gray.900")} mx="auto" w="100%">
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Stack direction={"row"} spacing={6}>
          <Link href={"#"}>Home</Link>
          <Link href={"#"}>About</Link>
          <Link href={"#"}>Blog</Link>
          <Link href={"#"}>Contact</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text>© 2021 Kevin Saephanh</Text>
          <Stack direction={"row"} spacing={6}>
            <SocialIcon label={"Discord"} href={"#"}>
              <FaDiscord />
            </SocialIcon>
            <SocialIcon label={"Twitch"} href={"#"}>
              <FaTwitch />
            </SocialIcon>
            <SocialIcon label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialIcon>
            <SocialIcon label={"Facebook"} href={"#"}>
              <FaFacebook />
            </SocialIcon>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
};
