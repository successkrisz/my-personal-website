import { fetchGitHubAPI } from 'lib/api';

// Constants
export const GITHUB_WIDGET_LOAD_CONTENT = 'GITHUB_WIDGET_LOAD_CONTENT';
export const GITHUB_WIDGET_SET_FETCHING_FLAG = 'GITHUB_WIDGET_SET_FETCHING_FLAG';

// Actions
export const setFetchingFlag = (value) => ({
  type: GITHUB_WIDGET_SET_FETCHING_FLAG,
  payload: value
});

export const loadContent = (repos) => ({
  type: GITHUB_WIDGET_LOAD_CONTENT,
  payload: repos
});

export const loadGithub = () => (dispatch, getState) => {
  dispatch(setFetchingFlag(true));
  fetchGitHubAPI().then(response => {
    const repos = response.data.map(repo => ({
      id: repo.id,
      url: repo.html_url,
      name: repo.name,
      description: repo.description,
      pushedAt: repo.pushed_at
    }));
    dispatch(loadContent(repos));
    dispatch(setFetchingFlag(false));
  });
};

// Action Handlers
const ACTION_HANDLERS = {
  [GITHUB_WIDGET_LOAD_CONTENT]: (state, action) => ({ ...state, repos: action.payload }),
  [GITHUB_WIDGET_SET_FETCHING_FLAG]: (state, action) => ({ ...state, isFetching: action.payload })
};

// Reducer
const initialState = { repos: null, isFetching: false };
export default function githubReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
