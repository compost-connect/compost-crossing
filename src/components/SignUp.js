import React, { PropTypes } from 'react'

class SignUp extends React.Component {
  onSubmit(e) {
    e.preventDefault();
  }
  render () {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Name</label>
        <input type="text"/>
        <label>Email</label>
        <input type="email"/>
        <label>Address</label>
        <textarea></textarea>
        <label>What are you looking for? </label>
        <input type="radio" name="looking-for" value="resident" /> resident
        <input type="radio" name="looking-for" value="composter" /> composter
        <input type="radio" name="looking-for" value="farmer" /> farmer
      </form>
    )
  }
}

export default SignUp;
