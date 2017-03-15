import React, { PropTypes } from 'react'
import { connect } from 'react-redux'

import Message from './Message'
import { markAsRead } from '../modules/messages'

export const Messages = ({ messages, markAsRead }) => (
  <div>
    <h1>Messages</h1>
    <div>
      { (messages) ? Object.keys(messages).map(key => (
        <Message {...messages[key]} key={key} id={key} markAsRead={() => markAsRead(key)} />
      )) : null }
    </div>
  </div>
)

Messages.propTypes = {
  messages  : PropTypes.object.isRequired,
  markAsRead: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  messages: state.messages
})

const mapDispatchToProps = {
  markAsRead
}

export default connect(mapStateToProps, mapDispatchToProps)(Messages)
