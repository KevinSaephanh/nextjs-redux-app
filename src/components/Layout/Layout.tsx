import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box
        className="content-wrapper"
        as="main"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        mt={8}
        mx="auto"
        w="100%"
      >
        {children}
      </Box>
      <Footer />
    </>
  );
};
