import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const UserListItem = ({name, email, refuseInfo, logisticInfo}) => {
  return (
    <li>
      <img src="http://0.gravatar.com/avatar/decbc5a867fb73b9c8f2dd2731b385be"/>
      <span className="user-name">{name}</span>
      <p>Food scraps, coffee grounds</p>
      <p>Receive pickup, Drop off</p>
      <Link to={`message/${email}`}>
        <button>Message</button>
      </Link>
    </li>
  )
}

export default UserListItem
