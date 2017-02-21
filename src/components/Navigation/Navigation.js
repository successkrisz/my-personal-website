import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

const Navigation = () => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href='#'>Krisztian Balla</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href='#'>About</NavItem>
        <NavItem eventKey={2} href='#portfolio'>Portfolio</NavItem>
        <NavItem eventKey={3} href='#contact'>Contact</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Navigation;
