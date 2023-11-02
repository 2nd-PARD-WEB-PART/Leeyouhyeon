import React, {useState, useContext} from "react";
import {Link} from 'react-router-dom';

import styled from "styled-components";
import "./css/Home.css"

import { ProfileContext } from './ProfileContext';
import MediaQuery from "react-responsive";

const Row =styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const BtnImg =styled.img`
    display: flex;
    width: 22px;
    height: 22px;
    padding-right: 22px;

    @media (max-width: 750px){
      width: 18px;
      height: 18px;
    }
    @media (max-width: 449px){
      width: 15px;
      height: 15px;
      padding-right: 0px;
    }
`;

const BtnImgIcons =styled.img`
    display: flex;
    width: 24px;
    height: 26px;

    @media (max-width: 750px){
      width: 18px;
      height: 20px;
    }
    @media (max-width: 449px){
      width: 12px;
      height: 14px;
      padding-right: 0px;
    }
`;

const BtnLike =styled.button`
    display: flex;
    width: 24px;
    height: 26px;

    @media (max-width: 750px){
      width: 18px;
      height: 20px;
    }
    @media (max-width: 449px){
      width: 12px;
      height: 14px;
      padding-right: 0px;
    }
`;

const OtherId =styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  height: 18px; /* 128.571% */
  text-transform: lowercase;
  margin: 0;
  padding: 5px 0 20px 14px;

  @media (max-width: 449px){
    font-size: 10px;
    padding: 5px 45px 0px 5px;
  }
