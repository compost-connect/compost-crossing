import { BASE_URL } from '../../constants';

const FETCH_MATCHES = 'FETCH_MATCHES';
const FETCH_MATCHES_SUCCESS = 'FETCH_MATCHES_SUCCESS';

export default function reducer(state = [], action) {
  switch (action.type) {
    case FETCH_MATCHES_SUCCESS:
      return [
        ...action.matches
      ]
    default:
      return state;
  }
}

export function fetchMatchesSuccess(matches) {
  return {
    type: FETCH_MATCHES_SUCCESS,
    matches
  }
}

export function fetchMatches(token) {
  return dispatch => {
    fetch(`${BASE_URL}/api/users${token ? `?jwt=${token}` : ''}`)
      .then(response => response.json())
      .then(matches => {
        dispatch(fetchMatchesSuccess(matches))
      })
  }
}
