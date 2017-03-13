export default (store) => ({
  getComponent (nextState, callback) {
    require.ensure([], (require) => {
      const Admin = require('./components/Admin').default
      callback(null, Admin)
    }, 'admin')
  }
})
