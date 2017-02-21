// ------------------------------------
// Constants
// ------------------------------------
export const SAVE_HOMEPAGE_CONTENT = 'SAVE_HOMEPAGE_CONTENT';
const API = 'http://localhost:3004/api';
// ------------------------------------
// Actions
// ------------------------------------
export const saveContent = (content) => ({
  type: SAVE_HOMEPAGE_CONTENT,
  payload: content
});

export const fetchContent = () => {
  return dispatch => {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        dispatch(saveContent(data));
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
