import { Post } from '@prisma/client';


/* type Post = {
  id: number;
  title: string | null;
  content: string;
  userId: number;
} */

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IPostRepostory {
  create(title: string, content: string, userId: number): Promise<Post>;
  list(id: number): Promise<Post>;
  update(id: number, title: string, content: string): Promise<Post>;
  delete(id: number): Promise<Post>;
}
