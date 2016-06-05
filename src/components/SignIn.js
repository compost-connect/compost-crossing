import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import { authenticateUser } from '../redux/modules/Authentication';

class SignIn extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    this.props.dispatch(authenticateUser({
      email: this.refs.email.value,
      password: this.refs.password.value
    }));
  }
  componentDidUpdate() {
    if (this.props.token && this.props.authenticated) {
      document.location.hash = '#/'
    }
  }
  render () {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>
          Email
        </label>
        <input
          ref="email"
          type="email" />
        <label>
          Password
        </label>
        <input
          ref="password"
          type="password" />
        <input type="submit" value="Submit"/>
      </form>
    );
  }
}

const stateToProps = state => {
  return {
    token: state.AuthenticationReducer.token,
    authenticated: state.AuthenticationReducer.authenticated
  }
}

export default connect(stateToProps)(SignIn);
