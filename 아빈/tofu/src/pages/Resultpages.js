import '../resultpages.css';
import Button from '../Button';

function Resultpages() {
  return(
    <>
      <div className="result">
        <h2 className="result-title">조아빈님과 어울리는 두부는 
        <br/>
        <span className="result-tofuType">
        흰 두부
        </span> 입니다.
        </h2>
      </div>
      <div className="result-box">
        <div className="result-box__analyze">
            <div className="result-box__analyze--tofuTypeImg">
            </div>
            <div className="result-box__analyze--analysisTable"> 
            </div>
        </div>
      </div>
      <h1>추천 상품</h1>
      <div className="result-bestWorst">
        <div className="result-best"></div>
        <div className="result-worst"></div>
      </div>
      <div className="result-bestWorstText">
        <div className="result-bestWorstText__best">
          <h2>Best</h2>
          <p>베스트</p>
        </div>
        <div className="result-bestWorstText__worst">
          <h2>Worst</h2>
          <p>워스트</p>
        </div>
      </div>
      <Button />
    </>
  )
}

export default Resultpages;
