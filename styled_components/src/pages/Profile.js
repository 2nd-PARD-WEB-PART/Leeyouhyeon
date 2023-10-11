// "react-router-dom" 라이브러리에서 "useParams" Hook을 import
import { useParams } from "react-router-dom";

// 사용자 정보를 담은 객체
const data = {
  Kjs: {
    name: "김진서",
    description: "파드 2기의 웹 파트장",
  },
  Kyj: {
    name: "김유진",
    description: "파드 2기의 웹 부파트장",
  },
};

// 프로필 정보를 표시하는 컴포넌트
const Profile = () => {
  // "useParams" Hook을 사용하여 URL에서 전달된 username 파라미터를 get
  const params = useParams();

  // username 파라미터에 해당하는 사용자 정보를 "data" 객체에서 get
  const profile = data[params.username];

  // 사용자 정보가 존재하면 해당 정보를 화면에 표시, 없으면 존재하지 않는 프로필임을 알리는 메시지 표시
  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 프로필입니다.</p>
      )}
    </div>
  );
};

// Profile 컴포넌트를 모듈의 기본 내보내기(export default)로 export
export default Profile;