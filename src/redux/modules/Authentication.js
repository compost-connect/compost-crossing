const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
const AUTHENTICATE_USER_SUCCESS = 'AUTHENTICATE_USER_SUCCESS';
const VALIDATE_TOKEN = 'VALIDATE';
const SET_TOKEN = 'SET_TOKEN';

export default function reducer(state = {}, action) {
  switch (action.type) {
    case SET_TOKEN:
      return {
        ...state,
        token: action.token
      };
    case AUTHENTICATE_USER_SUCCESS:
      return {
        ...state,
        token: action.token,
        authenticated: action.authenticated
      }
    default:
      return state;
  }
}

export function setToken(token) {
  return {
    type: SET_TOKEN,
    token
  }
}

export function loginSuccess(token) {
  return {
    type: AUTHENTICATE_USER_SUCCESS,
    token,
    authenticated: true
  }
}

export function authenticateUser(params) {
  return dispatch => {
    fetch('//compost-crossing.herokuapp.com/api/auth', {
      headers: {'Content-Type': 'application/json'},
      method: 'post',
      body: JSON.stringify({password: params.password, email: params.email})
    }).then(response => response.json())
      .then(token => dispatch(loginSuccess(token)));
  }
}

export function validateToken(params) {
  return dispatch => {
    fetch.post('//compost-crossing.herokuapp.com/api/validate')
      .then(response => response.json())
      .then(token => dispatch(setToken(token)));
  }
}

export function createUser(params) {
  return dispatch => {
    fetch.post('//compost-crossing.herokuapp.com/api/user')
      .then(response => response.json())
      .then(token => dispatch(setToken(token)));
  }
}
