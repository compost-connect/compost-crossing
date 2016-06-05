import React, { PropTypes } from 'react'
import {connect} from 'react-redux';
import { fetchMessages } from '../redux/modules/Messages';
import MessageList from './MessageList';

class MessageCenter extends React.Component {
  componentDidMount() {
    if (!this.props.token) document.location.hash = '#/login';
    this.props.dispatch(fetchMessages(this.props.token));
  }
  render () {
    return (
      <div>
        {
          !!this.props.receivedMessages && this.props.receivedMessages.length > 0 ?
          <MessageList messages={this.props.receivedMessages} /> :
          "No messages!"
        }
      </div>
    );
  }
}

const stateToProps = state => {
  return {
    token: state.AuthenticationReducer.token,
    receivedMessages: state.MessageReducer.received
  };
}

export default connect(stateToProps)(MessageCenter);
