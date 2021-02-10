import { Component } from 'react';
import IphoneMarket from '../assets/IphoneMarket.png';

class ChatMeForm extends Component {
  state = {
    emailAddress: '',
    Message: ''
  }
  
  handleChange = (input) => {
    this.setState({[input.target.name]: input.target.value})
  }

  handleSubmit = (input) => {}

  render() {
    return (
      <div className="ChatMeFormBigContainer">
      <img src={IphoneMarket} className="IphoneMarket" alt="logo"/>
        <div className="ChatMeFormSubContainer" >

            <form onSubmit={this.handleSubmit} className="ChatMeForm">
            <h1 className="ChatMeFormHeader">got something to say?</h1>

            <label className="ChatMeFormSubHeader">What's your email?</label>
            <input className="emailAddress" name="emailAddress" 
            value={this.state.emailAddress} onChange={this.handleChange}
            placeholder="email address"/>

            <label className="ChatMeFormSubHeader">say something:</label>
            <textarea className="Message" name="Message" 
            value={this.state.theirMessage} onChange={this.handleChange}
            placeholder="be nice..."/>

            <input className="sendMessageButton" type="submit" value="send message" />

            </form>
          </div>
      </div>
    );
  }
}




export default ChatMeForm
