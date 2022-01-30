import { FilterNames, FilterTerm } from "../models/FilterTerm";

export const updateFilters = (property: FilterNames, values: string[], filters: FilterTerm[]) => {
  const filterEl = filters.find((f) => f.name === property) as FilterTerm;
  const index = filters.indexOf(filterEl);

  // Replace all of the element's values
  filterEl.value.splice(0, filterEl.value.length, ...values);

  // Update filters element with new object above
  filters.splice(index, 1, filterEl);
  return filters;
};
