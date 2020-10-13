import { combineReducers } from "redux";
import { postReducer } from "./postReducer";
import { PostsResponse } from "../actions";

export interface StoreState {
  posts: PostsResponse[];
}

export const reducer = combineReducers<StoreState>({
  posts: postReducer,
});
