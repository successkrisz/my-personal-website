import React from 'react';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router';
import { shallow } from 'enzyme';

import Header from 'components/Header';

describe('(Component) Header', () => {
  let _wrapper, children;

  before(() => {
    children = <div />;
    _wrapper = shallow(<Header>{ children }</Header>);
  });

  it('Should render a Navbar component', () => {
    expect(_wrapper.is(Navbar)).to.be.true;
  });

  it('Should render a Brand link to Homepage', () => {
    expect(_wrapper.contains(
      <Link to='/'>Krisztian Balla</Link>
    )).to.be.true;
  });

  it('Should render children', () => {
    expect(_wrapper.contains(children)).to.be.true;
  });
});
