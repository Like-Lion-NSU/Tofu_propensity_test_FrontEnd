import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Questions = [
  // 질문 리스트
  "질문 1",
  "질문 2",
  "질문 3",
  "질문 4",
  "질문 5",
  "질문 6",
  "질문 7",
  "질문 8",
  "질문 9",
  "질문 10",
  "질문 11",
  "질문 12"
];

const TestPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const navigate = useNavigate();

  const handleAnswer = (answer) => {
    // 답변 처리 로직
    // ...

    // 다음 질문으로 이동
    if (currentQuestion < Questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // 마지막 질문인 경우, 결과 페이지로 이동
      navigate('/result');
    }
  };

  // 진행 바 스타일링을 위한 변수들
  const progressBarWidth = ((currentQuestion + 1) / Questions.length) * 100 + "%";
  const progressBarStyle = { width: progressBarWidth };

  return (
    <div>
      <div className="progress-bar">
        <div className="progress" style={progressBarStyle}></div>
      </div>
      <h3>{Questions[currentQuestion]}</h3>
      <div>
        <button onClick={() => handleAnswer('a')}>
          a 답변
        </button>
        <span>vs</span>
        <button onClick={() => handleAnswer('b')}>
          b 답변
        </button>
      </div>
    </div>
  );
};

export default TestPage;