import React from "react";

class ChatWindow extends React.Component {
  state = {
  	inputText: '',
  }
  isDisabled = () => {
      if (this.state.inputText === '') {
      return true;
    }
    return false;
  }
  updateInputText = (value) => {
    this.setState(() => ({
      inputText: value,
    }))
  }
  clearInput = () => {
    this.setState(() => ({
      inputText: '',
    }))
  }
  render() {
    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{this.props.username}</div>
        <ul className="message-list">
          {this.props.messages.map((message) => (
            <li
              key={index}
              className={
                message.username === this.props.username ? 'message sender' : 'message recipient'
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
              onChange={(event) => this.updateInputText(event.target.value)}
            />
            <div className="input-group-append">
              <button
                className="btn submit-button"
                disabled={this.isDisabled()}
                onClick={(event) => {
                  event.preventDefault();
                  let newObj = {username: this.props.username, text: this.state.inputText}
                  this.props.handleAddMessage(newObj)
                  this.clearInput()
                }}
              >SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default ChatWindow;