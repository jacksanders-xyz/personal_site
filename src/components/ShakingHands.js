import shakingHandsPic from '../assets/shakinghands.png';

export function ShakingHands(props) {
  return (     
      <div className="shakinghandsSubContainer">
        <div className="shakinghandsWordsContainer">
          <span className="pictureWords" id="hands_char1">L</span> 
          <span className="pictureWords" id="hands_char2">I</span> 
          <span className="pictureWords" id="hands_char3">N</span> 
          <span className="pictureWords" id="hands_char4">K</span> 
          <span className="pictureWords" id="hands_char5">E</span> 
          <span className="pictureWords" id="hands_char6">D</span> 
          <span className="pictureWords" id="hands_char7">I</span> 
          <span className="pictureWords" id="hands_char8">N</span> 
        </div>
        <img src={shakingHandsPic} className="shakinghands" alt="logo"/>
      </div>
    );
}





