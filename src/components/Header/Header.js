import React, { PropTypes } from 'react'
import { Link, browserHistory } from 'react-router'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { connect } from 'react-redux'

import { isAuthenticated } from 'lib/firebase'

export const Header = ({ children, isLoggedIn }) => (
  <Navbar inverse fixedTop collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/'>Krisztian Balla</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      { (isLoggedIn)
        ? (
          <Nav>
            <NavItem onClick={() => browserHistory.push('/admin')}>
              <i className='glyphicon glyphicon-cog' />
            </NavItem>
          </Nav>
        )
        : ''
      }
      { children }
    </Navbar.Collapse>
  </Navbar>
)

Header.propTypes = {
  children: PropTypes.element.isRequired,
  isLoggedIn: PropTypes.bool
}

const mapStateToProps = () => ({
  isLoggedIn: isAuthenticated()
})

export default connect(mapStateToProps)(Header)
