import { fetchDB } from 'lib/api'
import { firebaseRef } from 'lib/firebase'

// ------------------------------------
// Action Types
// ------------------------------------
const SAVE_MESSAGES = 'SAVE_MESSAGES'
const SET_MESSAGE_READ_FLAG = 'SET_MESSAGE_READ_FLAG'

// ------------------------------------
// Actions
// ------------------------------------

export const saveMessages = messages => ({
  type: SAVE_MESSAGES,
  messages
})

export const getMessages = () => dispatch => {
  fetchDB('messages')
  .then(messages => dispatch(saveMessages(messages)))
}

export const setReadFlag = id => ({
  type: SET_MESSAGE_READ_FLAG,
  id
})

export const markAsRead = id => dispatch => {
  firebaseRef.update({ [`messages/${id}/read`]: true })
  .then(dispatch(setReadFlag(id)))
}

export const deleteMessage = id => dispatch => {
  firebaseRef.child(`messages/${id}/`).remove()
   // deleteMessage()
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [SAVE_MESSAGES]         : (state, action) => ({ ...action.messages }),
  [SET_MESSAGE_READ_FLAG] : (state, action) => (
    { ...state, [action.id]: { ...state[action.id], read: true } })
}
// ------------------------------------
// Reducer
// ------------------------------------
export default function messageReducer (state = {}, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
