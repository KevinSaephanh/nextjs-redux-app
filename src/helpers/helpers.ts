import { mockUsers } from "../mocks/users";
import { Course } from "../models/Course";

export const getCourseCreator = (course: Course) => {
  return mockUsers.find((u) => u.id === course.userId)?.username as string;
};

export const convertToTimeFormat = (time: number) => {
  const hrs = time / 60;
  const min = hrs - Math.floor(hrs);
  const roundedHrs = Math.floor(hrs);

  if (min === 0.5) return roundedHrs + 0.5;
  return roundedHrs;
};
