import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

const Nav = (props) => {
  const userLinks = [
    <Link to="messages">Inbox</Link>,
    <Link to="profile">profile</Link>
  ];
  const authLinks = [
    <Link className="sign-up-link" to="sign-up">
      <button className="nav sign-up-button">
        Sign Up
      </button>
    </Link>,
    <Link to="login">Login</Link>
  ]
  return (
    <nav>
      <Link className="home-link" to="">
        <img className="nav-logo" src="//compost-crossing.herokuapp.com/public/images/cc_logo_text.png" />
      </Link>
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
