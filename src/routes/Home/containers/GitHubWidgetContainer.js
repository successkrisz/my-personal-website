import { connect } from 'react-redux';

import GitHubWidget from '../components/GitHubWidget';

const mapStateToProps = () => ({
  username: 'successkrisz'
});

export default connect(mapStateToProps)(GitHubWidget);
