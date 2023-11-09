import React from "react";
import Profile from "./Profile";
import Posts from "./Posts";

import {Link} from 'react-router-dom';

import "./css/Mypage.css"
import styled from "styled-components";

import { useContext  } from "react";
import { ProfileContext } from './ProfileContext';


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

const ToggleBtn =styled.button`
    display: flex;
    align-items: center;
    width: 58px;
    height: 52px;
    border: none;
    background-color: white;
    font-size: 12px;
    padding: 0;
    justify-content: flex-start;
    margin-right: 60px;
`;

const ToggleImg =styled.img`
    display: flex;
    width: 12px;
    height: 12px;
    padding-right: 6px;
`;

function MyPage() {

    // 프로필 컨텍스트에 액세스
    const { profileInfo } = useContext(ProfileContext);
    // profileInfo에서 필요한 값들을 추출
    const { profileImage } = profileInfo;

    return (
      <div className="mypage">
        <header className="mypage-Nav">
          <div className="mypage-Nav-position">
            <Link to={"/home"}>
              <img src="/images/Logo.png" alt="인스타로고"></img>
            </Link>
            <Row className="mypage-Nav-buttonPos" >
              <BtnImg src="/images/Home.png" alt="홈버튼"></BtnImg>
              <BtnImg src="/images/NewPosts.png" alt="포스팅버튼"></BtnImg>
              <BtnImg src="/images/Like.png" alt="하트버튼"></BtnImg>
              <div className="mypage-nav-myImage">
                <Link to={"/EditProfile"}>
                <BtnImg style={{ marginRight: '0px' }} src={profileImage} alt="프로필이미지"></BtnImg>
                </Link>
              </div>
            </Row>
          </div>
        </header>

        <main className="mypage-main">
          <Profile className="mypage-profile"/>
          <div className="mypage-toggle">
            <ToggleBtn style={{ borderTop: '1px solid black' }}>
              <ToggleImg src="/images/Posts.png" alt="게시물"></ToggleImg> 게시물
            </ToggleBtn>
            <ToggleBtn>
              <ToggleImg src="/images/Save.png" alt="저장"></ToggleImg> 저장됨
            </ToggleBtn>
            <ToggleBtn style={{ marginRight: '0px' }}>
              <ToggleImg src="/images/Tagged.png" alt="태그"></ToggleImg> 태그됨
            </ToggleBtn>
          </div>
          <Posts/>
        </main>
      </div>
    );
  }
  
  export default MyPage;