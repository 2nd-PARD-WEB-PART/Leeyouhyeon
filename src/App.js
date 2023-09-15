import './App.css';

function App() {
  return (
    <div className="intro">
      <header className="intro-header">
        <h3>
          나를 소개합니다
        </h3>
        <h4>
          안녕하세요, 저는 21학번 이유현입니다.
        </h4>
        <img src="myimage.jpg" className="intro-image" alt="myimage" />
        <h5>
          이번 학기 나의 목표: 과제 미루지 않고 미리미리 끝내기!
        </h5> 
        <h5>   
          좋아하는 것 3가지  
        </h5>
        <p className= "intro-like"> 
          책 읽기 <br />
          게임 하기 <br />      
          강아지     
        </p>
      </header>
    </div>
  );
}

export default App;
