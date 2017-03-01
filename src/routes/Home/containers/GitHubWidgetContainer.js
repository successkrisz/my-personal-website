import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import GitHubWidget from '../components/GitHubWidget';

class GitHubWidgetContainer extends Component {
  constructor () {
    super();
    this.state = {
      repos: null,
      fetching: true
    };
  }
  componentDidMount () {
    const apiUrl = `https://api.github.com/users/${this.props.username}/repos?sort=pushed`;
    axios.get(apiUrl)
      .then(json => {
        const repos = json.data.map(repo => ({
          id: repo.id,
          url: repo.html_url,
          name: repo.name,
          description: repo.description,
          pushedAt: repo.pushed_at
        }));
        this.setState({ fetching: false, repos });
      });
  }
  render () {
    return <GitHubWidget {...this.state} username={this.props.username} />;
  }
}

GitHubWidgetContainer.propTypes = {
  username: PropTypes.string.isRequired
};

const mapStateToProps = state => ({ username: state.data.github.username });

export default connect(mapStateToProps)(GitHubWidgetContainer);
