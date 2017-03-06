import React, { PropTypes } from 'react';
import { Field } from 'redux-form';

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

export const SubmitButton = ({ children }) => (
  <div className='form-group'>
    <div className='col-sm-offset-2 col-sm-10'>
      <button type='submit' className='btn btn-default'>{ children }</button>
    </div>
  </div>
);

SubmitButton.propTypes = {
  children: React.PropTypes.any.isRequired
};

export const Input = props => {
  if (props.type === 'textarea') {
    return <Field {...props} component={renderTextarea} />;
  }
  return <Field {...props} component={renderInput} />;
};

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string
};
