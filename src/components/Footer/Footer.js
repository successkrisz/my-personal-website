import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import './Footer.css';

const Footer = ({ github, linkedin, quote }) => (
  <footer>
    <Grid>
      <Row>
        <Col xs={12} sm={8}>
          <p><i className='fa fa-quote-left' aria-hidden='true' />
            {quote.text}
            <i className='fa fa-quote-right' aria-hidden='true' /></p>
          <div className='text-right italic'> - {quote.author}</div>
        </Col>
        <Col xs={12} sm={4}>
          <a href={`https://github.com/${github}`} target='_blank'>
            <i className='fa fa-github fa-3x' aria-hidden='true' /> GitHub
          </a>
          <br />
          <a href={linkedin} target='_blank'>
            <i className='fa fa-linkedin-square fa-3x' aria-hidden='true' /> LinkedIn
          </a>
          <br />
          <a href='Krisztian_Balla_CV.pdf' target='_blank'>
            <i className='fa fa-file-pdf-o fa-3x' aria-hidden='true' /> View my CV
          </a>
        </Col>
      </Row>
    </Grid>
  </footer>
);

Footer.propTypes = {
  github  : PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  quote   : PropTypes.object.isRequired
};

export default Footer;
