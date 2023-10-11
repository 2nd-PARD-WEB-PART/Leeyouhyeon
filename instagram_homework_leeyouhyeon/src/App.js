import React , { useState } from "react";
import MyPage from "./MyPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import EditProfile from "./EditProfile";
import Home from "./Home";


function App() {

  const info = {

    id: "We_pard",
    post: 1,
    follower: 255,
    follow: 500,
    greeting: "Pay it forward",
    profileImage : "/images/my.jpg",
    postImage1 :"/images/image1.jpg",
    postImage2 :"/images/image2.jpg",
    postImage3 :"/images/image3.jpg",
    website: '',
    email:'22100548@gmail.com',
    gender: 'Female',
    postLike: 1069 ,
    CommentArray: []
  };


  const [profileInfo, setProfileInfo] = useState(info);
  const [homeInfo, setHomeInfo] = useState(info);

  // 프로필 정보를 업데이트하는 함수
  const updateProfileInfo = (newInfo) => {
    // 상태를 업데이트합니다.
    setProfileInfo({ ...profileInfo, ...newInfo });
  };

  const updateHomeInfo = (newInfo) => {
    // 상태를 업데이트합니다.
    setHomeInfo({ ...homeInfo, ...newInfo });
  };

  return (
    <Router>
      <Routes>
          <Route  path="/" element={<MyPage info={profileInfo} />} />
          <Route
            path="/EditProfile"
            element={<EditProfile info={profileInfo} updateProfileInfo={updateProfileInfo} />}
          />
          <Route path="/home" element={<Home info={homeInfo} updateHomeInfo={updateHomeInfo} />} />
      </Routes>
    </Router>
  );
}

export default App;

