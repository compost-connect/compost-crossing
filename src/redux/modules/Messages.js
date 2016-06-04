const SEND_MESSAGE = 'SEND_MESSAGE';
const NOTIFY_USER = 'NOTIFY_USER';
const FETCH_MESSAGES = 'FETCH_MESSAGES'

export default function reducer(state = [], action) {
  return state;
}

export function checkForMessages() {
  return {
    type: FETCH_MESSAGES
  };
}
