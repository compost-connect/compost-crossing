import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { getIcon } from '../utils/Utils';

const UserListItem = ({name, participant_type, email, refuseInfo, logisticInfo}) => {
  return (
    <li>
      <img className="profile-pic" src="http://0.gravatar.com/avatar/decbc5a867fb73b9c8f2dd2731b385be"/>
      <img className="participant-icon" src={getIcon(participant_type)} />
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
