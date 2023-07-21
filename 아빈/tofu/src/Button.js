import { Route } from 'react-router-dom';
import './resultpages.css';
import Alltypespages from './pages/Alltypespages';
import { useNavigate } from 'react-router-dom';

const Button = () => {
    const navigate = useNavigate();
    return(
    <>
        <div className="btn-box">
            <button name="replaybtn" className="btn btn-replay" onClick={onclick}>다시 테스트하기</button>
            <button name="statisticsbtn" className="btn btn-statistics" onClick={onclick}>유형별 통계 보기</button>
            <button name="alltypebtn" className="btn btn-allTypes" onClick={
                navigate('/alltypes')
            }>모든 유형 보기</button>
        </div>
      </>
    )
}
export default Button;