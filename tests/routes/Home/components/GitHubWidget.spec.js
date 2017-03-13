import React from 'react'
import { render, shallow } from 'enzyme'
import GitHubWidget from 'routes/Home/components/GitHubWidget'

describe('(Component) GitHubWidget', () => {
  let _wrapper
  const repos = [{
    id: 1,
    url: 'url',
    name: 'my-repo',
    description: 'desc',
    pushedAt: 1
  }]

  it('Should render link to GitHub user page', () => {
    _wrapper = render(<GitHubWidget username='successkrisz' repos={repos} isFetching={false} loadGithub={() => {}} />)
    const link = _wrapper.find('h3').find('a')

    expect(link).to.exist
    expect(link.prop('href')).to.match(/successkrisz/)
  })

  it('Should render link for each repo', () => {
    _wrapper = shallow(<GitHubWidget username='successkrisz' repos={repos} isFetching={false} loadGithub={() => {}} />)
    const link = _wrapper.find('li').find('a')

    expect(link).to.have.length(1)
  })

  it('Should render a spinner while fetching', () => {
    _wrapper = shallow(<GitHubWidget username='successkrisz' repos={null} isFetching loadGithub={() => {}} />)
    const link = _wrapper.find('li').find('a')

    expect(link).to.have.length(0)
    expect(_wrapper.contains(
      <i className='fa fa-spinner' />
    )).to.be.true
  })
})
