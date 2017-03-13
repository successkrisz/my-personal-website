import React from 'react'
import { shallow } from 'enzyme'
import { Input } from 'components/Form'
import { ContactForm } from 'routes/Home/components/ContactForm'

describe('(Component) ContactForm', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<ContactForm handleSubmit={() => {}} />)
  })

  it('Should render title: Contact', () => {
    const title = _wrapper.find('h1')
    expect(title).to.have.length(1)
    expect(title.text()).to.equal('Contact')
  })

  it('Should render form with 4 fields', () => {
    expect(_wrapper.find('form')).to.exist
    expect(_wrapper.find(Input)).to.have.length(4)
  })
})
