import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Navbar } from 'react-bootstrap'

const Header = ({ children }) => (
  <Navbar inverse fixedTop collapseOnSelect onSelect={(key, event) => {
    location.href = event.target.href
  }}>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to='/'>Krisztian Balla</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      { children }
    </Navbar.Collapse>
  </Navbar>
)

Header.propTypes = {
  children: PropTypes.element.isRequired
}

export default Header
