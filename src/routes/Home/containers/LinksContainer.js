import { connect } from 'react-redux';

import Links from '../components/Links';

const mapStateToProps = state => ({
  links: state.data.links.data
});

export default connect(mapStateToProps)(Links);
