import { mockUsers } from "../mocks/users";
import { Course } from "../models/Course";

export const getCourseCreator = (course: Course) => {
  return mockUsers.find((u) => u.id === course.userId)?.username as string;
};
