import {
  Container,
  SimpleGrid,
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
                Contact Me
              </Heading>
              <FormControl isRequired>
                <FormLabel color="teal">Name</FormLabel>
                <InputGroup>
                  <InputLeftElement children={<BsPerson />} />
                  <Input name="name" placeholder="Enter username" />
                  <ErrorMessage name="name" component="div" />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel color="teal">Email</FormLabel>
                <InputGroup>
                  <InputLeftElement children={<MdOutlineEmail />} />
                  <Input name="email" type="email" placeholder="Enter email" />
                  <ErrorMessage name="email" component="div" />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <FormLabel color="teal">Message</FormLabel>
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
          </Container>
        </Form>
      )}
    </Formik>
  );
};

export default Contact;
