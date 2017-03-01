import React from 'react';
import { shallow } from 'enzyme';
import CoreLayout from 'layouts/CoreLayout';
import Navigation from 'components/Navigation';
import FooterContainer from 'containers/FooterContainer';

describe('(Layout) Core', () => {
  let fetchContent, _wrapper;

  describe('If data isn\'t supplied', () => {
    beforeEach(() => {
      fetchContent = sinon.spy();
      _wrapper = shallow(<CoreLayout fetchContent={fetchContent}><h1>children</h1></CoreLayout>);
    });

    it('Should call fetchContent() if data isn\'t supplied', () => {
      expect(fetchContent).to.have.been.called;
    });

    it('Should render a spinner if data isn\'t supplied', () => {
      expect(_wrapper.contains(
        <i className='fa fa-spinner fa-spin' />
      )).to.be.true;
    });
  });

  describe('If data is present: ', () => {
    beforeEach(() => {
      fetchContent = sinon.spy();
      _wrapper = shallow(<CoreLayout data fetchContent={fetchContent}><h1>children</h1></CoreLayout>);
    });

    it('Should render Navigation, Children and Footer', () => {
      expect(_wrapper.contains(<Navigation />)).to.be.true;
      expect(_wrapper.contains(<FooterContainer />)).to.be.true;
      expect(_wrapper.contains(<h1>children</h1>)).to.be.true;
    });

    it('Shouldn\'t call fetchContent()', () => {
      expect(fetchContent).have.not.been.called;
    });
  });
});
