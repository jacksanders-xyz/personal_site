import { Component } from 'react';
import computerJack from './assets/computerJack.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="mainContainer">
        <img src={computerJack} className="App-logo" alt="logo"/>
        <span className="jackNameWrap" id="char1">J</span>
        <span className="jackNameWrap" id="char2">A</span>
        <span className="jackNameWrap" id="char3">C</span>
        <span className="jackNameWrap" id="char4">K</span>
        <span className="jackNameWrap" id="char5">C</span>
        <span className="jackNameWrap" id="char6">A</span>
        <span className="jackNameWrap" id="char7">L</span>
        <span className="jackNameWrap" id="char8">L</span>
        <span className="jackNameWrap" id="char9">A</span>
        <span className="jackNameWrap" id="char10">W</span>
        <span className="jackNameWrap" id="char11">A</span>
        <span className="jackNameWrap" id="char12">Y</span>
        <span className="jackNameWrap" id="char13">S</span>
        <span className="jackNameWrap" id="char14">A</span>
        <span className="jackNameWrap" id="char15">N</span>
        <span className="jackNameWrap" id="char16">D</span>
        <span className="jackNameWrap" id="char17">E</span>
        <span className="jackNameWrap" id="char18">R</span>
        <span className="jackNameWrap" id="char19">S</span>
      </div>

      </div>
    );
  }
}

export default App;




