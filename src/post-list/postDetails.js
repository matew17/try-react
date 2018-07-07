import React, { Component } from "react";

class PostDetails extends Component {
  constructor(props) {
    super(props);
    this.titleWasClicked = this.titleWasClicked.bind(this);
  }

  titleWasClicked(event) {
    event.preventDefault();
    console.log(this.props);
    alert("Title was clicked!!!");
  }

  render() {
    const { post } = this.props;

    return (
      <div>
        <h3 onClick={this.titleWasClicked}>{post.title}</h3>
        <p>{post.content}</p>
      </div>
    );
  }
}

export default PostDetails;
