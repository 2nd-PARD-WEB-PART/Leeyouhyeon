import React, {useState} from "react";
import {Link} from 'react-router-dom';

import styled from "styled-components";
import "./css/Home.css"
import "./css/Mypage.css"

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
`;

const OtherId =styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  height: 18px; /* 128.571% */
  text-transform: lowercase;
  margin: 0;
  padding: 5px 0 20px 14px;
`;

function Home(props) {
  const [postLike, setPostLike] = useState(props.info.postLike);
  const [isLiked, setIsLiked] = useState(false);

  //댓글 입력 &출력 기능 구현
  const [comment, setComment] =useState('');
  const onChange = event => setComment(event.target.value);
  const [commentArray, setCommentArray] = useState([]);

  const onSubmit = event => {
    event.preventDefault();
    if (comment === '') {
      return;
    }
      // 새 댓글을 생성하고 id는 임의로 생성하거나 고유한 방식으로 생성합니다.
    const newComment = {
      id: Date.now(),
      username: props.info.id, 
      commentText: comment,
      like: false,
      likeCount: 0
    };

    setCommentArray(commentValueList => [newComment, ...commentValueList]);
    setComment('');
  };

  const handleCommentLikeChange = (id) => {
    // 댓글 배열의 복사본을 만듭니다.
    const updatedCommentArray = [...commentArray];
  
    // 해당 ID와 일치하는 댓글을 찾습니다.
    const commentIndex = updatedCommentArray.findIndex(comment => comment.id === id);
  
    if (commentIndex !== -1) {
      // 지정된 댓글의 'like' 속성을 토글합니다.
      updatedCommentArray[commentIndex].like = !updatedCommentArray[commentIndex].like;
  
      // 해당 댓글의 'like' 상태를 기반으로 'likeCount'를 업데이트합니다.
      updatedCommentArray[commentIndex].likeCount = updatedCommentArray[commentIndex].like
        ? updatedCommentArray[commentIndex].likeCount + 1
        : updatedCommentArray[commentIndex].likeCount - 1;
  
      // 수정된 댓글 배열을 상태로 설정합니다.
      setCommentArray(updatedCommentArray);
    }
  };
  
  // 버튼 클릭 시 postLike 값을 업데이트하는 함수
  const handlePostlikeChange = (event) => {
    
    // 좋아요 상태를 토글합니다
    setIsLiked(!isLiked);

    // 현재 상태를 기반으로 좋아요 수를 업데이트합니다
    const updatedPostLike = isLiked ? postLike - 1 : postLike + 1;

    // 업데이트된 postLike 값을 설정합니다.
    setPostLike(updatedPostLike);

    // 기존의 props.info를 복제하고 postLike 속성만 업데이트합니다.
    const updatedInfo = { ...props.info, postLike: updatedPostLike };

    // 상위 컴포넌트로 업데이트된 정보를 전달합니다.
    props.updateHomeInfo(updatedInfo);
  };

  // 좋아요 버튼의 이미지와 CSS 클래스를 동적으로 변경
  const postLikeIMG = isLiked ? 
  "/images/LikeRed.png" : "/images/Like.png";
  const postLikeClass= isLiked ? 
  "Home-story-icons-likeOn" : "Home-story-icons-like";

  return (
      <div className="Home">
        <header className="mypage-Nav">
          <div className="mypage-Nav-position">
            <img src="/images/Logo.png" alt="인스타로고"></img>
            <div className="Home-search"> 검색</div>
            <Row className="mypage-Nav-buttonPos" >
              <BtnImg src="/images/Home.png" alt="홈버튼"></BtnImg>
              <BtnImg src="/images/NewPosts.png" alt="포스팅버튼"></BtnImg>
              <BtnImg src="/images/Like.png" alt="하트버튼"></BtnImg>
              <div className="mypage-nav-myImage">
                <Link to={"/EditProfile"}>
                <BtnImg style={{ marginRight: '0px' }} src={props.info.profileImage} alt="프로필이미지"></BtnImg>
                </Link>
              </div>
            </Row>
          </div>
        </header>
          
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
                <Row style={{ width: '580px' }} className="Home-story-icons">
                    <span>
                      <button type="submit" onClick={handlePostlikeChange}>
                        <img src={postLikeIMG}alt="좋아요버튼" className={postLikeClass}/>
                      </button>
                      <img src="/images/Comment.png" alt="댓글버튼"/>
                      <img src="/images/SharePosts.png" alt="공유버튼"/>
                    </span>
                    <span>
                      <img src="/images/Save2.png" alt="저장버튼"></img>
                    </span>
                </Row>
                <div className="Home-story-like">
                  <span>좋아요</span>
                  <span>{props.info.postLike}개</span>
                </div>

                <div className="Home-story-commentList">
                  {commentArray.slice().reverse().map((comment, index) => (
                    <Row key={index}>
                      <div>
                        <span>{comment.username}</span>
                        <span>{comment.commentText}</span>
                      </div>
                      <span className="Home-story-comment-like">
                        <button type="submit" onClick={() => handleCommentLikeChange(comment.id)}>
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
                        <img src="/images/Emoji.png" alt="이모티콘버튼" style={{ height: '24px' }}></img>
                        <input className="Home-comment-writing" type="text"  placeholder="댓글 달기..." onChange={onChange} ></input>
                      </div>
                      <button type="submit" >게시</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="Home-secondary">
              <Row>
                <div className="Home-secondary-myImage">
                  <img style={{ marginRight: '0px' }} src={props.info.profileImage} alt="프로필이미지"></img>
                </div>
                <span>{props.info.id}</span> 
              </Row>
            </div>
          </Row>
        </main>
      </div>
    );
  }
  
  export default Home;