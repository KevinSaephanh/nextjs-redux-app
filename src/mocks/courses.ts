import { Course } from "../models/Course";

export const mockCourses: Course[] = [
  {
    id: 1,
    userId: 1,
    author: "Kevcoolio",
    title: "Stonks 101: The Basics",
    description:
      "In this course, I teach you the very basics of stonks. This is designed for beginners with little to no knowledge",
    image: "https://cdn.pixabay.com/photo/2016/11/27/21/42/stock-1863880_960_720.jpg",
    rating: 5,
  },
  {
    id: 2,
    userId: 1,
    author: "SillyWilly",
    title: "Advanced Stonks: Trading Like an Alpha",
    description:
      "This course provides comprehensive material for you to get natty gains in the stonks market, no 🧢",
    image: "https://cdn.pixabay.com/photo/2016/12/13/22/15/chart-1905225_960_720.jpg",
    rating: 4.5,
  },
  {
    id: 3,
    userId: 1,
    author: "Otto",
    title: "Day Trading for Dummies",
    description:
      "Are you a dummy when it comes to day trading? Come through and learn the best techniques to see green in your portfolio.",
    image: "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_960_720.jpg",
    rating: 3.8,
  },
  {
    id: 4,
    userId: 1,
    author: "Kevcoolio",
    title: "Options Trading Masterclass",
    description:
      "Want to make BIG gains?!? Buy this course and I'll teach you how to potentially make incredible gains!",
    image: "https://cdn.pixabay.com/photo/2021/05/27/10/28/stock-market-6287711_960_720.jpg",
    rating: 5,
  },
];
