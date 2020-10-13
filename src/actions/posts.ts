import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./types";
import baseURL from "./api";

export interface PostsResponse {
  id: number;
  title: string;
  body: string;
}

export interface GetPostsSuccessInterface {
  type: ActionTypes.getAllPosts;
  payload: PostsResponse[];
}

export interface DeletePostByIdInterface {
  type: ActionTypes.deletePostById;
  payload: number;
}

export const getPostsRequest = () => {
  return {
    type: ActionTypes.postsRequest,
  };
};

export const getPostsSuccess = (posts: PostsResponse[]) => {
  return {
    type: ActionTypes.getAllPosts,
    payload: posts,
  };
};

export const getPostsError = (errMsg: string) => {
  return {
    type: ActionTypes.errorAllPosts,
    payload: errMsg,
  };
};

export const getPosts = () => async (dispatch: Dispatch) => {
  dispatch(getPostsRequest());
  await baseURL
    .get<PostsResponse[]>("/posts")
    .then((response) => {
      dispatch(<GetPostsSuccessInterface>getPostsSuccess(response.data));
    })
    .catch((error) => {
      const errMsg = error.message;
      dispatch(getPostsError(errMsg));
    });
};

export const deletePostById = (id: number): DeletePostByIdInterface => {
  return {
    type: ActionTypes.deletePostById,
    payload: id,
  };
};
