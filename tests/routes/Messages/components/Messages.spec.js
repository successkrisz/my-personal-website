import React from 'react'
import { shallow } from 'enzyme'

import { Messages } from 'routes/Messages/components/Messages'
import Message from 'routes/Messages/components/Message'

describe('(Component) Messages', () => {
  let wrapper
  const messages = {
    '-Kf2o1V_Nldvy8Lv-2GL': {
      id      : '-Kf2o1V_Nldvy8Lv-2GL',
      date    : 1489343883,
      email   : 'kriszi.balla@gmail.com',
      message : 'my random message',
      name    : 'Krisztian Balla',
      read    : false
    },
    '-Kf2o3wznBGqkEugrUc9': {
      id      : '-Kf2o3wznBGqkEugrUc9',
      date    : 1489343893,
      email   : 'kriszi.balla@gmail.com',
      message : 'my second message',
      name    : 'Krisztian Balla',
      read    : true
    }
  }

  beforeEach(() => {
    wrapper = shallow(<Messages messages={messages} markAsRead={() => {}} />)
  })

  it('Should render a div', () => {
    expect(wrapper.is('div')).to.be.true
  })

  it('Should render a Message component for every message', () => {
    const panel = wrapper.find(Message)

    expect(panel).to.have.length(2)
  })
})
