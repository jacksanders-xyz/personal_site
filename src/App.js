import { Component } from 'react';
import { LittleDude } from './components/LittleDude';
import { Tentacle } from './components/Tentacle';
import { ShakingHands } from './components/ShakingHands';
import { Pool } from './components/Pool';
import { Keyboard } from './components/Keyboard';
import ChatMeForm from './components/ChatMeForm.js';
import './App.css';

class App extends Component {
  state = {
    chatFormIsClicked: false,
  }
  
  chatMe = () => { 
    (this.state.chatFormIsClicked === false) 
      ? this.setState({chatFormIsClicked: true}) 
      : this.setState({chatFormIsClicked: false })
    console.log("hello")
  }
    
  render() {
    return (
      this.state.chatFormIsClicked 
        ? <ChatMeForm/> 
        : <div className="App">
            <LittleDude />                   
            <div className="mainContainer">
              <Pool />
              <Tentacle />
              <Keyboard chatMe={this.chatMe} />
              <ShakingHands />
            </div>
          </div>
    )
  }
}
export default App
