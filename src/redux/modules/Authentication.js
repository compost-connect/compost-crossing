const AUTHENTICATE_USER = 'AUTHENTICATE_USER';
const AUTHENTICATE_USER_SUCCESS = 'AUTHENTICATE_USER_SUCCESS';
const VALIDATE_TOKEN = 'VALIDATE_TOKEN';
const VALIDATE_TOKEN_SUCCESS = 'VALIDATE_TOKEN_SUCCESS';
const initialState = {
  authenticated: false,
  token: sessionStorage.getItem('jwt')
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATE_USER_SUCCESS:
      sessionStorage.setItem('jwt', action.token);
      return {
        ...state,
        token: action.token,
        authenticated: action.authenticated
      }
    default:
      return state;
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
    fetch('//compost-crossing.herokuapp.com/api/validate', {
      headers: {'Content-Type': 'application/json'},
      method: 'post',
      body: JSON.stringify({token: params.token})
    }).then(response => response.json())
      .then(token => dispatch(loginSuccess(token)));
  }
}

export function createUser(userParams) {
  const pw = userParams.password;
  return dispatch => {
    // fetch('//compost-crossing.herokuapp.com/api/users', {
    fetch('//localhost:9393/api/users', {
      headers: {'Content-Type': 'application/json'},
      method: 'post',
      body: JSON.stringify(userParams)
    }).then(response => response.json())
      .then(token => {
        dispatch(loginSuccess(token));
      });
  }
}
