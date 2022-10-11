/** Interfaces */
export interface UserInterface {
  username: string;
  email: string;
  bio: string;
  isAdmin: boolean;
  id: string;
}

export interface DataUserInterface {
  username: string;
  email: string;
  bio: string;
  password: string;
  isAdmin: boolean;
  _id: string;
}

export interface Post {
  userId: string;
  userName: string;
  description: string;
  img?: string;
}
