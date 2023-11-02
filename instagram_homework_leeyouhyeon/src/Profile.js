import React from "react";
import styled from "styled-components";
import "./css/Profile.css"

import { useContext  } from "react";
import { ProfileContext } from './ProfileContext';

const Row =styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
`;

const ProfileText =styled.p`
    font-size: 16px;
    padding-right: 5px;
`;

const Button =styled.button`

    width: 88px;
    height: 30px;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;

    border-radius: 4px;
    border: 1px solid #DBDBDB;
    background-color: white;

    margin: 4px 0px 4px 20px;
`;

const EidtImg =styled.img`
    width: 24px;
    height: 24px;
    padding: 8px;
` 

function Profile() {

    // 프로필 컨텍스트에 액세스
    const { profileInfo } = useContext(ProfileContext);

    // profileInfo에서 필요한 값들을 추출
    const { profileImage, id, post, follow, follower, greeting } = profileInfo;

    return (
      <Row className="profile">
        <Row className="profile-size">
        <div className="profile-left"> 
            <div className="profile-myImage">
                <img src={profileImage} alt="프로필이미지"></img>
            </div>
        </div>
        <div className="profile-myInfo">
            <Row>
                <p style={{ fontSize: '28px', margin: '0px' }}>{id}</p>
                <Button>프로필 편집</Button>
                <EidtImg src="/images/Edit.png" alt="설정"></EidtImg>
            </Row>
            <Row className="profile-myInfo-state">
                <Row>
                    <ProfileText>게시물</ProfileText>
                    <ProfileText style={{ paddingRight: '20px' }}> {post}</ProfileText>

                    <ProfileText>팔로워</ProfileText>
                    <ProfileText style={{ paddingRight: '20px' }}> {follower}</ProfileText>
  
                    <ProfileText>팔로우</ProfileText>
                    <ProfileText> {follow}</ProfileText>
                </Row>
            </Row>
            <div>
                {greeting}
            </div>
        </div>
        </Row>
      </Row>
    );
  }
  
  export default Profile;