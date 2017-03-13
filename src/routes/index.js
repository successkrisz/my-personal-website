// We only need to import the modules necessary for initial render
import CoreLayout from 'containers/CoreLayoutContainer'
import Home from './Home'
import Admin from './Admin'
import AdminLayout from 'layouts/AdminLayout'
import Login, { redirectIfLoggedIn, requireAuth } from './Login'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ([
  {
    path        : '/',
    component   : CoreLayout,
    indexRoute  : Home(store)
  },
  {
    path        : '/login',
    component   : Login,
    onEnter     : redirectIfLoggedIn
  },
  {
    path        : '/admin',
    onEnter     : requireAuth,
    component   : AdminLayout,
    indexRoute  : Admin(store),
    childroutes : []
  }
])

export default createRoutes
