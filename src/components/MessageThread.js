import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import { fetchMessages,sendMessage } from '../redux/modules/Messages';

class MessageThread extends React.Component {
  componentDidMount() {
    if (!this.props.token) document.location.hash = '#/login';
    this.props.dispatch(fetchMessages(this.props.token));
  }
  sendMessage(e) {
    e.preventDefault();
    this.props.dispatch(sendMessage(
      this.props.token,
      {to_user: this.props.params.toUser, content: this.refs.content.value}
    ));
  }
  messages() {
    if (!this.props.receivedMessages || this.props.receivedMessages.length == 0) return
    let receivedMessages = this.props.receivedMessages
      .filter(message =>  message.from.email === this.props.params.toUser);
    let sentMessages = this.props.sentMessages
      .filter(message => message.to.email === this.props.params.toUser);
    return [...receivedMessages, ...sentMessages]
        .sort((a,b) => new Date(b.sent) - new Date(a.sent))
        .map(message => <li>
                <span className="from-user">{message.from.name}: </span>
                <span className="message-content">{message.content}</span>
                <span className="sent-time">{new Date(message.sent).toLocaleTimeString()}</span>
            </li>).reverse();
  }
  render () {
    return (
      <div id="message-thread">
        <h1> Messages with {this.props.params.toUser} </h1>
        <ul>
        {
          this.messages()
        }
        </ul>
        <form onSubmit={this.sendMessage.bind(this)}>
          <textarea ref="content"></textarea>
          <input type="submit" value="Send" />
        </form>
      </div>
    )
  }
}
const stateToProps = state => {
  return {
    receivedMessages: state.MessageReducer.received,
    sentMessages: state.MessageReducer.sent,
    token: state.AuthenticationReducer.token
  };
}

export default connect(stateToProps)(MessageThread);
