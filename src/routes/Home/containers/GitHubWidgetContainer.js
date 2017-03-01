import { connect } from 'react-redux';
import { loadGithub } from '../modules/github';
import GitHubWidget from '../components/GitHubWidget';

const mapStateToProps = state => ({
  username: state.data.github.username,
  ...state.github
});

const mapDispatchToProps = {
  loadGithub
};

export default connect(mapStateToProps, mapDispatchToProps)(GitHubWidget);
