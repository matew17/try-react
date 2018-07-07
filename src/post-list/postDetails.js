import React, { Component } from "react";

class PostDetails extends Component {
  constructor(props) {
    super(props);
    this.titleWasClicked = this.titleWasClicked.bind(this);
    this.toggleContent = this.toggleContent.bind(this);
    this.state = {
      showContent : true
    }
  }

  titleWasClicked(event) {
    event.preventDefault();
    // console.log(this.props);
    // alert("Title was clicked!!!");
    const { dataCallback } = this.props;
    if (dataCallback) {
      dataCallback("Hello World!!");
    }
  }

  toggleContent(event) {
    event.preventDefault();
    this.setState({
      showContent : !this.state.showContent
    });
  }

  render() {
    const { post } = this.props;
    const { showContent } = this.state;
    return (
      <div>
        <h3 onClick={this.titleWasClicked}>{post.title}</h3>
        {showContent === true ?
          <p>{post.content}</p> :
          ''
        }
        <button onClick={this.toggleContent}>Toggle content!!</button>
      </div>
    );
  }
}

export default PostDetails;
