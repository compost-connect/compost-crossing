import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

const Nav = (props) => {
  const userLinks = [
    <Link to="messages">Inbox</Link>,
    <Link to="profile">profile</Link>
  ];
  const authLinks = [
    <Link to="login">Login</Link>,
    <Link to="sign-up">
      <button className="nav sign-up-button">
        Sign Up
      </button>
    </Link>
  ]
  return (
    <nav>
      <Link to="">Compost Crossing</Link>
      {props.authenticated ? userLinks : authLinks}
    </nav>
  )
}

const StatetoProps = state => {
  return {
    authenticated: state.AuthenticationReducer.authenticated
  }
}

export default connect(StatetoProps)(Nav);
