import React, { createContext, useState } from 'react';

//프로필 편집 context 생성
const ProfileContext = createContext();

// Provider 선언
function ProfileProvider({ children }) {

  const [profileInfo, setProfileInfo] = useState({
    id: "We_pard",
    post: 1,
    follower: 255,
    follow: 500,
    greeting: "Pay it forward",
    profileImage: "/images/my.jpg",
    postImage1: "/images/image1.jpg",
    postImage2: "/images/image2.jpg",
    postImage3: "/images/image3.jpg",
    website: "https://www.naver.com/",
    email: "22100548@gmail.com",
    gender: "Female",
    postLikes: 0,
    postLikeState: false,
    commentLike: []
  });

  return (
    <ProfileContext.Provider value={{ profileInfo, setProfileInfo }}>
      {children}
    </ProfileContext.Provider>
  );
}

export { ProfileContext, ProfileProvider };