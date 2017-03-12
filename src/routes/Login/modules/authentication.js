import { auth } from 'lib/firebase';
import { browserHistory } from 'react-router';

// ------------------------------------
// Action Types
// ------------------------------------
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

// ------------------------------------
// Actions
// ------------------------------------
export const login = ({ uid, displayName }) => ({
  type: LOGIN,
  uid,
  name: displayName
});
export const startLogin = ({ email, password }) => dispatch => {
  auth.signInWithEmailAndPassword(email, password)
  .then(() => browserHistory.push('/admin'))
  .catch((error) => {
    console.error('Unable to auth: ', error);
  });
};

export const logout = () => ({
  type: LOGOUT
});
export const startLogout = () => dispatch => {
  auth.signOut();
};

export const actions = {
  login,
  logout,
  startLogin,
  startLogout
};

// ------------------------------------
// Reducer
// ------------------------------------
export default function authReducer (state = null, action) {
  switch (action.type) {
    case LOGIN:
      return {
        uid: action.uid,
        name: action.name
      };
    case LOGOUT:
      return null;
    default:
      return state;
  }
};
