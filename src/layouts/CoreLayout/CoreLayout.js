import React, { PropTypes } from 'react';
import { Grid } from 'react-bootstrap';

import FooterContainer from 'containers/FooterContainer';
import Navigation from 'components/Navigation';
import Header from 'components/Header';
import 'styles/css/bootstrap.min.css';
import './CoreLayout.scss';

const CoreLayout = ({ children, data }) => {
  if (!data) return <div className='spinner'><i className='fa fa-spinner fa-spin' /></div>;
  return (
    <div>
      <Header>
        <Navigation />
      </Header>
      <Grid id='content'>
        { children }
      </Grid>
      <FooterContainer />
    </div>
  );
};

CoreLayout.propTypes = {
  children: PropTypes.element.isRequired,
  data    : PropTypes.bool.isRequired
};

export default CoreLayout;
