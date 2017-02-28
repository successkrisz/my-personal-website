import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { shallow } from 'enzyme';
import Navigation from 'components/Navigation';

describe('(Component) Navigation', () => {
  let _wrapper;

  beforeEach(() => {
    _wrapper = shallow(<Navigation />);
  });

  it('Renders a Navbar', () => {
    expect(_wrapper.is(Navbar)).to.be.true;
  });

  describe('Navigation Links...', () => {
    it('Should render a Brand link to #', () => {
      expect(_wrapper.contains(
        <a href='#'>Krisztian Balla</a>
      )).to.be.true;
    });

    it('Should render an About link', () => {
      expect(_wrapper.containsMatchingElement(
        <NavItem href="#">About</NavItem>
      )).to.be.true;
    });

    it('Should render a Contact link', () => {
      expect(_wrapper.containsMatchingElement(
        <NavItem href="#contact">Contact</NavItem>
      )).to.be.true;
    });
  });
});
