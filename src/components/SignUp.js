import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import RadioButtons from './RadioButtons';
import ResidentForm from './questionnaires/ResidentForm';
import ComposterForm from './questionnaires/ComposterForm';
import FarmerForm from './questionnaires/FarmerForm';
import {createUser} from '../redux/modules/Authentication';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedParticapant: null
    };
    this.questionnaire = ::this.questionnaire;
    this.onParticipantChange = ::this.onParticipantChange;
    this.onSubmit = ::this.onSubmit;
  }
  onSubmit(e) {
    e.preventDefault();
    const userParams = {
      name: this.refs.name.value,
      email: this.refs.email.value,
      address: this.refs.address.value,
      password: this.refs.password.value,
      password_confirmation: this.refs.passwordConfirmation.value,
      participant_type: this.state.selectedParticapant,
      questionnaire: this.refs.questionnaire.serialize()
    }
    this.props.dispatch(createUser(userParams));
  }
  onParticipantChange({activeChoice}) {
    this.setState({selectedParticapant: activeChoice});
  }
  questionnaire() {
    switch (this.state.selectedParticapant) {
      case 'resident':
        return <ResidentForm ref="questionnaire"/>
      case 'composter':
        return <ComposterForm ref="questionnaire"/>
      case 'farmer':
        return <FarmerForm ref="questionnaire"/>
      default:
        return '';
    }
  }
  componentDidUpdate() {
    if (this.props.token && this.props.authenticated) {
      document.location.hash = '#/'
    }
  }
  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <fieldset id="name">
          <label>Name</label>
          <input ref="name" type="text"/>
        </fieldset>
        <fieldset id="email">
          <label>Email</label>
          <input ref="email" type="email"/>
        </fieldset>
        <fieldset id="address">
          <label>Address</label>
          <textarea ref="address"></textarea>
        </fieldset>
        <fieldset id="password">
          <label>Password</label>
          <input ref="password" type="password"/>
          <label>Confirm Password</label>
          <input ref="passwordConfirmation" type="password"/>
        </fieldset>
        <RadioButtons
          id="who-are-you"
          label="Who are you?"
          choices={["resident", "composter", "farmer"]}
          onChange={this.onParticipantChange} />
        {
          this.questionnaire()
        }
        <input className="sign-up-button" type="submit" value="Sign Up" />
      </form>
    )
  }
}

const stateToProps = state => {
  return {
    token: state.AuthenticationReducer.token,
    authenticated: state.AuthenticationReducer.authenticated
  }
}

export default connect(stateToProps)(SignUp);
