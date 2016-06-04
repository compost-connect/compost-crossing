import React, { PropTypes } from 'react'
import RadioButtons from './RadioButtons';

class SignUp extends React.Component {
  onSubmit(e) {
    e.preventDefault();
  }
  questionaire() {

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
          choices={["resident", "composter", "farmer"]}/>
        {this.questionaire()}
      </form>
    )
  }
}

export default SignUp;
