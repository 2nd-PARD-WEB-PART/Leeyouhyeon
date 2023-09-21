import React from "react";
import MyPage from "./MyPage";

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
    postImage3 :"/images/image3.jpg"
  };

  return (
    <div className="App">
      <MyPage info={info} />
    </div>
  );
}

export default App;
