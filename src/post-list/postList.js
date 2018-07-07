import React, { Component } from "react";
import PostDetails from "./postDetails";
import PostData from "../data/posts.json";

class PostList extends Component {
    constructor(props) {
        super(props);
        this.handleDataCallback = this.handleDataCallback.bind(this);
    }

    handleDataCallback(msgTxt) {
        alert(msgTxt);
        console.log(this);
    }

    render() {
    return (
        <div>
        {PostData.map((item, index) => {
            return <PostDetails 
                    post={item} 
                    key={`post-list-key ${index}`} 
                    dataCallback={this.handleDataCallback}
                    />;
        })}
        </div>
    );
    }
}

export default PostList;
