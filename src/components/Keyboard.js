import KeyboardPic from '../assets/Keyboard2.png';
const dotenv = require("dotenv") 
dotenv.config()

export function Keyboard(props) {
  return (     
      <div className="keyboardContainer">
        <div className="keyboardWordsContainer">CHAT</div>
        <img src={KeyboardPic} onClick={() => console.log(process.env.REACT_APP_fun_message) } className="keyboard" alt="logo"/>
      </div>
    );
}




// onClick={props.chatMe}
