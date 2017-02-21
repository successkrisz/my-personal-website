import React from 'react';
import { Row } from 'react-bootstrap';
import AboutContainer from '../containers/AboutContainer';
import PortfolioContainer from '../containers/PortfolioContainer';
import GitHubWidgetContainer from '../containers/GitHubWidgetContainer';

const HomeView = () => (
  <div>
    <AboutContainer />
    <PortfolioContainer />
    <Row>
      <GitHubWidgetContainer />
    </Row>
  </div>
);

export default HomeView;
