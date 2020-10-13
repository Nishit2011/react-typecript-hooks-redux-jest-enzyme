import React, { useEffect } from "react";
import { Button, Grid } from "@material-ui/core";
import { connect } from "react-redux";

import { getPosts, PostsResponse } from "../actions/index";
import { StoreState } from "../reducers/index";

interface PostsProps {
  posts: PostsResponse[];
  getPosts(): any;
}

interface Item{
  id: number,
  title: string
}

const Posts = ({ posts, getPosts }: PostsProps): JSX.Element => {
  const renderPosts = ({id, title}: Item): JSX.Element => {
    return <li key={id}>{title}</li>;
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
          {<ul>{posts.map((item) => renderPosts(item))}</ul>}
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
export default connect(mapStateToProps, { getPosts })(Posts);
