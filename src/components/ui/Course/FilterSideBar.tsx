import { StarIcon } from "@chakra-ui/icons";
import { Box, Checkbox, Flex, Input, Stack, Text } from "@chakra-ui/react";
import { FC, useEffect, useState } from "react";
import { Category } from "../../../models/Course";
import { FilterTerm, FilterNames } from "../../../models/FilterTerm";
import { filterExists } from "../../../utils/filterExists";
import { updateFilters } from "../../../utils/updateFilters";

interface FilterSideBarProps {
  updateCoursesWithFilters: Function;
}

export const FilterSideBar: FC<FilterSideBarProps> = ({ updateCoursesWithFilters }) => {
  const [filters, setFilters] = useState<FilterTerm[]>([]);

  useEffect(() => {
    console.log(filters);
    if (filters.length > 0) updateCoursesWithFilters(filters);
  }, [filters]);

  const handleFilterChange = (property: FilterNames, values: string[]) => {
    // Add new filter if it doesn't exist
    if (!filterExists(property, filters)) {
      const newFilter: FilterTerm = { name: property, value: values };
      setFilters([...filters, newFilter]);
      return;
    }

    const updatedFilters = updateFilters(property, values, filters);
    setFilters(updatedFilters);
  };

  return (
    <Box className="filter-sidebar">
      <Stack>
        <Text fontWeight={"bold"}>Categories</Text>
        {Object.keys(Category).map((c) => {
          const categoryName = Category[c as keyof typeof Category];

          return (
            <Checkbox
              colorScheme="teal"
              onClick={(e) => handleFilterChange(FilterNames.Categories, [])}
            >
              {categoryName}
            </Checkbox>
          );
        })}
      </Stack>

      <Stack>
        <Text fontWeight={"bold"}>Rating</Text>
        {[...Array(4)].map((value, index, array) => {
          return (
            <Flex>
              <StarIcon color={"gold"} mr={2} />
              {/* {array.length - index} */}
              <Text lineHeight={5}>& up</Text>
            </Flex>
          );
        })}
      </Stack>

      <Stack>
        <Text fontWeight={"bold"}>Course</Text>
        <Input
          placeholder="Course title"
          onChange={(e) => handleFilterChange(FilterNames.Title, [e.target.value])}
        />
      </Stack>
    </Box>
  );
};
