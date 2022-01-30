import { FilterNames, FilterTerm } from "../models/FilterTerm";

export const filterExists = (property: FilterNames, filters: FilterTerm[]) => {
  return filters.find((f) => f.name === property);
};
