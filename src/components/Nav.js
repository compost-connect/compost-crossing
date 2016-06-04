import React, { PropTypes } from 'react';
import {Link} from 'react-router';

const Nav = (props) => {
  return (
    <nav>
      <Link to="">Compost Crossing</Link>
      <Link to="sign-up">Sign Up</Link>
      <Link to="messages">Inbox</Link>
    </nav>
  )
}

export default Nav;
