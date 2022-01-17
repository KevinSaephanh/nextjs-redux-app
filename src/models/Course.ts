export interface Course {
  id: number;
  userId: number;
  author: string;
  title: string;
  description: string;
  image: string;
  rating: number;
  sections: CourseSection[];
}

export interface CourseSection {
  title: string;
  videos: Video[];
}

export interface Video {
  title: string;
  src: string;
  time: number;
}
