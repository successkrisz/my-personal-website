import { connect } from 'react-redux';

import GitHubWidget from '../components/GitHubWidget';

const mapStateToProps = state => ({ username: state.data.github.username });

export default connect(mapStateToProps)(GitHubWidget);
