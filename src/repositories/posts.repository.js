import {Posts} from "../models/Posts.models.js";

class PostsRepository {
  async getPosts() {
    const posts = await Posts.find();
    return posts;
  }

  async createPosts(data) {
    const posts = await Posts.create(data);
    return posts;
  }



}

export const postsRepository = new PostsRepository();