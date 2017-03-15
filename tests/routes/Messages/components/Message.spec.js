import React from 'react'
import { shallow } from 'enzyme'
import { Panel } from 'react-bootstrap'

import Message from 'routes/Messages/components/Message'

describe('(Component) Message', () => {
  let wrapper, wrapperUnread, spy
  const unreadMessage = {
    id: '-Kf2o1V_Nldvy8Lv-2GL',
    date: 1489343883,
    email: 'kriszi.balla@gmail.com',
    message: 'my random message',
    name: 'Krisztian Balla',
    read: false
  }
  const readMessage = {
    id: '-Kf2o3wznBGqkEugrUc9',
    date: 1489343893,
    email: 'kriszi.balla@gmail.com',
    message: 'my second message',
    name: 'Krisztian Balla',
    read: true
  }

  beforeEach(() => {
    spy = sinon.spy()
    wrapper = shallow(<Message markAsRead={spy} {...unreadMessage} />)
    wrapperUnread = shallow(<Message markAsRead={spy} {...readMessage} />)
  })

  it('Should render a Panel', () => {
    expect(wrapper.is(Panel)).to.be.true
  })

  it('Should render a [new] badge if the message is new', () => {
    const header = JSON.stringify(wrapper.prop('header'))
    expect(header).to.match(/New/)
    expect(header).to.match(/label/)
  })

  it('Should NOT render a [new] badge if the message is read', () => {
    const header = JSON.stringify(wrapperUnread.prop('header'))

    expect(header).to.not.match(/New/)
    expect(header).to.not.match(/label/)
  })

  it('Should call {markAsRead} method if new message is clicked', () => {
    const panel = wrapper.find(Panel)

    panel.simulate('click')

    expect(spy).to.have.been.calledOnce
  })

  it('Should NOT call {markAsRead} method if read message is clicked', () => {
    const panel = wrapperUnread.find(Panel)

    panel.simulate('click')

    expect(spy).to.have.not.been.called
  })
})
