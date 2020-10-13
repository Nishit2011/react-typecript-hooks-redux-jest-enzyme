import { getPosts, deletePostById } from "./posts";

export enum ActionTypes {
  getAllPosts,
  errorAllPosts,
  postsRequest,
  deletePostById,
}
