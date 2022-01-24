import {
  Box,
  Heading,
  Flex,
  Accordion,
  AccordionItem,
  AccordionPanel,
  Text,
} from "@chakra-ui/react";
import { FC } from "react";
import { FaPlay } from "react-icons/fa";
import { Lecture, Course } from "../../models/Course";

interface SectionContentProps {
  lecture: Lecture;
  key: number;
}

const SectionContent: FC<SectionContentProps> = ({ lecture, key }) => {
  return (
    <Box key={key}>
      <Heading fontSize={{ base: "xl", md: "2xl" }} pb={"5px"}>
        {key + 1}. {lecture.title}
      </Heading>
      <Flex pl={"5px"}>
        <FaPlay fontSize={"12px"} style={{ margin: "auto 0" }} />
        <Text pl={"10px"}>{lecture.time} min</Text>
      </Flex>
    </Box>
  );
};

export const ContentList: FC<{ course: Course }> = ({ course }) => {
  const { sections } = course;

  return (
    <Accordion w={"100%"} maxW={"800px"} allowToggle allowMultiple>
      {sections.map((section, key) => {
        const { lectures, title } = section;

        return (
          <AccordionItem key={key} p={"10px 0 10px 5px"}>
            <Heading fontSize={"xl"} cursor={"pointer"}>
              Section {key + 1}: {title}
            </Heading>
            <AccordionPanel pb={4}>
              {lectures.map((lecture, index) => (
                <SectionContent lecture={lecture} key={index} />
              ))}
            </AccordionPanel>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
};
