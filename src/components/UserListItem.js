import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { getIcon } from '../utils/Utils';

const UserListItem = ({name, participant_type, avatar_url, email, questionnaire={fields:[]}}) => {
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
        {
          questionnaire.fields.filter(field => !!field.refuse)[0] ?
          questionnaire.fields.filter(field => !!field.refuse)[0].refuse.join(', ') :
          ''}
      </p>
      <p key="logistic-info">
        {
          questionnaire.fields.filter(field => !!field.logistic)[0] ?
          questionnaire.fields.filter(field => !!field.logistic)[0].logistic :
          ''}
      </p>
      <Link to={`send-message/${email}`}>
        <button>Message</button>
      </Link>
    </li>
  )
}

export default UserListItem
