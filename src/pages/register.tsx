import { Stack, Heading, Input, Button, Container, SimpleGrid } from "@chakra-ui/react";
import { ErrorMessage, Form, Formik } from "formik";
import { FC } from "react";

const Register: FC<{}> = () => {
  const validationSchema = {};

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "", confirmPassword: "" }}
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
                Register
              </Heading>
              <Input name="username" placeholder="Enter username" />
              <ErrorMessage name="username" component="div" />
              <Input name="email" type="email" placeholder="Enter email" />
              <ErrorMessage name="email" component="div" />
              <Input name="password" type="password" placeholder="Enter password" />
              <ErrorMessage name="password" component="div" />
              <Input name="confirmPassword" type="password" placeholder="Confirm password" />
              <ErrorMessage name="confirmPassword" component="div" />
              <Button disabled={isSubmitting} type="submit">
                Register
              </Button>
              <pre>
                Already have an account? <a href="/login">Login</a>
              </pre>
            </Stack>
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default Register;
