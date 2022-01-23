import { Stack, Heading, Input, Button, Container, SimpleGrid } from "@chakra-ui/react";
import { ErrorMessage, Form, Formik } from "formik";
import { useRouter } from "next/router";
import { FC, useEffect, useRef } from "react";
import * as Yup from "yup";
import { headingsFontSizes } from "../constants";
import { register } from "../store/auth/api";
import { useAppSelector, useAppDispatch } from "../store/hooks";

const registerSchema = Yup.object().shape({
  username: Yup.string()
    .matches(
      /^([a-zA-Z0-9_-]){5,15}$/,
      "Username length must be between 5-15 characters and cannot contain special characters or spaces"
    )
    .required("Username is required"),
  email: Yup.string()
    .email("Invalid email")
    .min(5, "Email must contain at least 5 characters")
    .max(30, "Email length cannot exceed 30 characters")
    .required("Email is required"),
  password: Yup.string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
      "Password must contain at least 8 characters, 1 uppercase, 1 lowercase,1 number and 1 special case character"
    )
    .required("Password is required"),
  confirmPassword: Yup.string().oneOf([Yup.ref("password"), null], "Passwords must match"),
});

const Register: FC<{}> = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const usernameInput = useRef<HTMLInputElement | null>(null);
  const { user } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (user) router.push("/");
    usernameInput.current?.focus();
  }, []);

  return (
    <Formik
      initialValues={{ username: "", email: "", password: "", confirmPassword: "" }}
      validationSchema={registerSchema}
      onSubmit={async (data, { setSubmitting }) => {
        setSubmitting(true);
        await dispatch(register(data));
        setSubmitting(false);
        router.push("/");
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
                fontSize={headingsFontSizes}
                fontWeight="semibold"
                lineHeight={1.1}
              >
                Register
              </Heading>
              <Input name="username" placeholder="Enter username" ref={usernameInput} />
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
