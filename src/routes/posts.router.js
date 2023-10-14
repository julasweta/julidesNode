import {Router} from "express";
import {postsController} from './../controllers/posts.controller.js';


const PostsRouter = Router();

PostsRouter.get("/", postsController.getPosts);

PostsRouter.post("/", postsController.createPosts);



export {PostsRouter};