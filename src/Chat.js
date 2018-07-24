import React, { Component } from 'react';

class Chat extends Component {
  constructor() {
    super();

    this.state = {};

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentWillMount() {
    const messages = this.getMessagesFromStorege();

    if (!messages) {
      return;
    }

    this.setState({ messages });
  }

  getMessagesFromStorege() {
    let messages;

    if (localStorage.getItem('messages') === null) {
      messages = [];
    } else {
      messages = JSON.parse(localStorage.getItem('messages'));
    }

    return messages;
  }

  handleChange(event) {
    this.setState({ message: event.target.value });
  }

  handleClick(event) {
    const messages = this.getMessagesFromStorege();

    if (!messages || !this.state.message) {
      return;
    }

    messages.push({
      message: this.state.message,
      userName: this.props.userName
    });

    localStorage.setItem('messages', JSON.stringify(messages));
    this.setState({ messages });

    document.querySelector('.text-message').value = '';
  }

  renderMessages() {
    const messages = this.state.messages;

    if (!messages) {
      return;
    }

    return messages.map(message => {
      return (
        <div key={message.message} className="message1">
          <p>{message.message}</p>
          <div className="usernName2">
            <p>User: {message.userName}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <div className="backgraund">
          <div className="bg-black-top">
            <div className="text-bg-top">
              <p>Тестовое задание</p>
            </div>
          </div>
          <div className="message">{this.renderMessages()}</div>
          <div className="bg-black-bot">
            <div className="text-form-bot">
              <input
                onChange={this.handleChange}
                className="text-message"
                name="name"
                placeholder="Type message..."
              />
              <button onClick={this.handleClick} className="button-chat">
                <img
                  src="https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_send-512.png"
                  alt=""
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
