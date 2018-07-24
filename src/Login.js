import React, { Component } from 'react';

class Login extends Component {
  constructor() {
    super();

    this.state = {
      userName: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ userName: event.target.value });
  }

  render() {
    return (
      <div>
        <div className="logo">
          <h1>Chat</h1>

          <div className="logotip">
            <div className="stroke">
              <div className="stroke1" />
              <div className="stroke2" />
            </div>
          </div>
        </div>
        <div className="backgraund">
          <div className="login">
            <div className="text-form">
              <p className="username">USERNAME:</p>
              <p>
                <input
                  onChange={this.handleChange}
                  className="stroka"
                  name="name"
                />
              </p>
            </div>
            <p className="p-button">
              <button
                onClick={e => this.props.getUserName(this.state.userName)}
                className="button"
              >
                Get Started
              </button>
            </p>
          </div>
          <div className="bg-black" />
        </div>
      </div>
    );
  }
}

export default Login;
