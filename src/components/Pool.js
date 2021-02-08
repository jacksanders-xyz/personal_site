import poolPic from '../assets/pool2.png';

export function Pool(props) {
  return (     
      <div className="poolContainer">
        <div className= "poolWordsContainer"> 
          <span className="pictureWords" id="pool_char1">B</span> 
          <span className="pictureWords" id="pool_char2">L</span> 
          <span className="pictureWords" id="pool_char3">O</span> 
          <span className="pictureWords" id="pool_char4">G</span> 
        </div>
        <img src={poolPic} className="pool" alt="logo"/>
      </div>
    );
}

