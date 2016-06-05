import React, { PropTypes } from 'react';
import MessageListItem from './MessageListItem';

const MessageList = ({messages}) => {
  return (
    <section id="message-list">
      <ul>
        {messages.map(message => <MessageListItem {...message} />)}
      </ul>
    </section>
  )
}

export default MessageList
