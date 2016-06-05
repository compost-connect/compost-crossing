const SEND_MESSAGE = 'SEND_MESSAGE';
const NOTIFY_USER = 'NOTIFY_USER';
const FETCH_MESSAGES = 'FETCH_MESSAGES'

export default function reducer(state = {}, action) {
  switch(action.type) {
    case FETCH_MESSAGES:
      return {
        ...state,
        sent: action.messages.sent,
        received: action.messages.received
      }
    case SEND_MESSAGE:
      return {
        ...state,
        sent: [
          ...state.sent,
          action.message
        ]
      };
    default:
      return state;
  }
}

export function fetchMessageSuccess(messages){
  return {
    type: FETCH_MESSAGES,
    messages
  };
};

export function sendMessage() {
  return dispatch => {
    fetch('//compost-crossing.herokuapp.com/api/messages', {
      headers: {'Content-Type': 'application/json'},
      method: 'post',
      body: JSON.stringify({

      })
    }).then(response => response.json())
      .then(token => dispatch(loginSuccess(token)));
  }
}

export function fetchMessages(token) {
  return dispatch => {
    fetch(`//compost-crossing.herokuapp.com/api/messages/center?jwt=${token}`)
      .then(response => response.json())
      .then(messages => {
        dispatch(fetchMessageSuccess(messages));
      });
  }
}
