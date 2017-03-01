import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import locationReducer from './location';
import contentReducer from 'routes/Home/modules/content';
import githubReducer from 'routes/Home/modules/github';

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    github: githubReducer,
    data: contentReducer,
    location: locationReducer,
    form: formReducer,
    ...asyncReducers
  });
};

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;

  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
