import { Stack, Heading, Input, Button, Container, SimpleGrid } from "@chakra-ui/react";
import { ErrorMessage, Form, Formik } from "formik";
import { useRouter } from "next/router";
import { FC, useEffect } from "react";
import * as Yup from "yup";
import { register } from "../store/auth/asyncThunk";
import { useAppSelector, useAppDispatch } from "../store/hooks";

const registerSchema = {
  username: Yup.string()
    .min(5, "Username must contain at least 5 characters")
    .max(15, "Username length cannot exceed 15 characters")
    .matches(/^[a-z0-9]+$/i, "Username can only contain alphanumeric characters")
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email")
    .min(5, "Email must contain at least 5 characters")
    .max(30, "Email length cannot exceed 30 characters")
    .required("Email is required"),
  password: Yup.string()
    .min(5, "Password must contain at least 5 characters")
    .max(50, "Password length cannot exceed 50 characters")
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])/,
    //   "Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number, and 1 special character"
    // )
    .required("Password is required"),
  confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match"),
};

const Register: FC<{}> = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { isAuth } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (isAuth) router.push("/");
  }, []);

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "", confirmPassword: "" }}
      validationSchema={registerSchema}
      onSubmit={async (data, { setSubmitting }) => {
        setSubmitting(true);
        await dispatch(register(data));
        setSubmitting(false);
        router.push("/login");
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
