import { Course } from "../models/Course";
import { FilterNames, FilterTerm } from "../models/FilterTerm";

export const filterCourses = (filters: FilterTerm[], courses: Course[]) => {
  let filteredCourses: Course[] = [...courses];

  filters.forEach((f) => {
    switch (f.name) {
      case FilterNames.Title:
        filteredCourses = courses.filter((c) => c.title.startsWith(f.value[0]));
        break;
      case FilterNames.Rating:
        filteredCourses = courses.filter((c) => c.rating >= +f.value[0]);
        break;
      case FilterNames.Categories:
        filteredCourses = courses.filter((c) => c.category === f.value);
        break;
      default:
        break;
    }
  });

  return filteredCourses;
};
