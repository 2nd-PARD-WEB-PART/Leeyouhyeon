import React from "react";
import styled from "styled-components";
import "./Posts.css"

const PostImage =styled.img`
    width: 300px;
    height: 300px;
    margin:0px 16px 0px 0px ;
`;

function Posts(props) {
    return (
      <div className="Posts">
            <div className="Posts-images">
                <PostImage src={props.info.postImage1} alt="포스트1"></PostImage>
                <PostImage src={props.info.postImage2} alt="포스트2"></PostImage>
                <PostImage style={{ margin: '0px' }} src={props.info.postImage3} alt="포스트3"></PostImage>
            </div>
      </div>
    );
  }
  
  export default Posts;