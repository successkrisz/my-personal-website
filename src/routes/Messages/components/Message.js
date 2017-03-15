import React, { PropTypes } from 'react'
import { Panel, Label } from 'react-bootstrap'
import moment from 'moment'

const Message = ({ id, date, email, name, message, read, markAsRead, phone }) => {
  const clickHandler = (read) ? null : markAsRead
  const phoneNumber = (phone) ? (<div>Phone: {phone}</div>) : null
  const receivedAt = moment.unix(date).format('ddd, HH:mm DD/MM/YY')
  const badge = <Label>New</Label>
  const header = <span>{name} {(read) ? null : badge} - {receivedAt}</span>

  return (
    <Panel key={id} header={header} onClick={clickHandler} collapsible>
      <div>Email: {email}</div>
      {phoneNumber}
      <div>Message:<br />{message}</div>
    </Panel>
  )
}

Message.propTypes = {
  id: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  read: PropTypes.bool.isRequired,
  markAsRead: PropTypes.func.isRequired,
  phone: PropTypes.string
}

export default Message
