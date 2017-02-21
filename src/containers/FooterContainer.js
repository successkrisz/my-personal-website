import { connect } from 'react-redux';

import Footer from 'components/Footer';

const mapStateToProps = (state) => ({
  github: 'https://github.com/successkrisz',
  linkedin: 'https://www.linkedin.com/in/krisztianballa',
  quote: {
    'author': 'Linus Torvalds',
    'text': 'Most good programmers do programming not because they expect to get paid or get adulation by the public, but because it is fun to program.'
  }
});

export default connect(mapStateToProps)(Footer);
