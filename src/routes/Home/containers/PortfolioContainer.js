import { connect } from 'react-redux';

import Portfolio from '../components/Portfolio';

const mapStateToProps = state => ({ sites: state.data.portfolio.data });

export default connect(mapStateToProps)(Portfolio);
