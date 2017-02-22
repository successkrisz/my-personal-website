import axios from 'axios';
// ------------------------------------
// Constants
// ------------------------------------
export const SAVE_HOMEPAGE_CONTENT = 'SAVE_HOMEPAGE_CONTENT';
const API = 'http://krisztianballa.com/api';
// ------------------------------------
// Actions
// ------------------------------------
export const saveContent = (content) => ({
  type: SAVE_HOMEPAGE_CONTENT,
  payload: content
});

export const fetchContent = () => {
  return dispatch => {
    axios.get(API)
      .then(data => {
        dispatch(saveContent(data.data));
      });
  };
};

export const actions = {
  fetchContent
};

// ------------------------------------
// Reducer
// ------------------------------------
export default function contentReducer (state = null, action) {
  if (action.type === SAVE_HOMEPAGE_CONTENT) return action.payload;
  return state;
}
