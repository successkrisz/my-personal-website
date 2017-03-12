import React, { PropTypes } from 'react';
import { Grid, Row, Col, Panel } from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import { Input, SubmitButton } from 'components/Form';

const Login = ({ handleSubmit }) => {
  return (
    <Grid>
      <Row>
        <Col xs={12} md={6} mdOffset={3}>
          <Panel header={<h1>Login to admin area</h1>}>
            <form onSubmit={handleSubmit} className='form-horizontal'>
              <Input name='email' type='text' label='Email' />
              <Input name='password' type='password' label='Password' />
              <SubmitButton>Login</SubmitButton>
            </form>
          </Panel>
        </Col>
      </Row>
    </Grid>
  );
};

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'login'
})(Login);
