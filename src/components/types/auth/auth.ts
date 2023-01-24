export interface User {
  name: string;
  email: string;
  password: string;
  avatar: string;
}

export interface UserState {
  user: User | {};
  isLoading: boolean;
  isError: any;
  isSuccess: boolean;
}
export interface CreateUserWithForm {
  user: { name: string; email: string; password: string };
  avatar: File | null;
}

export interface Image {
  originalname: string;
  filename: string;
  location: string;
}
export interface Token {
  access_token: string;
  refresh_token: string;
}
export interface AuthState {
  token: Token | null;
  isLoading: boolean;
  isError: any;
  isSuccess: boolean;
  currentUser: CurrentUser | '';
}
export interface CurrentUser {
  name: string;
  email: string;
  password: string;
  avatar: string;
  id: number | null;
  role: string;
}

export interface CheckEmail {
  isAvailable: boolean;
}
export interface PreUser {
  currentUser: CurrentUser | string;
}
