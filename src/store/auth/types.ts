export interface RegisterInput {
  username: string;
  email: string;
  password: string;
}

export interface LoginInput {
  username: string;
  password: string;
}

export interface UserResponse {}

export interface User {
  id: string;
  username: string;
  email: string;
}
