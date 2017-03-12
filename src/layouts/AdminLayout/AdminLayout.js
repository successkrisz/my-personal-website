import React, { PropTypes } from 'react';
import { Grid } from 'react-bootstrap';

import Header from 'components/Header';
import AdminNav from 'components/AdminNav';
import './AdminLayout.scss';

const AdminLayout = ({ children }) => (
  <div>
    <Header>
      <AdminNav />
    </Header>
    <Grid>
      { children }
    </Grid>
  </div>
);

AdminLayout.propTypes = {
  children: PropTypes.element.isRequired
};

export default AdminLayout;
