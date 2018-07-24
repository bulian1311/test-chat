import React, { Component } from 'react';
import Login from './Login';
import Chat from './Chat';

class App extends Component {
  constructor() {
    super();

    this.state = {};

    this.getUserName = this.getUserName.bind(this);
  }

  getUserName(userName) {
    this.setState({ userName });
  }

  render() {
    return (
      <div className="App">
        {this.state.userName ? (
          <Chat userName={this.state.userName} />
        ) : (
          <Login getUserName={this.getUserName} />
        )}
      </div>
    );
  }
}

export default App;
