import React, { PropTypes } from 'react'
import {connect} from 'react-redux';
import {validateToken} from '../redux/modules/Authentication';
import Nav from './Nav'

class App extends React.Component {
  componentDidMount() {
    console.log(this.props.token)
    if (this.props.token) this.props.dispatch(validateToken(this.props.token));
  }
  render () {
    return (
      <main>
        <Nav />
        {this.props.children}
      </main>
    )
  }
}

const StatetoProps = state => {
  return {
    token: state.AuthenticationReducer.token
  }
}

export default connect(StatetoProps)(App);
