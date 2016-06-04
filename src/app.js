import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import './styles/styles.scss';
import App from './components/App';
import Map from './components/Map';
import SignUp from './components/SignUp';

const NoMatch = (props) => {
  return (
    <h1> wat? </h1>
  )
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Map}/>
      <Route path="/sign-up" component={SignUp}/>
    </Route>
    <Route path="*" component={NoMatch}/>
  </Router>
), document.getElementById('app'))
