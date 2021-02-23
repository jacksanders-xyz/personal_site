import { Component } from 'react';
import IphoneMarket from '../assets/Iphonemarket2.jpg';
import clippedHand from '../assets/clipped_hand2.png';

class ChatMeForm extends Component {
  url = "https://ezbskq5cn9.execute-api.us-east-1.amazonaws.com/default/lambdaEmailc0de" 
  state = {
    emailAddress: '',
    Message: '',
    messageWasSent: false,
    messageState: false 
  }
  
  handleChange = (input) => {
    this.setState({[input.target.name]: input.target.value})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(this.url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
        body: JSON.stringify({
          email: this.state.emailAddress,
          message: this.state.Message,
        }),
    }).then(response => {
      if (!response.ok) throw new Error()
      this.confirmMessage()
    }).catch(error => {
      this.problemMessage()
    })
  }

  confirmMessage = () => {
    this.setState({messageWasSent: true })
    this.setState({messageState: true })
  }

  problemMessage = () => {
    this.setState({messageWasSent: true })
    this.setState({messageState: false })
  }

  goHome = () => {
    this.setState({messageWasSent: false})
  }


  render() {
    return (
     (!this.state.messageWasSent) 
        ? <div className="ChatMeFormBigContainer">
      <div className="handContainer">
        <img src={clippedHand} onClick={this.props.chatMe} className="clippedHand" alt="logo"/>
      </div>
          <img src={IphoneMarket} className="IphoneMarket" alt="logo"/>
            <div className="ChatMeFormSubContainer" >

                <form onSubmit={this.handleSubmit} className="ChatMeForm">
                  <h1 className="ChatMeFormHeader">got something to say?</h1>

                  <label className="ChatMeFormSubHeader">what's your email?</label>
                  <input className="emailAddress" name="emailAddress" 
                  value={this.state.emailAddress} onChange={this.handleChange}
                  placeholder="email address..."/>

                  <label className="ChatMeFormSubHeader">say something:</label>
                  <textarea className="Message" name="Message" 
                  value={this.state.theirMessage} onChange={this.handleChange}
                  placeholder="be nice..."/>

                  <input className="sendMessageButton" type="submit" value="send message" />

                </form>
              </div>
          </div>
        : this.state.messageState 
          ? 
            <div>
              <h1>🪐🪐🌳 🌱your message was sent!</h1>
            </div> 
          : 
            <div className="epicFail_container">
              <h1 className="epicFail_message">
                There was a problem sending your message... (make sure the email you 
                entered is correct)...Try again or message me on linked in!
                <button className="epicFail_button" onClick={this.goHome}>try again</button>
              </h1>
            </div> 

    );
  }
}




export default ChatMeForm
