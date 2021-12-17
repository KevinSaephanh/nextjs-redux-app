import { FC } from "react";
import { Box, Container, Link, Stack, useColorModeValue, Text } from "@chakra-ui/react";
import { FaDiscord, FaFacebook, FaTwitch, FaTwitter } from "react-icons/fa";
import { SocialIcon } from "./SocialIcon";
import { Logo } from "../Logo/Logo";

export const Footer: FC = () => {
  return (
    <Box
      as="footer"
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
      mx="auto"
    >
      <Container as={Stack} py={2} justify={"center"} align={"center"}>
        <Box className="image-container">
          <Logo />
        </Box>
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
