import React, { PropTypes } from 'react'
import { Col, Panel } from 'react-bootstrap'

const Links = ({ links }) => {
  const header = <h3>Recommended Links</h3>
  return (
    <Col xs={12} sm={6}>
      <Panel header={header}>
        <ul>
          {links.map(link =>
            <li key={link.id}><a href={link.url} target='_blank'>{link.title}</a><p>{link.description}</p></li>
          )}
        </ul>
      </Panel>
    </Col>
  )
}

Links.propTypes = {
  links: PropTypes.array.isRequired
}

export default Links
