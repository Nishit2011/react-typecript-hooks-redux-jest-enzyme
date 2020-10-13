import { ActionTypes } from "../actions/types";
import { getPosts, PostsResponse, GetPostsSuccessInterface } from "../actions";

export const postReducer = (
  state: PostsResponse[] = [],
  action: GetPostsSuccessInterface
) => {
  switch (action.type) {
    case ActionTypes.getAllPosts:
      return action.payload;
    default:
      return state;
  }
};
