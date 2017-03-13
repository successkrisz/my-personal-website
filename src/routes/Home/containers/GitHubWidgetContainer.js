import { connect } from 'react-redux'
import { loadGithub } from '../modules/github'
import GitHubWidget from '../components/GitHubWidget'

const mapStateToProps = state => ({
  username: state.content.github,
  ...state.github
})

const mapDispatchToProps = {
  loadGithub
}

export default connect(mapStateToProps, mapDispatchToProps)(GitHubWidget)
