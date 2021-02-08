import tentaclePic from '../assets/tentacle.png';

export function Tentacle(props) {
  return (     
    <div className="tentacleContainer">
      <div className="tentacleWordsContainer">
        <span className="pictureWords" id="tent_char1">G</span> 
        <span className="pictureWords" id="tent_char2">I</span> 
        <span className="pictureWords" id="tent_char3">T</span> 
        <span className="pictureWords" id="tent_char4">H</span> 
        <span className="pictureWords" id="tent_char5">U</span> 
        <span className="pictureWords" id="tent_char6">B</span> 
      </div>
      <img src={tentaclePic} className="tentacle" alt="logo"/>
    </div>
    );
}

