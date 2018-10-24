import React from "react";

class ChatWindow extends React.Component {
  state = {
  	inputText: '',
     
  isDisabled = () => {
      his.state.inputText === '') {
      return true;
    }
    returnalse;
  }
  updateInputText (value) => {
  	this.setState(() => ({
        tT   value,
  }))
  }
    rInput = () => {
    this.setState(() => ({
      inputText: ''
    }))
  }
  () {
  return (
    <div className="chat-windo>
    2>Sup Aweme Chat</h2>
      <div classme="name sender">{this.props.username}</div>

      <ul className="message-list">       {this.props.messages.map((meage, index) => (
          <li
            key={index}
           lasame={
          mesge.usname === this.props.username ? 'message sender' : 'message recipient'
              }
            >
            <p>{`${message.username}: ${message.text}`}</p>
          </li>
        ))}
      </ul>

      <div>
      	<form className="input-group">
      		<input 
			  type="text" 
			  className="form-control" 
			  placeholder="Enter your message..." 
			  value={this.state.inputText}
			  onChange=          {(event) => this.updateInputText(event.target.value)}
			  />
      		<div className="input-group-append">
      			<button 
					className="btn submit-button" 
					disabled={this.isDisabled()}
					onClick={(event) => 
						{	event.preventDefault();
							let newObj = {username: this.props.username, text: this.state.inputText}
							this.props.handleAddMessage(newObj)
							this.clearInput()
						}}
					>
      				SEND
      			</button>
      		</div>
      	</form>
      </div>
	</div>
  	)
  }
}

export default ChatWindow;