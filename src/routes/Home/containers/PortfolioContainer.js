import { connect } from 'react-redux';

import Portfolio from '../components/Portfolio';
import { getPortfolioContent } from '../modules/content';

const mapStateToProps = state => ({
  portfolio: getPortfolioContent(state)
});

export default connect(mapStateToProps)(Portfolio);
