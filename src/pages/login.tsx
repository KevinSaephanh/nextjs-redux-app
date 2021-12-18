import { Container, SimpleGrid, Stack, Heading, Input, Button } from "@chakra-ui/react";
import { Formik, Form, ErrorMessage } from "formik";
import { FC } from "react";

const Login: FC<{}> = () => {
  const validationSchema = {};

  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(data, { setSubmitting }) => {
        setSubmitting(true);
      }}
    >
      {({ errors, isSubmitting }) => (
        <Form>
          <Container
            as={SimpleGrid}
            columns={{ base: 1, md: 2 }}
            spacing={{ base: 10, lg: 32 }}
            py={{ base: 10, sm: 20, lg: 32 }}
            centerContent
          >
            <Stack p="6" spacing={{ base: 3, md: 5 }} boxShadow="xl" borderRadius="md">
              <Heading
                color="teal"
                textAlign="center"
                fontSize={{ base: "2xl", sm: "3xl", md: "4xl" }}
                fontWeight="semibold"
                lineHeight={1.1}
              >
                Login
              </Heading>
              <Input name="username" placeholder="Enter username" />
              <ErrorMessage name="username" component="div" />
              <Input name="password" type="password" placeholder="Enter password" />
              <ErrorMessage name="password" component="div" />
              <Button disabled={isSubmitting} type="submit">
                Login
              </Button>
              <pre>
                Don't have an account? <a href="/register">Register</a>
              </pre>
            </Stack>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default Login;