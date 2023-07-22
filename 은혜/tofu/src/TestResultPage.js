import React from 'react';
import { useLocation } from 'react-router-dom';

const TestResultPage = () => {
  const location = useLocation();
  const { categoryScores, mbti } = location.state;

  return (
    <div>
      <h2>성격유형 테스트 결과</h2>
      <p>당신의 MBTI 결과는 {mbti}입니다.</p>
      {/* categoryScores를 활용하여 각 카테고리별 선택 횟수 표시 */}
      <p>각 카테고리별 선택 횟수:</p>
      <ul>
        <li>E: {categoryScores.e}</li>
        <li>I: {categoryScores.i}</li>
        <li>N: {categoryScores.n}</li>
        <li>S: {categoryScores.s}</li>
        <li>F: {categoryScores.f}</li>
        <li>T: {categoryScores.t}</li>
        <li>P: {categoryScores.p}</li>
        <li>J: {categoryScores.j}</li>
      </ul>
    </div>
  );
};

export default TestResultPage;