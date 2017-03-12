import { connect } from 'react-redux';

import CoreLayout from 'layouts/CoreLayout';

const mapStateToProps = (state) => ({
  data: (!!state.content)
});

export default connect(mapStateToProps)(CoreLayout);
