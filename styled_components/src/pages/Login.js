import { useNavigate } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // 로그인 로직
    // ...
    setIsLoggedIn(true);
    // 페이지 이동
    navigate("../mypage");
  };

  return (
    <div>
      <h1>로그인 페이지</h1>
      <button onClick={handleClick}>로그인</button>
    </div>
  );
};

export default Login;