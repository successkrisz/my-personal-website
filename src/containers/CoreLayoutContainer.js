import { connect } from 'react-redux';

import CoreLayout from 'layouts/CoreLayout';
import { fetchContent } from 'store/contentReducer';

const mapStateToProps = (state) => ({
  data: (!!state.data)
});

const mapDispatchToProps = { fetchContent };

export default connect(mapStateToProps, mapDispatchToProps)(CoreLayout);
