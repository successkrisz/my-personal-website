import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';

import banner from '../assets/krisz.png';

const About = ({ banner_src, title, content }) => (
  <Row id='about'>
    <Col xs={12}>
      <h1>{title}</h1>
      <img className='img-thumbnail' src={banner} alt='' />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Col>
  </Row>
);

About.propTypes = {
  banner_src: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
};

export default About;
