import { FC, useEffect } from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";
import { useAppDispatch } from "../../store/hooks";
import { setCurrentUser } from "../../store/auth/api";

export const Layout: FC = ({ children }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const setUser = async () => {
      await dispatch(setCurrentUser());
    };
    setUser();
  }, []);

  return (
    <Flex className="content-wrapper" flexDirection={"column"} mx={"auto"} w={"100%"}>
      <Navbar />
      <Container as="main" maxW={"7xl"} mb={25} h={"100%"} centerContent>
        {children}
      </Container>
      <Footer />
    </Flex>
  );
};
