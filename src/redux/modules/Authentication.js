const AUTHENTICATE_USER = 'AUTHENTICATE';
const VALIDATE_TOKEN = 'VALIDATE';
const SET_TOKEN = 'SET_TOKEN';

export default function reducer(state = {}) {
  return state;
}

export function setToken(token) {
  return {
    type: SET_TOKEN,
    token
  }
}

export function createUser(params) {
  return dispatch => {
    fetch.post('')
      .then(response => response.json())
      .then(token => dispatch(setToken(token)));
  }
}
