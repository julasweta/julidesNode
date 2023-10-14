
import {postsRepository} from './../repositories/posts.repository.js';

class PostsService {
  async getPosts() {
    return await postsRepository.getPosts();
  }

  async createPosts(data) {
    return await postsRepository.createPosts(data);
  }


}

export const postsService = new PostsService();