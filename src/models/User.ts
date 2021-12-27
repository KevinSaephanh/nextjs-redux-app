export enum Themes {
  Light,
  Dark,
}

export interface User {
  id: number;
  username: string;
  email: string;
  avatar?: string;
  theme: Themes;
}
