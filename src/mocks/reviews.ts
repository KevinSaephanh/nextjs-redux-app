import { Review } from "../models/Review";

export const mockReviews: Review[] = [
  {
    id: 1,
    courseId: 1,
    userId: 5,
    title: "Great course, totes recommendo!",
    description:
      "This course is awesome possum! I used to be a terrible trader, holding bags with my diamond hands. With Kevin's help, I am now able to make stonks!",
    rating: 5,
  },
  {
    id: 2,
    courseId: 1,
    userId: 2,
    title: "Better than other courses!",
    description: "Definitely not a scam! Now I only see green!",
    rating: 4.5,
  },
  {
    id: 3,
    courseId: 1,
    userId: 3,
    title: "Nice",
    description: "Nice",
    rating: 4,
  },
  {
    id: 4,
    courseId: 1,
    userId: 4,
    title: "Best teacher ever!",
    description: "This course is the bomb dotcom!",
    rating: 5,
  },
];
