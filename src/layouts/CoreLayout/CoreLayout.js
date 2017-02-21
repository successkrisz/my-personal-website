import React, { PropTypes } from 'react';
import { Grid } from 'react-bootstrap';

import FooterContainer from 'containers/FooterContainer';
import Navigation from 'components/Navigation';
import 'styles/css/bootstrap.min.css';
import './CoreLayout.scss';

const CoreLayout = ({ children, data, fetchContent }) => {
  if (!data) {
    fetchContent();
    return <div className="center-all"><i className="fa fa-spinner fa-spin" /></div>;
  }
  return (
    <div>
      <Navigation />
      <Grid id='content'>
        { children }
      </Grid>
      <FooterContainer />
    </div>
  );
};

CoreLayout.propTypes = {
  children: PropTypes.any
};

export default CoreLayout;
