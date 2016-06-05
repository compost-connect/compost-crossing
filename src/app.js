// other stuff
import './styles/styles.scss';
import './vendor/includesPolyfill';
// APP
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Store from './redux/Store';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import App from './components/App';
import Map from './components/Map';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import MessageCenter from './components/MessageCenter';
import MessageThread from './components/MessageThread';

const NoMatch = (props) => {
  return (
    <div>
      <h1> wat? </h1>
      <img src="http://viralswarm.s3.amazonaws.com/wp-content/uploads/2014/11/AYch4Io.jpg"/>
    </div>
  )
}

const store = Store();

render((
  <Provider store={store} >
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Map}/>
        <Route path="/sign-up" component={SignUp}/>
        <Route path="/login" component={SignIn}/>
        <Route path="/messages" component={MessageCenter}/>
        <Route path="/send-message/:toUser" component={MessageThread}/>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Router>
  </Provider>
), document.getElementById('app'))
