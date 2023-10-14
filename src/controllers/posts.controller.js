
import {postsService} from './../sevices/posts.services.js';
import {ApiError} from './../errors/api.error.js';

class PostsController {
  async getPosts(
    req,
    res,
    next,
  ) {
    try {
      const posts = await postsService.getPosts();
      return res.json(posts);
    } catch (error) {
      throw new ApiError("getPosts error",);
    }
  }

  async createPosts(
    req,
    res,
    next,
  ) {
    try {
      const data = req.body;
      const posts = await postsService.createPosts(data);
      return res.json(posts);
    } catch (error) {
      next(error);
    }
  }


}

export const postsController = new PostsController();