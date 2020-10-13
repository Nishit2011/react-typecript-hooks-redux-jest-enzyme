import {
  getPosts,
  PostsResponse,
  GetPostsSuccessInterface,
  ActionTypes,
  DeletePostByIdInterface,
} from "../actions";

export const postReducer = (
  state: PostsResponse[] = [],
  action: GetPostsSuccessInterface | DeletePostByIdInterface
) => {
  switch (action.type) {
    case ActionTypes.getAllPosts:
      return action.payload;
    case ActionTypes.deletePostById:
      return state.filter((post: PostsResponse) => post.id !== action.payload);
    default:
      return state;
  }
};
