import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import { fetchMessages } from '../redux/modules/Messages';

class MessageThread extends React.Component {
  componentDidMount() {
    if (!this.props.token) document.location.hash = '#/login';
    this.props.dispatch(fetchMessages(this.props.token));
  }
  render () {
    return (
      <div>
        <h1> Messages with {this.props.params.toUser} </h1>
        <ul>
        {
          !!this.props.receivedMessages && this.props.receivedMessages.length > 0 ?
          this.props.receivedMessages
            .filter(message => {
              return message.from.email === this.props.params.toUser;
            })
            .map(message => <li>{message.content}</li>) :
          "no messages"
        }
        </ul>
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
