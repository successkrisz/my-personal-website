import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'

const Navigation = () => (
  <Nav pullRight>
    <NavItem eventKey={1} href='#'>About</NavItem>
    <NavItem eventKey={2} href='#contact'>Contact</NavItem>
  </Nav>
)

export default Navigation
