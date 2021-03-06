import React, { useEffect } from "react";
import { Button, Grid } from "@material-ui/core";
import { connect } from "react-redux";

import { getPosts, PostsResponse, deletePostById } from "../actions";
import { StoreState } from "../reducers/index";

interface PostsProps {
  posts: PostsResponse[];
  getPosts: Function;
  deletePostById: typeof deletePostById;
}

interface Item {
  id: number;
  title: string;
}

const Posts = ({
  posts,
  getPosts,
  deletePostById,
}: PostsProps): JSX.Element => {
  const renderPosts = ({ id, title }: Item): JSX.Element => {
    return (
      <div key={id} onClick={() => deletePostById(id)}>
        {title}
      </div>
    );
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={5}>
          <Button
            color="primary"
            variant="contained"
            onClick={() => getPosts()}
          >
            {" "}
            Click for Posts
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={5}>
          {<div>{posts.map((item) => renderPosts(item))}</div>}
        </Grid>
      </Grid>
    </div>
  );
};
const mapStateToProps = ({ posts }: StoreState): { posts: PostsResponse[] } => {
  return {
    posts,
  };
};
export default connect(mapStateToProps, { getPosts, deletePostById })(Posts);
