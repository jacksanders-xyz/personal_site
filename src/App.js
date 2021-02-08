import { Component } from 'react';
import { LittleDude } from './components/LittleDude';
import { Tentacle } from './components/Tentacle';
import { ShakingHands } from './components/ShakingHands';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <LittleDude />
        <Tentacle />
        <ShakingHands />
      </div>
    );
  }
}

export default App;




