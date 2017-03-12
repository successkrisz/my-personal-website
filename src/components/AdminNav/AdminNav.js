import React, { PropTypes } from 'react';
import { Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';

import { actions } from 'routes/Login';

const { startLogout } = actions;

export const AdminNav = ({ startLogout }) => (
  <Nav pullRight>
    <NavItem href='#' onClick={startLogout}>Logout</NavItem>
  </Nav>
);

AdminNav.propTypes = {
  startLogout: PropTypes.func.isRequired
};

export default connect(null, { startLogout })(AdminNav);
