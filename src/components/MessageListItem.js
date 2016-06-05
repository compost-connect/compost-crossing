import React, { PropTypes } from 'react'
import UserAvatar from './UserAvatar';
import {Link} from 'react-router';

const MessageListItem = (props) => {
  return (
    <li>
      <span className="sent-date">{props.sent}</span>
      <UserAvatar {...props.from} />
      <span className="from-user">{props.from.name}</span>
      <span className="content-preview">{props.content}</span>
      <Link to={`send-message/${props.from.email}`}>
        <button>Send Message</button>
      </Link>
    </li>
  )
}

export default MessageListItem
