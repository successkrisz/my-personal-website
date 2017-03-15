import { injectReducer } from 'store/reducers'

import { getMessages } from './modules/messages'

export default (store) => ({
  path: 'messages',
  getComponent (nextState, callback) {
    require.ensure([], (require) => {
      const Messages = require('./components/Messages').default
      const reducer = require('./modules/messages').default

      injectReducer(store, { key: 'messages', reducer })
      store.dispatch(getMessages())

      callback(null, Messages)
    }, 'messages')
  }
})
