import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import InboxIcon from './InboxIcon';

const Nav = (props) => {
  const userLinks = [
    <Link className="message-link" to="messages">
      <InboxIcon/>
      Inbox
    </Link>
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
