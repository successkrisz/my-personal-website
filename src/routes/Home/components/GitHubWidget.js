import React, { Component, PropTypes } from 'react';
import { Col, Panel, Badge } from 'react-bootstrap';
import axios from 'axios';

class GitHubWidget extends Component {
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
    const numberOfRepos = (this.state.fetching) ? '' : <Badge>{this.state.repos.length}</Badge>;
    const header = <h3><a href={`https://github.com/${this.props.username}`} target='_blank'>
                      My <i className='fa fa-github' /> Repositories {numberOfRepos}</a></h3>;
    return (
      <Col xs={12} sm={6}>
        <Panel header={header}>
          <ul>
            {(this.state.fetching) ? <i className='fa fa-spinner' />
            : this.state.repos.map(repo => (
              <li key={repo.id}>
                <a href={repo.url} target='_blank'>{repo.name}</a>
                <p>{repo.description}</p>
              </li>
            ))}
          </ul>
        </Panel>
      </Col>
    );
  }
}

GitHubWidget.propTypes = {
  username: PropTypes.string.isRequired
};

export default GitHubWidget;
