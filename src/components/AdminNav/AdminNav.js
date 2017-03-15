import React, { PropTypes } from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

import { actions } from 'routes/Login'

const { startLogout } = actions

const linkTo = destination => () => browserHistory.push(destination)

export const AdminNav = ({ startLogout }) => (
  <Nav pullRight>
    <NavItem onClick={linkTo('/admin')}>Dashboard</NavItem>
    <NavItem onClick={linkTo('/admin/messages')}>Messages</NavItem>
    <NavItem href='#' onClick={startLogout}>Logout</NavItem>
  </Nav>
)

AdminNav.propTypes = {
  startLogout: PropTypes.func.isRequired
}

export default connect(null, { startLogout })(AdminNav)
