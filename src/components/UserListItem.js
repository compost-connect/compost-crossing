import React, { PropTypes } from 'react'

const UserListItem = ({name, refuseInfo, logisticInfo}) => {
  return (
    <li>
      <img src="http://0.gravatar.com/avatar/decbc5a867fb73b9c8f2dd2731b385be"/>
      <span className="user-name">{name}</span>
      <p>Food scraps, coffee grounds</p>
      <p>Receive pickup, Drop off</p>
    </li>
  )
}

export default UserListItem