`;

function Home() {

  // 프로필 컨텍스트에 액세스
  const { profileInfo, setProfileInfo } = useContext(ProfileContext);
  
  const [postLike, setPostLike] = useState(profileInfo.postLikes);
  const [isLiked, setIsLiked] = useState(profileInfo.postLikeState);

  //댓글 입력 &출력 기능 구현
  const [comment, setComment] =useState('');
  const onChange = event => setComment(event.target.value);

  const updateProfileInfo = (updatedCommentArray) => {
    const updatedProfileInfo = { ...profileInfo, commentLike: updatedCommentArray };
    setProfileInfo(updatedProfileInfo);
  };

  const [commentArray, setCommentArray] = useState(profileInfo.commentLike);

  const onSubmit = event => {
    event.preventDefault();
    if (comment === '') {
      return;
    }
    // 새 댓글을 생성하고 id는 임의로 생성하거나 고유한 방식으로 생성
    const newComment = {
      id: Date.now(),
      username: profileInfo.id, 
      commentText: comment,
      like: false,
      likeCount: 0
    };

    const updatedCommentArray = [...commentArray, newComment];
    setCommentArray(updatedCommentArray);

    // CommentArray를 ProfileInfo로 업데이트
    updateProfileInfo(updatedCommentArray);

    setComment('');
  };

  const handleCommentLikeChange = (index) => {
    // 댓글 배열의 복사본을 만들기
    const updatedCommentArray = [...commentArray];
  
    // 지정된 댓글의 'like' 속성을 토글
    updatedCommentArray[index].like = !updatedCommentArray[index].like;
  
    // 해당 댓글의 'like' 상태를 기반으로 'likeCount'를 업데이트
    updatedCommentArray[index].likeCount = updatedCommentArray[index].like
      ? updatedCommentArray[index].likeCount + 1
      : updatedCommentArray[index].likeCount - 1;
  
    // 수정된 댓글 배열을 상태로 설정
    setCommentArray(updatedCommentArray);

    // CommentArray를 ProfileInfo로 업데이트
    updateProfileInfo(updatedCommentArray);
  }
  
  
  // 버튼 클릭 시 postLike 값을 업데이트하는 함수
  const handlePostlikeChange = (event) => {
    
    // 좋아요 상태를 토글합니다
    setIsLiked(!isLiked);

    // 현재 상태를 기반으로 좋아요 수를 업데이트
    const updatedPostLike = isLiked ? postLike - 1 : postLike + 1;

    // 업데이트된 postLike 값을 설정
    setPostLike(updatedPostLike);

    // 기존의 프로필 정보를 복제하고 postLike 속성만 업데이트
    const updatedProfileInfo = { ...profileInfo, postLikes: updatedPostLike, postLikeState:!isLiked };

    // 프로필 정보를 업데이트
    setProfileInfo(updatedProfileInfo);
  };

  // 좋아요 버튼의 이미지와 CSS 클래스를 동적으로 변경
  const postLikeIMG = isLiked ? 
  "/images/LikeRed.png" : "/images/Like.png";
  const postLikeClass= isLiked ? 
  "Home-story-icons-likeOn" : "Home-story-icons-like";

  return (
      <div className="Home">
        {/*width가 750px 이상일 때 보이는 네비게이션 바 */}
        <MediaQuery minWidth={750}>
          <header className="Home-Nav">
            <div className="Home-Nav-position">
              <img src="/images/Logo.png" alt="인스타로고"></img>
              <div className="Home-search"> 검색</div>
              <Row className="Home-Nav-buttonPos" >
                <BtnImg src="/images/Home.png" alt="홈버튼"></BtnImg>
                <BtnImg src="/images/NewPosts.png" alt="포스팅버튼"></BtnImg>
                <BtnImg src="/images/Like.png" alt="하트버튼"></BtnImg>
                <div className="Home-nav-myImage">
                  <Link to={"/EditProfile"}>
                  <BtnImg style={{ marginRight: '0px' }} src={profileInfo.profileImage} alt="프로필이미지"></BtnImg>
                  </Link>
                </div>
              </Row>
            </div>
          </header>
        </MediaQuery>
        
        {/*width가 450px 이상 750px 미만일 때 보이는 네비게이션 바 */}
        <MediaQuery minWidth={450} maxWidth={749}>
          <header className="Home-Nav">
            <div className="Home-Nav-position">
              <img src="/images/Logo.png" alt="인스타로고"></img>
              <Row className="Home-Nav-buttonPos" >
                <BtnImg src="/images/Home.png" alt="홈버튼"></BtnImg>
                <BtnImg src="/images/NewPosts.png" alt="포스팅버튼"></BtnImg>
                <BtnImg src="/images/Like.png" alt="하트버튼"></BtnImg>
                <div className="Home-nav-myImage">
                  <Link to={"/EditProfile"}>
                  <BtnImg style={{ marginRight: '0px' }} src={profileInfo.profileImage} alt="프로필이미지"></BtnImg>
                  </Link>
                </div>
              </Row>
            </div>
          </header>
        </MediaQuery>

        {/*width가 450px 미만일 때 보이는 네비게이션 바 */}
          <MediaQuery maxWidth={449}>
          <header className="Home-Nav">
            <div className="Home-Nav-position">
                <BtnImg src="/images/camera.png" alt="카메라버튼"></BtnImg>
                <div className="Home-search" style={{ fontSize: '10px' }}> 검색</div>
                <BtnImg  src="/images/Like.png" alt="하트버튼"></BtnImg>
            </div>
          </header>
        </MediaQuery>

          
        <main className="Home-main">
          <Row>
            <div className="Home-story">
              <div>
                <div className="Home-story-header">
                  <Row>
                    <img src="/images/Ellipse 2.png" alt="다른사람 프로필 서클"></img>
                    <div className="Home-header-other2">
                      <div className="Home-header-other3">
                        <img src="/images/image2.jpg" alt="다른사람 프로필 이미지"></img>
                      </div>
                    </div>
                    <OtherId>
                      supershyguy
                    </OtherId>
                    <div className="Home-header-more">
                      <img src="/images/more.png" alt="더보기"></img>
                    </div>
                  </Row>
                </div>
                
                <img src="/images/image1.jpg" alt="스토리게시물" className="Home-story-post"></img>
                <div className="Home-story-icons">
                    <span>
                      <button type="submit" onClick={handlePostlikeChange}>
                        <BtnImgIcons src={postLikeIMG}alt="좋아요버튼" className={postLikeClass}/>
                      </button>
                      <BtnImgIcons src="/images/Comment.png" alt="댓글버튼"/>
                      <BtnImgIcons src="/images/SharePosts.png" alt="공유버튼"/>
                    </span>
                    <span>
                      <BtnImgIcons src="/images/Save2.png" alt="저장버튼"></BtnImgIcons>
                    </span>
                </div>
                <div className="Home-story-like">
                  <span>좋아요</span>
                  <span>{profileInfo.postLikes}개</span>
                </div>

                <div className="Home-story-commentList">
                  {commentArray.map((comment, index) => (
                    <Row key={index}>
                      <div>
                        <span>{comment.username}</span>
                        <span>{comment.commentText}</span>
                      </div>
                      <span className="Home-story-comment-like">
                        <button type="submit" onClick={() => handleCommentLikeChange(index)}>
                          <img src={comment.like ? "/images/LikeRed.png" : "/images/Like.png"} alt="댓글 좋아요버튼" />
                        </button>
                        <span>{comment.likeCount}</span>
                      </span>
                    </Row>
                  ))}
                </div>

                <div className="Home-story-comment">
                  <form onSubmit={onSubmit} >
                    <div className="Home-story-comment-details">
                      <div>
                        <img src="/images/Emoji.png" alt="이모티콘버튼" ></img>
                        <input className="Home-comment-writing" type="text"  placeholder="댓글 달기..." onChange={onChange} ></input>
                      </div>
                      <button type="submit" >게시</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            
            {/* width가 750px 이상일 때만 Home-secondary를 보이도록 만듦*/}
            <MediaQuery minWidth={750}>
              <div className="Home-secondary">
                <Row>
                  <div className="Home-secondary-myImage">
                    <img style={{ marginRight: '0px' }} src={profileInfo.profileImage} alt="프로필이미지"></img>
                  </div>
                  <span>{profileInfo.id}</span> 
                </Row>
              </div>
            </MediaQuery>
          </Row>
        </main>

        {/*width가 450px 미만일 때 보이는 네비게이션 바 */}
        <MediaQuery maxWidth={449}>
          <div className="Home-Nav">
            <div className="Home-Nav-position">
              <BtnImg src="/images/Home.png" alt="홈버튼"></BtnImg>
              <BtnImg  src="/images/NewPosts.png" alt="포스팅버튼"></BtnImg>
              <div className="Home-nav-myImage">
                <Link to={"/EditProfile"}>
                  <BtnImg style={{ marginRight: '0px' }} src={profileInfo.profileImage} alt="프로필이미지"></BtnImg>
                </Link>
              </div>
            </div>
          </div>
        </MediaQuery>
      </div>
    );
  }
  
  export default Home;