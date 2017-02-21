import React, { PropTypes } from 'react';
import { Row, Col, Panel } from 'react-bootstrap';
import temporaryImage from '../assets/temp.png';

export const PortfolioItem = ({ item }) => (
  <Col xs={12} sm={6}>
    <Panel header={item.url}>
      <img src={temporaryImage} className='img-responsive' alt='' />
    </Panel>
  </Col>
);

PortfolioItem.propTypes = {
  item: PropTypes.object.isRequired
};

const Portfolio = ({ sites }) => (
  <Row className='portfolio'>
    <h1>Portfolio</h1>
    { sites.map((item, index) => <PortfolioItem item={item} key={index} />) }
  </Row>
);

Portfolio.propTypes = {
  sites: PropTypes.array.isRequired
};

export default Portfolio;
