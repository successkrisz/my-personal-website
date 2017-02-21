import { connect } from 'react-redux';

import Portfolio from '../components/Portfolio';

const mapStateToProps = (state) => ({
  sites: [{'url': 'www.site1.com'},{'url': 'www.site2.com'},{'url': 'www.site3.com'},{'url': 'www.site4.com'}]
});

export default connect(mapStateToProps)(Portfolio);
