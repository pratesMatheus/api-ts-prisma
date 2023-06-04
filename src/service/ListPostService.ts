import { IPostRepostory } from '../interfaces/IPostRepository';

class ListPostService {
  constructor(
    private PostRepository: IPostRepostory
  ){ }

  public async execute(id: number){
    const post = await this.PostRepository.list(id);

    return post;
  }
}

export { ListPostService };
