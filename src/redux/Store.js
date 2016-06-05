import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
// reducer modules
import AuthenticationReducer from './modules/Authentication';
import MessageReducer from './modules/Messages';

const rootReducer = combineReducers({
  AuthenticationReducer
});

const finalCreateStore = compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);
  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  // if (module.hot) {
  //   module.hot.accept('../reducers', () =>
  //     store.replaceReducer(require('../reducers')/*.default if you use Babel 6+ */)
  //   );
  // }
  return store;
}
