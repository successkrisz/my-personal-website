import React, { PropTypes } from 'react';
import { Col, Panel, Badge } from 'react-bootstrap';

const GitHubWidget = ({ isFetching, repos, username, loadGithub }) => {
  if (!repos && !isFetching) loadGithub();
  const numberOfRepos = (isFetching || repos === null) ? '' : <Badge>{repos.length}</Badge>;
  const header = <h3><a href={`https://github.com/${username}`} target='_blank'>
                    My <i className='fa fa-github' /> Repositories {numberOfRepos}</a></h3>;
  return (
    <Col xs={12} sm={6}>
      <Panel header={header}>
        <ul>
          {(isFetching || repos === null) ? <i className='fa fa-spinner' />
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
};

GitHubWidget.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  repos: PropTypes.oneOfType([PropTypes.bool, PropTypes.array]),
  username: PropTypes.string.isRequired,
  loadGithub: PropTypes.func.isRequired
};

export default GitHubWidget;
