import { IPostRepostory } from '../interfaces/IPostRepository';

class CreatePostService {
  constructor(
    private PostRepository: IPostRepostory
  ){ }

  public async execute(title: string, content: string, userId: number){
    const post = await this.PostRepository.create(title, content, userId);

    return post;
  }
}

export { CreatePostService };
