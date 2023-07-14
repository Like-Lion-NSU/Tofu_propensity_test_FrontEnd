import React, { useState } from 'react';
import { useNavigate, Routes, Route } from 'react-router-dom';
import TestPage from './TestPage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleKakaoLogin = () => {
    setIsLoggedIn(true);
    navigate('/test');
  };

  return (
    <div className="App">
      {isLoggedIn ? (
        <Routes>
          <Route path="/test" element={<TestPage />} />
        </Routes>
      ) : (
        <header className="App-header">
          <p>두부로 알아보는 성격유형 테스트</p>
          <p>내가 두부라면</p>
          <p>어떤 두부?</p>
          <img src="두부 이미지 URL" alt="두부 이미지" />
          <button className='loginbtn' onClick={handleKakaoLogin}>
            카카오톡 로그인
          </button>
        </header>
      )}
    </div>
  );
};

export default App;