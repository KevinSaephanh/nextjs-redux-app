import { FC } from "react";
import { Box } from "@chakra-ui/react";
import { Navbar } from "./Navbar/Navbar";
import { Footer } from "./Footer/Footer";

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Navbar />
      <Box
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
