import React from 'react'
import { shallow } from 'enzyme'
import { Field } from 'redux-form'

import {
  RenderTextarea,
  RenderInput,
  SubmitButton,
  Input
} from 'components/Form/Form'

const props = {
  meta: {
    touched: false,
    error: false
  },
  name: 'input',
  label: 'Input'
}

describe('(Component) RenderTextarea', () => {
  let _wrapper

  it('Should render a textarea', () => {
    _wrapper = shallow(<RenderTextarea {...props} />)

    const textarea = _wrapper.find('textarea')

    expect(textarea).to.have.length(1)
  })

  it('Should render error message when props.meta.error is supplied', () => {
    const propsWithError = { ...props, meta: { touched: true, error: 'error' } }

    _wrapper = shallow(<RenderTextarea {...propsWithError} />)

    expect(_wrapper.contains(
      <span className='error'>error</span>
    )).to.be.true

    expect(_wrapper.find('.has-error')).to.have.length(1)
  })
})

describe('(Component) RenderInput', () => {
  let _wrapper
  const propsWithType = {
    ...props,
    type: 'text'
  }

  it('Should render an Input with type', () => {
    _wrapper = shallow(<RenderInput {...propsWithType} />)

    const input = _wrapper.find('input')
    const text = _wrapper.find('[type="text"]')

    expect(text).to.have.length(1)
    expect(input).to.have.length(1)
  })

  it('Should render error message when props.meta.error is supplied', () => {
    const propsWithError = { ...propsWithType, meta: { touched: true, error: 'error' } }

    _wrapper = shallow(<RenderInput {...propsWithError} />)

    expect(_wrapper.contains(
      <span className='error'>error</span>
    )).to.be.true

    expect(_wrapper.find('.has-error')).to.have.length(1)
  })
})

describe('(Component) SubmitButton', () => {
  it('Should render a submit button', () => {
    const _wrapper = shallow(<SubmitButton>Submit</SubmitButton>)

    expect(_wrapper.contains(
      <button type='submit' className='btn btn-default'>Submit</button>
    )).to.be.true
  })
})

describe('(Component) Input', () => {
  it('Should render textarea type', () => {
    const _wrapper = shallow(<Input type='textarea' {...props} />)
    const field = _wrapper.find(Field)

    expect(field).to.have.length(1)
    expect(field.prop('component')).to.equal(RenderTextarea)
  })

  it('Should render input type', () => {
    const _wrapper = shallow(<Input type='text' {...props} />)
    const field = _wrapper.find(Field)

    expect(field).to.have.length(1)
    expect(field.prop('component')).to.equal(RenderInput)
  })
})
