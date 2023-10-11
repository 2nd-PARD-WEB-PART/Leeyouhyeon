import { Navigate } from "react-router-dom";

const MyPage = ({ isLoggedIn, setIsLoggedIn }) => {
  const handleClick = () => {
    // 로그아웃 로직
    // ...
    setIsLoggedIn(false);
  };

  if (!isLoggedIn) {
    // 페이지 이동
    return <Navigate to="/login" replace={true} />;
  }

  return (
    <div>
      <h1>마이페이지</h1>
      <button onClick={handleClick}>로그아웃</button>
    </div>
  );
};

export default MyPage;