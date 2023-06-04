import { IPostRepostory } from '../interfaces/IPostRepository';

class DeletePostService {
  constructor(
    private PostRepository: IPostRepostory
  ){ }

  public async execute(id: number){
    const post = await this.PostRepository.delete(id);

    return post;
  }
}

export { DeletePostService };
