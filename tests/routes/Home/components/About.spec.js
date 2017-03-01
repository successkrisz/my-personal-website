import React from 'react';
import { shallow } from 'enzyme';
import About from 'routes/Home/components/About';

describe('(Component) About', () => {
  let _wrapper;
  const props = {
    banner_src: 'path-to-banner',
    title: 'About',
    content: 'Content'
  };

  beforeEach(() => {
    _wrapper = shallow(<About {...props} />);
  });

  it('Should render title', () => {
    const title = _wrapper.find('h1');
    expect(title).to.have.length(1);
    expect(title.text()).to.equal(props.title);
  });

  it('Should render an image', () => {
    const image = _wrapper.find('img');
    expect(image).to.have.length(1);
  });

  it('Should render content', () => {
    const div = _wrapper.find('div');
    expect(div).to.have.length(1);
  });
});
