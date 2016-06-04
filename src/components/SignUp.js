import React, { PropTypes } from 'react'
import RadioButtons from './RadioButtons';
import ResidentForm from './questionaires/ResidentForm';
import ComposterForm from './questionaires/ComposterForm';
import FarmerForm from './questionaires/FarmerForm';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedParticapant: null
    };
    this.questionaire = ::this.questionaire;
    this.onParticipantChange = ::this.onParticipantChange;
  }
  onSubmit(e) {
    e.preventDefault();
  }
  onParticipantChange({activeChoice}) {
    console.log(activeChoice)
    this.setState({selectedParticapant: activeChoice});
  }
  questionaire() {
    switch (this.state.selectedParticapant) {
      case 'resident':
        return <ResidentForm/>
      case 'composter':
        return <ComposterForm/>
      case 'farmer':
        return <FarmerForm/>
      default:
        return '';
    }
  }
  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <fieldset id="name">
          <label>Name</label>
          <input type="text"/>
        </fieldset>
        <fieldset id="email">
          <label>Email</label>
          <input type="email"/>
        </fieldset>
        <fieldset id="address">
          <label>Address</label>
          <textarea></textarea>
        </fieldset>
        <fieldset id="password">
          <label>Password</label>
          <input type="password"/>
          <label>Confirm Password</label>
          <input type="password"/>
        </fieldset>
        <RadioButtons
          id="who-are-you"
          label="Who are you?"
          choices={["resident", "composter", "farmer"]}
          onChange={this.onParticipantChange} />
        {
          this.questionaire()
        }
      </form>
    )
  }
}

export default SignUp;
