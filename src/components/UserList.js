import React, { PropTypes } from 'react'
import UserListItem from './UserListItem';

class UserList extends React.Component {
  render () {
    return (
      <section id="user-list">
        <ul>
          {this.props.users.map((user, i) => <UserListItem key={i} {...user}/>)}
        </ul>
      </section>
    )
  }
}

export default UserList;
