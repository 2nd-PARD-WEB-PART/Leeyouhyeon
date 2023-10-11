import React , { useState,useRef  } from "react";
import styled from "styled-components";
import './css/EditProfile.css';
import './css/Mypage.css';
import { Link} from 'react-router-dom';

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

const MetaImg =styled.img`
    display: flex;
    width: 60px;
    height: 12px;
    padding-left: 28px;
    padding-top:57px;
`;

const BlueP =styled.p`
    color: #0095F6;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 16px;
    padding-left: 28px;
`;

const GrayP =styled.p`
    color: #8E8E8E;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px;
    width: 165px;
    padding-left: 28px;
    
`;

const InfoP =styled.p`
    text-align: right;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-right: 33px;
    margin-top: 5px;
`;

const InputBox =styled.input`
    width: 355px;
    height: 32px;
    flex-shrink: 0;

    border-radius: 2px;
    border: 1px solid #EFEFEF;
    background: #FFF;

    margin-bottom: 43px;
    
`;


function EditProfile(props) {

    const [username, setUsername] = useState(props.info.id);
    const [greeting, setGreeting] = useState(props.info.greeting);
    const [website, setWebsite] = useState('');
    const [email, setEmail] = useState(props.info.email);
    const [gender, setGender] = useState(props.info.gender);
    const [profileImage, setProfileImage] = useState(props.info.profileImage); // 이미지 상태 추가

    //사용자가 내용을 수정했을때 버튼 활성화 
    const [isModified, setIsModified] = useState(false);

    //file 버튼을 꾸미기 위해 사용됨
    // useRef를 이용해 input태그에 접근한다.
    const imageInput = useRef();
    // 버튼클릭시 input태그에 클릭이벤트를 걸어준다.
    const onCickImageUpload = () => {
        imageInput.current.click();
    };

    // 파일 업로드 이벤트 핸들러
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
        // 파일을 어딘가에 저장하거나 서버로 업로드
        // 여기에서는 이미지 URL을 설정합니다.
        const imageURL = URL.createObjectURL(file);
        setProfileImage(imageURL);
        setIsModified(true);
        }
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        setIsModified(true);
    };
    const handleGreetingChange = (event) => {
        setGreeting(event.target.value);
        setIsModified(true);
    };
    const handleWebsiteChange = (event) => {
        setWebsite(event.target.value);
        setIsModified(true);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        setIsModified(true);
    };
    const handleGenderChange = (event) => {
        setGender(event.target.value);
        setIsModified(true);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // 상위 컴포넌트로 변경된 정보를 전달하는 업데이트 함수를 호출
        props.updateProfileInfo({ id: username, greeting,website,email,gender, profileImage  });
        setIsModified(false); // 제출 후 수정되지 않은 상태로 설정
    };

    // 버튼의 CSS 클래스를 동적으로 변경
    const submitButtonClass = isModified ? "EditBtn-modified" : "EditBtn";

    
    return (
      <div className="EditProfile">
        <header className="mypage-Nav">
          <div className="mypage-Nav-position">
            <img src="/images/Logo.png" alt="인스타로고"></img>
            <Row className="mypage-Nav-buttonPos" >
              <BtnImg src="/images/Homeoff.png" alt="홈버튼"></BtnImg>
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

        <main className="EditProfile-main">
            <Row>
                <div className="EditProfile-leftSide">
                    <div className="EditProfile-index" style={{ borderLeft: '4px solid black' }}>
                        <span style={{ paddingLeft: '41px' }}>프로필 편집</span>
                    </div>
                    <div className="EditProfile-index">
                        <span style={{ paddingLeft: '41px' }}>비밀번호 변경</span>
                    </div>
                    <div className="EditProfile-meta">
                        <MetaImg src="/images/meta.png" alt="메타"></MetaImg>
                        <BlueP>Accounts center</BlueP>
                        <GrayP>Control settings for connected experiences on Instagram, the Facebook app, and Messenger, including sharing stories and posts, and logging in.</GrayP>
                    </div>
                </div>

                <div className="EditProfile-rightSide">
                    <form className="EditProfile-edit" onSubmit={handleSubmit}>
                        <Row className="EditProfile-imageChange">
                            <div className="EditProfile-myImage">
                                <BtnImg style={{ marginRight: '0px' }} src={props.info.profileImage} alt="프로필이미지"></BtnImg>
                            </div>
                            <div style={{ marginLeft: '32px'}}>
                                <p style={{ margin: '0px', fontWeight:"500", fontSize:"20px"}}>{props.info.id}</p>
                                
                                <input type="file" style={{ display: "none" }} ref={imageInput} onChange={handleImageChange} />

                                <button className="EditProfile-fileupload" onClick={onCickImageUpload}>프로필 사진 바꾸기</button>
                            </div>
                        </Row>

                        <Row>
                            <InfoP style={{ marginLeft: '89px'}}>사용자 이름</InfoP>
                            <InputBox className="EditProfile-id" type="text" value={username} onChange={handleUsernameChange}></InputBox>
                        </Row>
                        <Row>
                            <InfoP style={{ marginLeft: '137px'}}>소개</InfoP>
                            <InputBox className="EditProfile-greeting" type="text" value={greeting}  onChange={handleGreetingChange}
                            style={{ height: '64px'}}></InputBox>
                        </Row>
                        <Row>
                            <InfoP style={{ marginLeft: '110px'}}>웹사이트</InfoP>
                            <InputBox className="EditProfile-web" type="text" placeholder="링크 추가하기" onChange={handleWebsiteChange} ></InputBox>
                        </Row>
                        <Row>
                            <InfoP style={{ marginLeft: '125px'}}>이메일</InfoP>
                            <InputBox className="EditProfile-email" type="email" value={email} onChange={handleEmailChange}></InputBox>
                        </Row>
                        <Row>
                            <InfoP style={{ marginLeft: '142px'}}>성별</InfoP>
                            <InputBox className="EditProfile-sex" type="text" value={gender} onChange={handleGenderChange}></InputBox>
                        </Row>
                        <button type="submit" className={submitButtonClass}>제출</button>
                    </form>
                </div>
            </Row>
        </main>

      </div>
    );
  }
  
  export default EditProfile;