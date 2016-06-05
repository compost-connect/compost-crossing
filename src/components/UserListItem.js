import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { getIcon } from '../utils/Utils';

const UserListItem = ({name, participant_type, avatar_url, email, refuseInfo, logisticInfo}) => {
  return (
    <li>
      <img
        key="profile-image"
        className="profile-pic"
        src={avatar_url}/>
      <img
        key="icon-image"
        className="participant-icon" src={getIcon(participant_type)} />
      <span className="user-name">{name}</span>
      <p key="refuse-info">
        Food scraps, coffee grounds
      </p>
      <p key="logistic-info">
        Receive pickup, Drop off
      </p>
      <Link to={`send-message/${email}`}>
        <button>Message</button>
      </Link>
    </li>
  )
}

export default UserListItem
