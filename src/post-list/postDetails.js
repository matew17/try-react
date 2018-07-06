import React, { Component } from 'react';

class PostDetails extends Component {
  render() {
    const {post} = this.props;

    return (
        <div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
    );
  }
}

export default PostDetails;
