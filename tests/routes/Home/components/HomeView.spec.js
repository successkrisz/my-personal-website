import React from 'react'
import { shallow } from 'enzyme'
import HomeView from 'routes/Home/components/HomeView'
import AboutContainer from 'routes/Home/containers/AboutContainer'
import GitHubWidgetContainer from 'routes/Home/containers/GitHubWidgetContainer'
import LinksContainer from 'routes/Home/containers/LinksContainer'
import ContactContainer from 'routes/Home/containers/ContactContainer'

describe('(Component) HomeView', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<HomeView />)
  })

  it('Should render AboutContainer', () => {
    expect(_wrapper.find(AboutContainer)).to.exist
  })

  it('Should render GitHubWidgetContainer', () => {
    expect(_wrapper.find(GitHubWidgetContainer)).to.exist
  })

  it('Should render LinksContainer', () => {
    expect(_wrapper.find(LinksContainer)).to.exist
  })

  it('Should render ContactContainer', () => {
    expect(_wrapper.find(ContactContainer)).to.exist
  })
})
