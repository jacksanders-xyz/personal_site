import KeyboardPic from '../assets/Keyboard2.png';

export function Keyboard(props) {
  return (     
      <div className="keyboardContainer">
        <div className="keyboardWordsContainer">CHAT</div>
        <img src={KeyboardPic} onClick={props.chatMe} className="keyboard" alt="logo"/>
      </div>
    );
}
