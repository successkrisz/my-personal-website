import React from 'react';
import { render } from 'enzyme';
import Links from 'routes/Home/components/Links';

describe('(Component) Links', () => {
  let _wrapper;
  const links = [
    {
      id: 1,
      url: 'url-1',
      title: 'title-1',
      description: 'desc-1'
    },
    {
      id: 2,
      url: 'url-2',
      title: 'title-2',
      description: 'desc-2'
    }
  ];

  beforeEach(() => {
    _wrapper = render(<Links links={links} />);
  });

  it('Should render each Link', () => {
    const anchors = _wrapper.find('a');
    expect(anchors).to.have.length(2);
  });

  it('Should render header: "Recommended Links"', () => {
    const header = _wrapper.find('h3');
    expect(header.text()).to.equal('Recommended Links');
  });
});
