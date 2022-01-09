import { FC, useEffect } from "react";
import { Box } from "@chakra-ui/react";
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
