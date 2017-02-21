import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { SubmissionError, reset } from 'redux-form';
import axios from 'axios';
import ContactForm from '../components/ContactForm';

class ContactContainer extends React.Component {
  handleSubmit = (values) => {
    console.log(values);
    axios.post(this.props.api_url, values)
      .then(res => {
        this.props.dispatch(reset('contact'));
      })
      .catch(error => {
        if (error.validationErrors) {
          throw new SubmissionError(error.validationErrors);
        }
      });
  }
  render () {
    return (
      <ContactForm onSubmit={this.handleSubmit} />
    );
  }
}

ContactContainer.propTypes = {
  api_url: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  api_url: state.data.contact.api_url
});

export default connect(mapStateToProps)(ContactContainer);
