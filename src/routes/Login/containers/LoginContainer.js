import { connect } from 'react-redux';

import Login from '../components/Login';
import { startLogin } from '../modules/authentication';

// Action
const handleSubmit = (formValues) => dispatch => {
  dispatch(startLogin(formValues));
};

const mapDispatchToProps = dispatch => ({
  onSubmit: (values) => dispatch(handleSubmit(values))
});

export default connect(null, mapDispatchToProps)(Login);
