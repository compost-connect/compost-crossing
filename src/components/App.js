import React, { PropTypes } from 'react'
import Nav from './Nav'

class App extends React.Component {
  render () {
    return (
      <main>
        <Nav />
        {this.props.children}
      </main>
    )
  }
}

export default App;
