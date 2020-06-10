export class Post {
  id: number;
  userId: number;
  title: string;
  description: string;
  content: string;
  status: string;
  created: Date;
  updated: Date;
  images: [];
  likes: number;
  comments: number;
}
