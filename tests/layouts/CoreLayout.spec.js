import React from 'react';
import { shallow } from 'enzyme';
import CoreLayout from 'layouts/CoreLayout';
import Navigation from 'components/Navigation';
import FooterContainer from 'containers/FooterContainer';

describe('(Layout) Core', () => {
  let _wrapper;

  it('Should render a spinner if data isn\'t supplied', () => {
    _wrapper = shallow(<CoreLayout><h1>children</h1></CoreLayout>);

    expect(_wrapper.contains(
      <i className='fa fa-spinner fa-spin' />
    )).to.be.true;

    expect(_wrapper.contains(
      <h1>children</h1>
    )).to.be.false;
  });

  describe('If data is present: ', () => {
    beforeEach(() => {
      _wrapper = shallow(<CoreLayout data><h1>children</h1></CoreLayout>);
    });

    it('Should render Navigation, Children and Footer', () => {
      expect(_wrapper.contains(<Navigation />)).to.be.true;
      expect(_wrapper.contains(<FooterContainer />)).to.be.true;
      expect(_wrapper.contains(<h1>children</h1>)).to.be.true;
    });

    it('Shouldn\'t render spinner', () => {
      expect(_wrapper.contains(
        <i className='fa fa-spinner fa-spin' />
      )).to.be.false;
    });
  });
});
