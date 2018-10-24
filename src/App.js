import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatWindow from "./ChatWindow.js"

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

class App extends Component {
  /*
  If the user did not type anything, he/she should not be
  allowed to submit.
  */
  state = {
    users: [{ username: 'Amy' }, { username: 'John' }],
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ],
  }
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
       		{this.state.users.map((user) => {
  				return (
    				<ChatWindow 
    					username={user.username}
						messages={this.state.messages}
						key={user.username}
    				/>
    			)
  			})}
        </div>
      </div>
    );
  }
}

function Header(props) {
  return (
	<header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="App-title">ReactND - Coding Practice</h1>
    </header>
  )
}

export default App;
