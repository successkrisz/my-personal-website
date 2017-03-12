import { fetchDB } from 'lib/api';
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
    Promise.all([
      fetchDB('shared-content'),
      fetchDB('pages/home')
    ])
    .then(data => {
      dispatch(saveContent({ ...data[0], ...data[1] }));
    });
  };
};

export const actions = {
  fetchContent
};

// ------------------------------------
// Reducer
// ------------------------------------
export default function (state = null, action) {
  if (action.type === SAVE_HOMEPAGE_CONTENT) return action.payload;
  return state;
}

// ------------------------------------
// Selectors
// ------------------------------------
export const getAboutContent = state => state.content.about;

export const getLinksContent = state => state.content.links;

export const getPortfolioContent = state => state.content.portfolio;

export const getFooterContent = state => ({
  quote: state.content['footer-quote'],
  github: state.content.github,
  linkedin: state.content.linkedin
});
