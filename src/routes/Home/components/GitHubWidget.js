import React, { Component, PropTypes } from 'react';
import { Col, Panel, Badge } from 'react-bootstrap';

class GitHubWidget extends Component {
  static propTypes = {
    isFetching: PropTypes.bool.isRequired,
    repos     : PropTypes.array,
    username  : PropTypes.string.isRequired,
    loadGithub: PropTypes.func.isRequired
  };

  componentDidMount () {
    const { repos, isFetching, loadGithub, username } = this.props;
    if (!repos && !isFetching) loadGithub(username);
  }

  render () {
    const { repos, username } = this.props;

    const numberOfRepos = (!repos) ? '' : <Badge>{repos.length}</Badge>;
    const header = (
      <h3><a href={`https://github.com/${username}`} target='_blank'>
      My <i className='fa fa-github' /> Repositories {numberOfRepos}</a></h3>
    );

    return (
      <Col xs={12} sm={6}>
        <Panel header={header}>
          <ul>
            {(!repos) ? <i className='fa fa-spinner' />
            : repos.map(repo => (
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

export default GitHubWidget;
