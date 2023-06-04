import { Request, Response } from 'express';

import { prisma } from '../database';

import { PostRepository } from '../repositories/PostRepository';

import { CreatePostService } from '../service/CreatePostService';
import { ListPostService } from '../service/ListPostService';
import { UpdatePostService } from '../service/UpdatePostService';
import { DeletePostService } from '../service/DeletePostService';

export default {
  async createPost(request: Request, response: Response){
    try {
      const { title, content, userId } = request.body;

      const createPost = new CreatePostService(new PostRepository());
      const post = await createPost.execute(title, content, userId);

      return response.json({
        error: false,
        message: 'Sucesso: Post cadastrado com sucesso!',
        post
      });

    } catch (error) {
      return response.json({message: error.message});
    }
  },

  async listPost(request: Request, response: Response){
    try {
      const { id } = request.params;

      const listPost = new ListPostService(new PostRepository());
      const post = await listPost.execute(Number(id));

      if(!post){
        return response.json({
          error: true,
          message: 'Erro: Post não encontrado!',
        });
      }

      return response.json({
        error: false,
        post
      });

    } catch (error) {
      return response.json({message: error.message});
    }
  },

  async updatePost(request: Request, response: Response){
    try {
      const { id, title, content } = request.body;

      const postExists = await prisma.post.findUnique({ where: { id: Number(id) } });

      if(!postExists){
        return response.json({
          error: true,
          message: 'Erro: Post não encontrado!',
        });
      }

      const updatePost = new UpdatePostService(new PostRepository());
      const post = await updatePost.execute(Number(id), title, content);

      return response.json({
        error: false,
        message: 'Sucesso: Post atualizado com sucesso',
        post
      });

    } catch (error) {
      return response.json({message: error.message});
    }
  },

  async deletePost(request: Request, response: Response){
    try {
      const { id } = request.params;

      const postExists = await prisma.post.findUnique({ where: { id: Number(id) } });

      if(!postExists){
        return response.json({
          error: true,
          message: 'Erro: Post não encontrado!',
        });
      }

      const deletePost = new DeletePostService(new PostRepository());
      const post = deletePost.execute(Number(id));

      return response.json({
        error: false,
        message: 'Sucesso: Post deletado com sucesso',
        post
      });

    } catch (error) {
      return response.json({message: error.message});
    }
  }
};
