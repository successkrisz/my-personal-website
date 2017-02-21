import { connect } from 'react-redux';

import Footer from 'components/Footer';

const mapStateToProps = (state) => ({
  ...state.data.footer
});

export default connect(mapStateToProps)(Footer);
