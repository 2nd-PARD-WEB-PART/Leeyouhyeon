import React from "react";
import styled from "styled-components";
import "./css/Posts.css"

import { useContext  } from "react";
import { ProfileContext } from './ProfileContext';

const PostImage =styled.img`
    width: 300px;
    height: 300px;
    margin:0px 16px 0px 0px ;
`;

function Posts() {

      // 프로필 컨텍스트에 액세스
      const { profileInfo } = useContext(ProfileContext);

      // profileInfo에서 필요한 값들을 추출
      const { postImage1, postImage2, postImage3 } = profileInfo;

    return (
      <div className="Posts">
            <div className="Posts-images">
                <PostImage src={postImage1} alt="포스트1"></PostImage>
                <PostImage src={postImage2} alt="포스트2"></PostImage>
                <PostImage style={{ margin: '0px' }} src={postImage3} alt="포스트3"></PostImage>
            </div>
      </div>
    );
  }
  
  export default Posts;