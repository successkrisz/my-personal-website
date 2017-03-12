import React from 'react';
import Footer from 'components/Footer';
import { shallow } from 'enzyme';

describe('(Component) Footer', () => {
  let _wrapper;
  const props = {
    github: 'link-to-github',
    linkedin: 'link-to-linkedin',
    quote: {
      author: 'Quote Author',
      text: 'Quote Text'
    }
  };

  beforeEach(() => {
    _wrapper = shallow(<Footer {...props} />);
  });

  it('Renders a Footer element', () => {
    const footer = _wrapper.find('footer');
    expect(footer).to.exist;
  });

  it('Should render a quote', () => {
    const paragraph = _wrapper.find('p');
    expect(paragraph).to.exist;
    expect(_wrapper.contains(props.quote.author)).to.be.true;
    expect(_wrapper.contains(props.quote.text)).to.be.true;
  });

  it('Should render a link to github', () => {
    expect(_wrapper.contains(
      <a href={`https://github.com/${props.github}`} target='_blank'>
        <i className='fa fa-github fa-3x' aria-hidden='true' /> GitHub
      </a>
    )).to.be.true;
  });

  it('Should render a link to linkedIn', () => {
    expect(_wrapper.contains(
      <a href={props.linkedin} target='_blank'>
        <i className='fa fa-linkedin-square fa-3x' aria-hidden='true' /> LinkedIn
      </a>
    )).to.be.true;
  });

  it('Should render a link to my CV', () => {
    expect(_wrapper.contains(
      <a href='Krisztian_Balla_CV.pdf' target='_blank'>
        <i className='fa fa-file-pdf-o fa-3x' aria-hidden='true' /> View my CV
      </a>
    )).to.be.true;
  });
});
