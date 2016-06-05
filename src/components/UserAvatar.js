import React, { PropTypes } from 'react';
import { getIcon } from '../utils/Utils';

const UserAvatar = ({avatar_url, participant_type}) => {
  return (
    <div>
      <img
        key="profile-image"
        className="profile-pic"
        src={avatar_url || "http://compost-crossing.herokuapp.com/public/images/unknown_avatar.png"}/>
      <img
        key="icon-image"
        className="participant-icon" src={getIcon(participant_type)} />
    </div>
  )
}

export default UserAvatar
