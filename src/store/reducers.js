import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import locationReducer from './location'
import contentReducer from 'routes/Home/modules/content'
import githubReducer from 'routes/Home/modules/github'
import { reducer as authReducer } from 'routes/Login'

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    auth: authReducer,
    github: githubReducer,
    content: contentReducer,
    location: locationReducer,
    form: formReducer,
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer
