import { connect } from 'react-redux';
import { reset } from 'redux-form';
import moment from 'moment';

import ContactForm from '../components/ContactForm';
import { sendMessage } from 'lib/api';

// Action
const handleSubmit = (values) => dispatch => {
  const message = {
    ...values,
    date: moment().unix()
  };
  sendMessage(message)
  .then(() => {
    dispatch(reset('contact'));
  });
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (values) => dispatch(handleSubmit(values))
});

export default connect(null, mapDispatchToProps)(ContactForm);
