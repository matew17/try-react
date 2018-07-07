import React, { Component } from "react";
import PostDetails from "./postDetails";
import PostData from "../data/posts.json";

class PostList extends Component {
  render() {
    return (
      <div>
        {PostData.map((item, index) => {
          return <PostDetails post={item} key={`post-list-key ${index}`} />;
        })}
      </div>
    );
  }
}

export default PostList;
