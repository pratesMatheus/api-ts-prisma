import { IPostRepostory } from '../interfaces/IPostRepository';
import { Post } from '@prisma/client';
import { prisma } from '../database';

class PostRepository implements IPostRepostory {
  public async create(title: string, content: string, userId: number): Promise<Post> {
    const post = await prisma.post.create({
      data: {
        title,
        content,
        userId
      }
    });

    return post;
  }

  public async list(id: number): Promise<Post> {
    const post = await prisma.post.findUnique({ where: { id } });

    return post;
  }

  public async update(id: number, title: string, content: string): Promise<Post> {
    const post = await prisma.post.update({
      where: {
        id
      },
      data: {
        title,
        content
      }
    });

    return post;
  }

  public async delete(id: number): Promise<Post> {
    const post = await prisma.post.delete({
      where: {
        id
      }
    });

    return post;
  }
}

export { PostRepository };
