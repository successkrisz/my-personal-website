import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
import { reduxForm } from 'redux-form';
import { Input, SubmitButton } from 'components/Form';

const rules = {
  name: /^[a-z,.' ]{2,30}$/i,
  email: /^[A-Z0-9][A-Z0-9._%+-]{0,63}@(?:(?=[A-Z0-9-]{1,63}\.)[A-Z0-9]+(?:-[A-Z0-9]+)*\.){1,8}[A-Z]{2,63}$/i,
  phone: /^[\d+ ()]*$/
};

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 2) {
    errors.name = 'Should be at least 2 letter long';
  } else if (!rules.name.test(values.name)) {
    errors.name = 'Shouldn\'t contain special characters';
  }
  if (!values.email) {
    errors.email = 'Required';
  } else if (!rules.email.test(values.email)) {
    errors.email = `${values.email} is not a valid email address`;
  }
  if (values.phone && !rules.phone.test(values.phone)) {
    errors.phone = `${values.phone} is not a valid phone number`;
  }
  if (!values.message) {
    errors.message = 'Required';
  } else if (values.message.length < 10) {
    errors.message = 'Should be at least 10 character long';
  }
  return errors;
};

export const ContactForm = ({ handleSubmit }) => (
  <Row id='contact'>
    <Col xs={12}>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit} className='form-horizontal'>
        <Input name='name' type='text' label='Name' />
        <Input name='email' type='email' label='Email' />
        <Input name='phone' type='text' label='Phone' />
        <Input name='message' type='textarea' label='Message' />
        <SubmitButton>Send message</SubmitButton>
      </form>
    </Col>
  </Row>
);

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

export default reduxForm({
  form: 'contact',
  validate
})(ContactForm);
