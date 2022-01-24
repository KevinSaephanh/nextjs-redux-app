import { Course, CourseSection, Lecture } from "../models/Course";

export const mockLectures: Lecture[] = [
  {
    title: "How to Stonks",
    src: "https://www.youtube.com/embed/8E1M8f3PYQ8",
    time: 25,
  },
  {
    title: "Introduction to Stonks Terms",
    src: "https://www.youtube.com/embed/if-2M3K1tqk",
    time: 30,
  },
  {
    title: "Using Colors to Read Market",
    src: "https://www.youtube.com/embed/F6Ku4i6hGfI",
    time: 15,
  },
  {
    title: "Technical Analysis for Dummies",
    src: "https://www.youtube.com/embed/fe1Cb_7wio4",
    time: 8,
  },
  {
    title: "Full Due Diligence",
    src: "https://www.youtube.com/embed/CAB3BHzrzmE",
    time: 12,
  },
  {
    title: "Personal Trading Examples",
    src: "https://www.youtube.com/embed/qzuq9F9ZLO8",
    time: 13,
  },
  {
    title: "Time to Get Gains!",
    src: "https://www.youtube.com/embed/GBAHnaYkJZE",
    time: 7,
  },
];

export const mockCourseSections: CourseSection[] = [
  {
    title: "Introduction to Stonks",
    lectures: mockLectures,
  },
  {
    title: "Basic Terms",
    lectures: mockLectures,
  },
  {
    title: "Technical Analysis",
    lectures: mockLectures,
  },
  {
    title: "Due Diligence",
    lectures: mockLectures,
  },
  {
    title: "Putting it all Together",
    lectures: mockLectures,
  },
];

export const mockCourses: Course[] = [
  {
    id: 1,
    userId: 1,
    title: "Stonks 101: The Basics",
    description:
      "In this course, I teach you the very basics of stonks. This is designed for beginners with little to no knowledge",
    image: "https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_960_720.jpg",
    rating: 5,
    students: [2, 3, 4, 5],
    sections: mockCourseSections,
  },
  {
    id: 2,
    userId: 2,
    title: "Advanced Stonks: Trading Like an Alpha",
    description:
      "This course provides comprehensive material for you to get natty gains in the stonks market, no 🧢",
    image: "https://cdn.pixabay.com/photo/2016/12/13/22/15/chart-1905225_960_720.jpg",
    rating: 4.5,
    students: [1, 3, 4],
    sections: mockCourseSections,
  },
  {
    id: 3,
    userId: 2,
    title: "Day Trading for Dummies",
    description:
      "Are you a dummy when it comes to day trading? Come through and learn the best techniques to see green in your portfolio.",
    image: "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg",
    rating: 3.8,
    students: [1, 3, 5],
    sections: mockCourseSections,
  },
  {
    id: 4,
    userId: 4,
    title: "Options Trading Masterclass",
    description:
      "Want to make BIG gains?!? Buy this course and I'll teach you how to potentially make incredible gains!",
    image: "https://cdn.pixabay.com/photo/2021/05/27/10/28/stock-market-6287711_960_720.jpg",
    rating: 5,
    students: [1, 2, 3],
    sections: mockCourseSections,
  },
];
