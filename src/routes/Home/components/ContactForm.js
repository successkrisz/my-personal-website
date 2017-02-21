import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

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

const renderInput = field => (
  <div className={(field.meta.touched && field.meta.error) ? 'form-group has-error' : 'form-group'}>
    <label htmlFor={field.name} className='col-sm-2 control-label'>{field.label}</label>
    <div className='col-sm-10'>
      <input {...field.input} type={field.type} className='form-control' placeholder={field.label} />
      {field.meta.touched &&
      field.meta.error &&
      <span className='error'>{field.meta.error}</span>}
    </div>
  </div>
);

const renderTextarea = field => (
  <div className={(field.meta.touched && field.meta.error) ? 'form-group has-error' : 'form-group'}>
    <label htmlFor={field.name} className='col-sm-2 control-label'>{field.label}</label>
    <div className='col-sm-10'>
      <textarea {...field.input} className='form-control' placeholder={field.label} />
      {field.meta.touched &&
      field.meta.error &&
      <span className='error'>{field.meta.error}</span>}
    </div>
  </div>
);

const SubmitButton = ({ children }) => (
  <div className='form-group'>
    <div className='col-sm-offset-2 col-sm-10'>
      <button type='submit' className='btn btn-default'>{ children }</button>
    </div>
  </div>
);

SubmitButton.propTypes = {
  children: PropTypes.any.isRequired
};

const ContactForm = ({ handleSubmit }) => (
  <Row id='contact'>
    <Col xs={12}>
      <h1>Contact</h1>
      <form onSubmit={handleSubmit} className='form-horizontal'>
        <Field name='name' component={renderInput} type='text' label='Name' />
        <Field name='email' component={renderInput} type='email' label='Email' />
        <Field name='phone' component={renderInput} type='text' label='Phone' />
        <Field name='message' component={renderTextarea} label='Message' />
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
