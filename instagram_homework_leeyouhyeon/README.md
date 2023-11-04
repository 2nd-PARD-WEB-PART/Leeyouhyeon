# Istagram 웹 페이지 카피 코딩

## 페이지 설명

+ MyPage
![mypage](https://github.com/2nd-PARD-WEB-PART/Leeyouhyeon/blob/main/instagram_homework_leeyouhyeon/mypage.png)
    + 사용자 프로필 정보(프로필 이미지, 게시물&팔로워&팔로우 수, 소개, 게시물)을 보여줌
    + Instagram 로고를 선택하면 Home 페이지로 넘어감
    + 프로필 이미지를 선택하면 EditProfile 페이지로 넘어감
+ EditProfile
    + 사용자 정보를 수정할 수 있는 페이지 : 프로필 이미지, 사용자 이름, 소개, 웹사이트, 이메일, 성별 수정가능
    + 수정된 정보가 없을 때 제출 버튼이 비활성화됨
+ Home
    + 게시물에 좋아요 아이콘을 눌렀을 때 좋아요 아이콘 색상 변화&좋아요 수 증가
    + 댓글 입력 후 게시 버튼 클릭시 댓글이 화면에 표시됨(ID, 댓글 내용, 댓글 좋아요 버튼, 댓글 좋아요 수)
    + 각각 댓글의 좋아요 아이콘 클릭시 좋아요 아이콘 색상 변화&좋아요 수 증가
    + 활성화된 좋아요 버튼을 다시 한번 눌렀을 때 비활성화(좋아요 색깔 변화, 증가됐던 좋아요 갯수 감소)
    + 화면 폭에 따라 다른 스타일 적용
        1. width가 750px 이상일 때
        2. width가 450px 이상 750px 미만일 때
        3. width가 450px 미만일 때 

## 설치한 라이브러리

+ 리액트 라우터 
    + 설치 방법: npm install react-router-dom
+ styled-components
    + 설치방법: npm install styled-components
+ react-responsive
    + npm install react-responsive


## 5차_WEB_PART 과제

+ Context API를 사용해 사용자 프로필 정보 및 홈화면의 댓글 및 좋아요 수 상태 관리
+ 반응현 웹 디자인 구현

### Context API
+ 사용자 프로필 정보(사용자 이름, 소개, 이메일 등) 관리
+ 홈 화면의 상태 관리(게시물 목록, 댓글, 좋아요 수)

### 반응형 디자인 구현
화면 폭에 따라 다른 스타일 적용 
+ 기존 전체 화면 페이지: width가 750px 이상일 때
+ Home REsponsive1: width가 450px 이상 750px 미만일 때
+ Home REsponsive2: width가 450px 미만일 때
