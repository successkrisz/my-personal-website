import { fetchHomePageContent } from 'lib/api';
// ------------------------------------
// Constants
// ------------------------------------
export const SAVE_HOMEPAGE_CONTENT = 'SAVE_HOMEPAGE_CONTENT';
// ------------------------------------
// Actions
// ------------------------------------
export const saveContent = (content) => ({
  type: SAVE_HOMEPAGE_CONTENT,
  payload: content
});

export const fetchContent = () => {
  return dispatch => {
    fetchHomePageContent()
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
