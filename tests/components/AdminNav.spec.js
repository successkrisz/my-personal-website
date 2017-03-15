import React from 'react'
import { Nav, NavItem } from 'react-bootstrap'
import { shallow } from 'enzyme'
import { AdminNav } from 'components/AdminNav'

describe('(Component) AdminNav', () => {
  let _wrapper, startLogout

  beforeEach(() => {
    startLogout = sinon.spy()
    _wrapper = shallow(<AdminNav startLogout={startLogout} />)
  })

  it('Renders a Nav component', () => {
    expect(_wrapper.is(Nav)).to.be.true
  })

  describe('Navigation Links...', () => {
    it('Should render a logout link', () => {
      expect(_wrapper.containsMatchingElement(
        <NavItem href='#'>Logout</NavItem>
      )).to.be.true
    })

    it('Should call logoutAction if clicked Logout', () => {
      _wrapper.find({ href: '#' }).simulate('click')

      expect(startLogout.calledOnce).to.be.true
    })
  })
})
