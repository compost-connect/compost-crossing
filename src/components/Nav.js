import React, { PropTypes } from 'react';
import {Link} from 'react-router';

const Nav = (props) => {
  return (
    <nav>
      <Link to=""> Home </Link>
      <Link to="sign-up"> Sign Up </Link>
    </nav>
  )
}

export default Nav;
