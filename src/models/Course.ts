export interface Course {
  id: number;
  userId: number;
  title: string;
  description: string;
  image: string;
  rating: number;
  totalTime: number;
  totalLectures: number;
  students: number[];
  sections: CourseSection[];
}

export interface CourseSection {
  title: string;
  lectures: Lecture[];
}

export interface Lecture {
  title: string;
  src: string;
  time: number;
}
