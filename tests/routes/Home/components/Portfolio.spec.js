import React from 'react'
import { shallow } from 'enzyme'
import { Panel } from 'react-bootstrap'
import Portfolio, { PortfolioItem } from 'routes/Home/components/Portfolio'

describe('(Component) Portfolio', () => {
  let _wrapper
  const props = [
    { title: 'url-1' },
    { title: 'url-2' }
  ]

  beforeEach(() => {
    _wrapper = shallow(<Portfolio portfolio={props} />)
  })

  it('Should render a "Portfolio" title', () => {
    const title = _wrapper.find('h1')
    expect(title).to.have.length(1)
    expect(title.text()).to.equal('Portfolio')
  })

  it('Should render a <PortolioItem /> for each site', () => {
    const items = _wrapper.find(PortfolioItem)
    expect(items).to.have.length(2)
  })

  it('<PortfolioItem /> Should render title', () => {
    _wrapper = shallow(<PortfolioItem item={props[0]} />)
    const header = _wrapper.find(Panel).prop('header')
    expect(header).to.equal(props[0].title)
  })

  it('<PortfolioItem /> Should render image', () => {
    _wrapper = shallow(<PortfolioItem item={props[0]} />)
    const image = _wrapper.find('img')
    expect(image).to.have.length(1)
  })
})
