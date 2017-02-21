import { connect } from 'react-redux';

import About from '../components/About';

const mapStateToProps = state => ({ ...state.data.about.data });

export default connect(mapStateToProps)(About);
