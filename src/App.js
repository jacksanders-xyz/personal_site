import { Component } from 'react';
import { LittleDude } from './components/LittleDude';
import { Tentacle } from './components/Tentacle';
import { ShakingHands } from './components/ShakingHands';
import { Pool } from './components/Pool';
import { Keyboard } from './components/Keyboard';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <LittleDude />
        <div className="mainContainer">
          <Pool />
          <Tentacle />
          <Keyboard />
          <ShakingHands />
        </div>
      </div>
    );
  }
}

export default App;




