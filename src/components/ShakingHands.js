import shakingHandsPic from '../assets/shakinghands.png';

export function ShakingHands(props) {
  return (     
    <div className="shakinghandsContainer">
      <div className="shakinghandsSubContainer">
        <img src={shakingHandsPic} className="shakinghands" alt="logo"/>
      </div>
    </div>
    );
}
