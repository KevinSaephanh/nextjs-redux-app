import {
  Container,
  Stack,
  Heading,
  Input,
  Button,
  Textarea,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { Formik, Form, ErrorMessage } from "formik";
import { BsPerson } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FC, useState } from "react";
import { headingsFontSizes } from "../constants";

const Contact: FC = () => {
  const [successMessage, setSuccessMessage] = useState<boolean>(false);

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
      onSubmit={async (data, { setSubmitting, resetForm }) => {
        setSubmitting(true);
        setSubmitting(false);
        resetForm();
        setSuccessMessage(true);
        setTimeout(() => setSuccessMessage(false), 2000);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Stack
            w={"lg"}
            p={"6"}
            m={"0 auto"}
            mt={"25px"}
            spacing={{ base: 3, md: 5 }}
            boxShadow={"xl"}
            borderRadius={"md"}
          >
            <Heading
              color={"teal"}
              textAlign={"center"}
              fontSize={headingsFontSizes}
              fontWeight={"semibold"}
              lineHeight={1.1}
            >
              Contact Me
            </Heading>
            <FormControl isRequired>
              <FormLabel>Name</FormLabel>
              <InputGroup>
                <InputLeftElement children={<BsPerson />} />
                <Input name="name" placeholder="Enter username" />
                <ErrorMessage name="name" component="div" />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <InputGroup>
                <InputLeftElement children={<MdOutlineEmail />} />
                <Input name="email" type="email" placeholder="Enter email" />
                <ErrorMessage name="email" component="div" />
              </InputGroup>
            </FormControl>
            <FormControl isRequired>
              <FormLabel>Message</FormLabel>
              <InputGroup>
                <Textarea name="message" placeholder="Your Message" rows={6} resize="none" />
                <ErrorMessage name="message" component="div" />
              </InputGroup>
            </FormControl>
            <Button disabled={isSubmitting} type="submit">
              Send
            </Button>
            {successMessage ? <pre color="green">Your message has been sent!</pre> : null}
          </Stack>
        </Form>
      )}
    </Formik>
  );
};

export default Contact;
